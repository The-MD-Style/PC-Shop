
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop:true,
  loopFillGroundWithBlank:false,
  pagination: {
    el: ".numberSlides",
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      current = String(current).length===1?'0'+current:current;
      total = String(total).length===1?'0'+total:total;

        return current + '/' + (total); 
    }
  },
  navigation: {
    nextEl:".next",
    prevEl:".prev",
  },
  breakpoints: {
    "0": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "650": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "950": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "1270": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
