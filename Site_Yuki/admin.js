import { db, auth } from './firebase.js';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// Affiche l'admin dès qu'un utilisateur est connecté (session gardée par Firebase)
onAuthStateChanged(auth, function(user) {
    if (user) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('admin').style.display = 'block';
        afficherPlats();
        afficherReservations();
    } else {
        document.getElementById('login').style.display = 'flex';
        document.getElementById('admin').style.display = 'none';
    }
});

function changerOnglet(panel) {
    document.querySelectorAll('.admin-panel').forEach(function(p) { p.style.display = 'none'; });
    document.querySelectorAll('.admin-tab').forEach(function(t) { t.classList.remove('actif'); });
    document.getElementById('panel-' + panel).style.display = 'block';
    document.querySelector('.admin-tab[data-panel="' + panel + '"]').classList.add('actif');
    if (panel === 'reservations') afficherReservations();
}

async function verifierMotDePasse() {
    const email = document.getElementById('email-admin').value.trim();
    const mdp = document.getElementById('mot-de-passe').value;
    const erreur = document.getElementById('erreur-login');
    erreur.textContent = '';

    if (!email || !mdp) {
        erreur.textContent = 'Veuillez remplir tous les champs.';
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, mdp);
        // onAuthStateChanged bascule l'affichage automatiquement
    } catch (e) {
        if (e.code === 'auth/invalid-credential' || e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found') {
            erreur.textContent = 'Email ou mot de passe incorrect.';
        } else if (e.code === 'auth/invalid-email') {
            erreur.textContent = 'Adresse email invalide.';
        } else if (e.code === 'auth/too-many-requests') {
            erreur.textContent = 'Trop de tentatives. Réessayez plus tard.';
        } else if (e.code === 'auth/operation-not-allowed' || e.code === 'auth/configuration-not-found' || e.code === 'auth/api-key-not-valid.-please-pass-a-valid-api-key.') {
            erreur.textContent = 'Authentification non configurée. Activez-la dans la console Firebase.';
        } else {
            erreur.textContent = 'Erreur de connexion. Réessayez.';
        }
        console.error(e);
    }
}

async function deconnexion() {
    await signOut(auth);
}

async function reinitialiserMotDePasse() {
    const email = document.getElementById('email-admin').value.trim();
    const erreur = document.getElementById('erreur-login');
    if (!email) {
        erreur.textContent = 'Entrez votre email puis cliquez sur « Mot de passe oublié ».';
        return;
    }
    try {
        await sendPasswordResetEmail(auth, email);
        erreur.style.color = '#2ecc71';
        erreur.textContent = 'Email de réinitialisation envoyé. Vérifiez votre boîte mail.';
    } catch (e) {
        erreur.style.color = '';
        erreur.textContent = 'Impossible d\'envoyer l\'email. Vérifiez l\'adresse.';
        console.error(e);
    }
}

async function afficherPlats() {
    const snapshot = await getDocs(collection(db, 'plats'));
    const container = document.getElementById('plats-container-admin');
    container.innerHTML = '';
    snapshot.forEach(function(d) {
        const p = d.data();
        container.innerHTML += `
            <div class="plat-admin">
                <div class="plat-admin-info">
                    <strong>${p.nom}</strong>
                    <div class="cat">${p.categorie}</div>
                    <p>${p.description}</p>
                </div>
                <div class="plat-admin-prix">${p.prix} €</div>
                <div class="plat-admin-actions">
                    <button class="btn-modifier" onclick="modifierPlat('${d.id}', '${p.nom}', '${p.description}', '${p.prix}', '${p.categorie}', '${p.image}')">Modifier</button>
                    <button class="btn-supprimer" onclick="supprimerPlat('${d.id}')">Supprimer</button>
                </div>
            </div>
        `;
    });
}

async function sauvegarderPlat() {
    const id = document.getElementById('plat-id').value;
    const nom = document.getElementById('plat-nom').value;
    const description = document.getElementById('plat-description').value;
    const prix = document.getElementById('plat-prix').value;
    const categorie = document.getElementById('plat-categorie').value;
    const image = document.getElementById('plat-image').value;

    if (!nom || !prix) return alert('Nom et prix obligatoires');

    if (id) {
        await updateDoc(doc(db, 'plats', id), { nom, description, prix, categorie, image });
    } else {
        await addDoc(collection(db, 'plats'), { nom, description, prix, categorie, image });
    }

    document.getElementById('plat-id').value = '';
    document.getElementById('plat-nom').value = '';
    document.getElementById('plat-description').value = '';
    document.getElementById('plat-prix').value = '';
    document.getElementById('plat-image').value = '';
    afficherPlats();
}

function modifierPlat(id, nom, description, prix, categorie, image) {
    document.getElementById('plat-id').value = id;
    document.getElementById('plat-nom').value = nom;
    document.getElementById('plat-description').value = description;
    document.getElementById('plat-prix').value = prix;
    document.getElementById('plat-categorie').value = categorie;
    document.getElementById('plat-image').value = image;
}

async function supprimerPlat(id) {
    if (!confirm('Supprimer ce plat ?')) return;
    await deleteDoc(doc(db, 'plats', id));
    afficherPlats();
}

/* ===== RÉSERVATIONS ===== */

async function afficherReservations() {
    const container = document.getElementById('reservations-container');
    const vide = document.getElementById('reservations-vide');
    const badge = document.getElementById('badge-reservations');
    if (!container) return;

    const snapshot = await getDocs(collection(db, 'reservations'));
    const reservations = [];
    snapshot.forEach(function(d) {
        reservations.push(Object.assign({ id: d.id }, d.data()));
    });

    if (badge) badge.textContent = reservations.length ? reservations.length : '';
    container.innerHTML = '';

    if (reservations.length === 0) {
        vide.style.display = 'block';
        return;
    }
    vide.style.display = 'none';

    // Tri chronologique : date puis heure
    reservations.sort(function(a, b) {
        return (a.date + a.heure).localeCompare(b.date + b.heure);
    });

    reservations.forEach(function(r) {
        const pluriel = r.personnes > 1 ? 's' : '';
        container.innerHTML += `
            <div class="reservation-admin">
                <div class="resa-quand">
                    <span class="resa-date">${formaterDate(r.date)}</span>
                    <span class="resa-heure">${r.heure}</span>
                </div>
                <div class="resa-infos">
                    <strong>${r.prenom} ${r.nom}</strong>
                    <span class="resa-personnes">${r.personnes} personne${pluriel}</span>
                    <a href="mailto:${r.email}" class="resa-email">${r.email}</a>
                </div>
                <button class="btn-supprimer-resa" onclick="supprimerReservation('${r.id}')">Supprimer</button>
            </div>
        `;
    });
}

function formaterDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

async function supprimerReservation(id) {
    if (!confirm('Supprimer cette réservation ?')) return;
    await deleteDoc(doc(db, 'reservations', id));
    afficherReservations();
}

window.verifierMotDePasse = verifierMotDePasse;
window.deconnexion = deconnexion;
window.reinitialiserMotDePasse = reinitialiserMotDePasse;
window.changerOnglet = changerOnglet;
window.sauvegarderPlat = sauvegarderPlat;
window.modifierPlat = modifierPlat;
window.supprimerPlat = supprimerPlat;
window.supprimerReservation = supprimerReservation;