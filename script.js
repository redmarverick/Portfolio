const btnMobile = document.getElementById('ham-menu');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav-active');
}

btnMobile.addEventListener('click', toggleMenu);