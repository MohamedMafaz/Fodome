const navbarContent = document.getElementById('navbar-content');
const navbarFileName = 'navbar.html';

const loadNavbar = async () => {
  try {
    const response = await fetch(navbarFileName);
    const body = await response.text();
    navbarContent.innerHTML = body;

    // Add `active` class
    const getPage = window.location.pathname.split('/')[1];
    console.log("d", getPage);

    var menuItems = document.querySelectorAll('nav .nav__menu li a');

    if (getPage === "" || getPage === "index.html") {
      menuItems[0].classList.add("active");
    } else {
      for (var i = 0, len = menuItems.length; i < len; i++) {
          if (menuItems[i].getAttribute("href").indexOf(getPage) !== -1) {
              menuItems[i].classList.add("active");
          }
      }
    }

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
