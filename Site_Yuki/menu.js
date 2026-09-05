import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

async function afficherPlats(categorie = 'tout') {
    const snapshot = await getDocs(collection(db, 'plats'));
    const container = document.querySelector('.plats-container');
    container.innerHTML = '';
    snapshot.forEach(function(d) {
        const p = d.data();
        if (categorie !== 'tout' && p.categorie !== categorie) return;
        container.innerHTML += `
            <div class="plat visible" data-categorie="${p.categorie}">
                <img src="${p.image || 'Image/felix-ngo--s9MPEdgzjQ-unsplash.jpg'}" alt="${p.nom}">
                <h3>${p.nom}</h3>
                <p>${p.description}</p>
                <p class="prix">${p.prix} €</p>
            </div>
        `;
    });
}

const filtres = document.querySelectorAll('.filtre');
filtres.forEach(function(btn) {
    btn.addEventListener('click', function() {
        filtres.forEach(function(b) { b.classList.remove('actif'); });
        this.classList.add('actif');
        afficherPlats(this.dataset.filtre);
    });
});

afficherPlats();