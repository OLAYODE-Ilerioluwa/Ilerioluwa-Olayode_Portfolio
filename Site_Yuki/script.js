import { db } from './firebase.js';
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

async function afficherPlats() {
    const q = query(collection(db, 'plats'), limit(3));
    const snapshot = await getDocs(q);
    const container = document.querySelector('.plats-container');
    container.innerHTML = '';
    snapshot.forEach(function(d) {
        const p = d.data();
        container.innerHTML += `<div class="plat"><img src="${p.image || 'Image/felix-ngo--s9MPEdgzjQ-unsplash.jpg'}" alt="${p.nom}"><h3>${p.nom}</h3><p>${p.description}</p><p class="prix">${p.prix} €</p></div>`;
    });
    // Animer les cards après leur création
    container.querySelectorAll('.plat').forEach(function(el, i) {
        el.classList.add('pre-reveal');
        el.style.transitionDelay = (i * 0.1) + 's';
        observer.observe(el);
    });
}

afficherPlats();

const form = document.getElementById('form-avis');
const liste = document.getElementById('liste-avis');

function afficherAvis() {
    const avis = JSON.parse(localStorage.getItem('avis')) || [];
    liste.innerHTML = '';
    avis.forEach(function(a) {
        const etoiles = '★'.repeat(a.note) + '☆'.repeat(5 - a.note);
        liste.innerHTML += '<div class="carte-avis"><strong>' + a.nom + '</strong><p>' + a.texte + '</p><span>' + etoiles + '</span></div>';
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nom = document.getElementById('nom-avis').value;
    const texte = document.getElementById('texte-avis').value;
    const note = document.getElementById('note-avis').value;
    const avis = JSON.parse(localStorage.getItem('avis')) || [];
    avis.push({ nom: nom, texte: texte, note: note });
    localStorage.setItem('avis', JSON.stringify(avis));
    afficherAvis();
    form.reset();
});

afficherAvis();

function creerPetale() {
    const petale = document.createElement('div');
    petale.classList.add('petale');
    petale.style.left = Math.random() * 100 + 'vw';
    petale.style.animationDuration = (Math.random() * 3 + 4) + 's';
    petale.style.opacity = Math.random() * 0.6 + 0.4;
    petale.style.fontSize = (Math.random() * 10 + 10) + 'px';
    petale.innerHTML = '<img src="Image/Petale.png" style="width:20px;">';
    document.body.appendChild(petale);
    setTimeout(function() {
        petale.remove();
    }, 7000);
}

setInterval(creerPetale, 700);

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

// Éléments statiques — pas de stagger
document.querySelectorAll('.carte-avis, .about').forEach(function(el) {
    el.classList.add('pre-reveal');
    observer.observe(el);
});

const etoiles = document.querySelectorAll('.etoile');
etoiles.forEach(function(etoile) {
    etoile.addEventListener('click', function() {
        const valeur = this.dataset.valeur;
        document.getElementById('note-avis').value = valeur;
        etoiles.forEach(function(e) {
            e.classList.remove('active');
        });
        for (let i = 0; i < valeur; i++) {
            etoiles[i].classList.add('active');
        }
    });
});

const moins = document.getElementById('moins');
const plus = document.getElementById('plus');
const compteur = document.getElementById('compteur');

moins.addEventListener('click', function() {
    if (parseInt(compteur.textContent) > 1) {
        compteur.textContent = parseInt(compteur.textContent) - 1;
    }
});

plus.addEventListener('click', function() {
    if (parseInt(compteur.textContent) < 20) {
        compteur.textContent = parseInt(compteur.textContent) + 1;
    }
});

emailjs.init('Dn5wtaPyhAOZuLk-U');

document.querySelector('.reservation form').addEventListener('submit', function(e) {
    e.preventDefault();
    const textes = this.querySelectorAll('input[type="text"]');
    const prenom = textes[0].value.trim();
    const nom = textes[1].value.trim();
    const date = this.querySelector('input[type="date"]').value;
    const heure = this.querySelector('input[type="time"]').value;
    const email = document.getElementById('email-client').value.trim();
    const personnes = document.getElementById('compteur').textContent;
    const btnReserver = this.querySelector('button[type="submit"]');
    const form = this;

    // Validation
    if (!prenom || !nom || !date || !heure || !email) {
        afficherErreurReservation('Veuillez remplir tous les champs.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        afficherErreurReservation('Adresse email invalide.');
        return;
    }
    const dateChoisie = new Date(date);
    const aujourd_hui = new Date();
    aujourd_hui.setHours(0, 0, 0, 0);
    if (dateChoisie < aujourd_hui) {
        afficherErreurReservation('La date ne peut pas être dans le passé.');
        return;
    }
    if (dateChoisie.getDay() === 0) {
        afficherErreurReservation('Le restaurant est fermé le dimanche.');
        return;
    }

    // État de chargement
    btnReserver.disabled = true;
    btnReserver.textContent = 'Envoi en cours…';

    const params = {
        prenom: prenom,
        nom: nom,
        date: date,
        heure: heure,
        personnes: personnes,
        email_client: email
    };

    Promise.all([
        addDoc(collection(db, 'reservations'), {
            prenom: prenom,
            nom: nom,
            date: date,
            heure: heure,
            personnes: parseInt(personnes),
            email: email,
            createdAt: serverTimestamp()
        }),
        emailjs.send('service_r2383z8', 'template_rot4jzk', params),
        emailjs.send('service_r2383z8', 'template_7q88app', params)
    ]).then(function() {
        const section = document.querySelector('.reservation');
        section.innerHTML = `
            <div class="reservation-confirmation">
                <p class="reservation-badge">Réservation</p>
                <h2>Votre réservation a été notée</h2>
                <p class="confirmation-details">${prenom} ${nom} — ${date} à ${heure} — ${personnes} personne(s)</p>
                <p class="confirmation-email">Un email de confirmation a été envoyé à ${email}</p>
                <button class="btn-annuler" id="btn-annuler">Annuler la réservation</button>
            </div>
        `;
        document.getElementById('btn-annuler').addEventListener('click', function() {
            location.reload();
        });
    }).catch(function(error) {
        btnReserver.disabled = false;
        btnReserver.textContent = 'RÉSERVER';
        afficherErreurReservation('Erreur lors de l\'envoi. Vérifiez votre connexion et réessayez.');
        console.error(error);
    });
});

function afficherErreurReservation(message) {
    let erreur = document.getElementById('erreur-reservation');
    if (!erreur) {
        erreur = document.createElement('p');
        erreur.id = 'erreur-reservation';
        erreur.style.cssText = 'color:#e74c3c;font-size:13px;text-align:center;margin-top:12px;width:100%;';
        document.querySelector('.reservation form').appendChild(erreur);
    }
    erreur.textContent = message;
}

