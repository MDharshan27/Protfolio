const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');
const icon = toggle.querySelector('i');
const navLinks = document.querySelectorAll('#navbar .nav_link a');

function toggleMenu() {
    nav.classList.toggle('active');
    toggle.classList.toggle('rotate');

    if (icon.classList.contains('bx-menu')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
}

toggle.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});


const logo = document.querySelector('.logo');
const mainSection = document.getElementById('main');

logo.addEventListener('click', () => {
    mainSection.scrollIntoView({ behavior: 'smooth' });
});


const slider = document.getElementById('projectSlider');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 280, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -280, behavior: 'smooth' });
  });


  const animateLines = document.querySelectorAll('.animate-line');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {threshold: 0.15}); 

  animateLines.forEach(el => observer.observe(el));

  let lastScroll = window.pageYOffset;
  const fadeTop = document.getElementById('fade-top');
  const fadeBottom = document.getElementById('fade-bottom');
  let fadeTimeout;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {

      fadeBottom.style.opacity = '1';
      fadeTop.style.opacity = '0';
    } else if (currentScroll < lastScroll) {

      fadeTop.style.opacity = '1';
      fadeBottom.style.opacity = '0';
    }

    lastScroll = currentScroll;

    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
      fadeTop.style.opacity = '0';
      fadeBottom.style.opacity = '0';
    }, 500);
  });
