'use strict'

var swiper1 = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper2 = new Swiper(".reviewSwiper", {
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        895: {
          slidesPerView: 1,
         
        },
        1024: {
            slidesPerView: 3,
          spaceBetween: 0,

        },
       
    },
  });

  var swiper3 = new Swiper(".founderSwiper", {
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        700: {
          slidesPerView: 1,
         
      },
        1024: {
            slidesPerView: 2,
          spaceBetween: 80,

      }
       
  },
});
  