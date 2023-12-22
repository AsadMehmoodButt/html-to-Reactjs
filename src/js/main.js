let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

var swiper = new Swiper(".swiper-ourClients", {
  slidesPerView: 1,
  // spaceBetween: 20,
  loop: true,
// centeredSlides:true,
  autoplay: {
    delay: 2000,
  },
  
  breakpoints: {
    567: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,

    },
    1200:{
      slidesPerView:5
    }
  },
});

new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  centeredSlides:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView:1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },

    1200: {
      slidesPerView: 3,
    },
    
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.querySelectorAll('.nav-tabs .nav-link');

  function handleTabClick(event) {
    tabLinks.forEach(function (link) {
      link.parentElement.classList.remove('active');
    });

    event.currentTarget.parentElement.classList.add('active');
  }

  tabLinks.forEach(function (link) {
    link.addEventListener('click', handleTabClick);
  });

  tabLinks[0].click(); 
});

document.addEventListener('DOMContentLoaded', function () {
  var accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    item.addEventListener('click', function () {
      accordionItems.forEach(function (el) {
        el.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });
});



