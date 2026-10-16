/* Comportamentos das páginas Exercícios Físicos e Vídeo.
   Links marcados com data-soon ainda não têm destino: mostram um aviso. */
document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  let timer;

  window.showSoon = function (message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('show'), 2800);
  };

  document.querySelectorAll('[data-soon]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.showSoon(el.dataset.soon);
    });
  });
});
