const navbarContent = document.getElementById('navbar-content');
const navbarFileName = 'navbar.html';

const loadNavbar = async () => {
  try {
    const response = await fetch(navbarFileName);
    const body = await response.text();
    navbarContent.innerHTML = body;

    const navMenu = document.querySelector('#navMenu');
    const hamburger = document.querySelector('#hamburger');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    })
  } catch (err) {
    console.log(err);
  }
}

loadNavbar();