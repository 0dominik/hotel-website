const nav = document.querySelector('.navigation');
const hero = document.querySelector('.hero');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      nav.classList.toggle('scrolled', !entry.isIntersecting);
    });
  },
  { threshold: 1 },
);

observer.observe(hero);
