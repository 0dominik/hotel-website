const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('expanded');
  menu.classList.toggle('expanded');

  const isExpanded = hamburger.getAttribute('aria-expanded') === 'false';

  hamburger.setAttribute('aria-expanded', isExpanded);
});

document.body.addEventListener('click', (e) => {
  if (e.target != nav && e.target != hamburger) {
    menu.classList.remove('expanded');
    hamburger.classList.remove('expanded');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});
