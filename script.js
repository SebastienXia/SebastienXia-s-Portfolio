(function() {
  const el = document.getElementById('lang');
  const values = ['Java', 'Python', 'HTML', 'CSS', 'Kotlin'];
  let idx = 0;

  // Fonction qui alterne le texte avec un fondu
  function toggleText() {
    // faire disparaître
    el.classList.remove('visible');

    // après la demi-transition, changer le texte puis ré-afficher
    setTimeout(() => {
      idx = (idx + 1) % values.length;
      el.textContent = values[idx];
      el.classList.add('visible');
    }, 300); // doit correspondre au transition-duration CSS (300ms)
  }

    // démarre l'alternance toutes les 2000 ms (2s)
    const interval = setInterval(toggleText, 2000);

    // optionnel : arrêter l'alternance si la page devient inactive
    setInterval(toggleText, 2000);
})();