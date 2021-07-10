const themeToggle = document.querySelector('.toggle-theme');
const darkThemeIcon = document.querySelector('.toggle-theme__icon--dark');
const lightThemeIcon = document.querySelector('.toggle-theme__icon--light');
const themeInfo = document.querySelector('.toggle-theme__info');

const theme = localStorage.getItem('theme');

if (theme === 'dark' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark-theme');
  darkThemeIcon.classList.add('inactive');
} else {
  lightThemeIcon.classList.add('inactive');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (theme === 'dark') {
    localStorage.setItem('theme', 'light');
    themeInfo.textContent = 'enable dark mode';
  } else {
    localStorage.setItem('theme', 'dark');
    themeInfo.textContent = 'enable light mode';
  }

  darkThemeIcon.classList.toggle('inactive');
  lightThemeIcon.classList.toggle('inactive');
});
