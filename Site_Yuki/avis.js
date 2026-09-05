import { db } from './firebase.js';
import { collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const form = document.getElementById('form-avis');
const liste = document.getElementById('liste-avis');

async function afficherAvis() {
    const q = query(collection(db, 'avis'), orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    liste.innerHTML = '';
    snapshot.forEach(function(doc) {
        const a = doc.data();
        const etoiles = '★'.repeat(a.note) + '☆'.repeat(5 - a.note);
        liste.innerHTML += '<div class="carte-avis visible"><strong>' + a.nom + '</strong><p>' + a.texte + '</p><span>' + etoiles + '</span></div>';
    });
    afficherMoyenne(snapshot);
}

function afficherMoyenne(snapshot) {
    const moyenne = document.getElementById('moyenne-etoiles');
    const texte = document.getElementById('moyenne-texte');
    if (snapshot.empty) {
        moyenne.innerHTML = '☆☆☆☆☆';
        texte.textContent = 'Aucun avis pour le moment';
        return;
    }
    let total = 0;
    snapshot.forEach(function(doc) { total += parseInt(doc.data().note); });
    const note = Math.round(total / snapshot.size);
    moyenne.innerHTML = '★'.repeat(note) + '☆'.repeat(5 - note);
    texte.textContent = (total / snapshot.size).toFixed(1) + ' / 5 — ' + snapshot.size + ' avis';
}

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const nom = document.getElementById('nom-avis').value;
    const texte = document.getElementById('texte-avis').value;
    const note = parseInt(document.getElementById('note-avis').value);
    await addDoc(collection(db, 'avis'), { nom, texte, note, date: new Date() });
    form.reset();
    afficherAvis();
});

const etoiles = document.querySelectorAll('.etoile');
etoiles.forEach(function(etoile) {
    etoile.addEventListener('click', function() {
        const valeur = this.dataset.valeur;
        document.getElementById('note-avis').value = valeur;
        etoiles.forEach(function(e) { e.classList.remove('active'); });
        for (let i = 0; i < valeur; i++) { etoiles[i].classList.add('active'); }
    });
});

afficherAvis();