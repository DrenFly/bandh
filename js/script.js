const menuBtn = document.querySelector('.menu-btn');
const menu1 = document.querySelector('.menumob-1');
const menu = document.querySelector('.menumob');
const menuNav = document.querySelector('.menumob-nav');
const navItems = document.querySelectorAll('.nav-item');


//Set initial State
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menu1.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
  
      // Set Menu State
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menu1.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
  
      // Set Menu State
      showMenu = false;
    }
  }
