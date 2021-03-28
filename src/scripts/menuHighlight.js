const intersectionHandler = (entry) => {
  const { id } = entry.target;

  const active = document.querySelector(`.menu__el a.active`);
  const target = document.querySelector(`.menu__el a[href="#${id}"]`);

  if (active) {
    active.classList.remove('active');
  }
  if (target) {
    target.classList.add('active');
  }
};

const observer = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
};

const sections = document.querySelectorAll('.section');
const hero = document.querySelector('.hero');

const vh = document.documentElement.clientHeight;
const topMargin = Math.ceil(-0.45 * vh);
const bottomMargin = Math.ceil(-0.55 * vh);

const sectionObserver = new IntersectionObserver(observer, {
  rootMargin: `${topMargin}px 0px ${bottomMargin}px`,
});

[hero, ...sections].forEach((section) => {
  sectionObserver.observe(section);
});
