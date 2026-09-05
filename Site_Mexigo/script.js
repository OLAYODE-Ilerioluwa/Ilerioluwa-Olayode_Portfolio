// ============================================================
//  MexiGo — script.js
// ============================================================

const form = document.querySelector('.formulaire-contact');
if (form) {

  // Crée un message d'erreur sous un champ
  function setError(input, msg) {
    clearError(input);
    input.style.borderColor = 'var(--rouge)';
    const err = document.createElement('span');
    err.className = 'champ-erreur';
    err.style.cssText = 'color:#e63946;font-size:12px;font-family:"Barlow Condensed",sans-serif;letter-spacing:1px;margin-top:4px;display:block';
    err.textContent = msg;
    input.parentElement.appendChild(err);
  }

  function clearError(input) {
    input.style.borderColor = '';
    const prev = input.parentElement.querySelector('.champ-erreur');
    if (prev) prev.remove();
  }

  // Validation en temps réel
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => clearError(field));
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nom     = document.getElementById('nom');
    const email   = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    if (!nom.value.trim()) {
      setError(nom, 'Le nom est obligatoire.'); valid = false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!emailOk) {
      setError(email, 'Entrez un email valide.'); valid = false;
    }
    if (!message.value.trim()) {
      setError(message, 'Le message est obligatoire.'); valid = false;
    }

    if (valid) {
      const btn = form.querySelector('button[type="submit"] span');
      if (btn) btn.textContent = 'Demande envoyée ✓';
      form.reset();
      setTimeout(() => { if (btn) btn.textContent = 'Envoyer ma demande'; }, 3000);
    }
  });
}
