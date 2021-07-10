const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const enlargeBtns = document.querySelectorAll('.gallery__enlarge-btn');
const images = document.querySelectorAll('.gallery__img');
const caption = document.querySelector('.modal__caption');
const prevBtn = document.querySelector('.modal__prev');
const nextBtn = document.querySelector('.modal__next');
let position = 0;

const setModal = (previewImg, targetImg, targetCaption) => {
  const { alt, src } = previewImg;

  targetImg.src = src;
  targetImg.alt = alt;
  targetCaption.textContent = alt;
};

enlargeBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modal.classList.add('open');
    setModal(btn.nextElementSibling, modalImg, caption);
    position = i;

    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') {
        modal.classList.remove('open');
        document.removeEventListener('keydown', handler);
      }
    });
  });
});

modal.addEventListener('click', (e) => {
  if (e.target != modalImg && e.target != caption && e.target != prevBtn && e.target != nextBtn) {
    modal.classList.remove('open');
  }
});

nextBtn.addEventListener('click', () => {
  if (position < images.length - 1) {
    position += 1;
  } else {
    position = 0;
  }

  setModal(images[position], modalImg, caption, position);
});

prevBtn.addEventListener('click', () => {
  if (position > 0) {
    position -= 1;
  } else {
    position = images.length - 1;
  }

  setModal(images[position], modalImg, caption);
});
