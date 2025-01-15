const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
  menuIcon.setAttribute('aria-expanded', !isExpanded);
  navLinks.classList.toggle('active');
});
