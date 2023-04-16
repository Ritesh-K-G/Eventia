let swiper1 = new Swiper('.Swiper1', {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  grabCursor: true,
  // followFinger: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiper3 = new Swiper('.swiper3', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination3',
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});



// let details = document.querySelector('.card-content');
// const detailsbutton = document.querySelector('.btn');
// detailsbutton.addEventListener('click', () => {
//   details.classList.add('active');
// });


// const readlessbutton = document.querySelector('.readless');
// readlessbutton.addEventListener('click', () => {
//   details.classList.remove('active');
// });








// let upSection = document.getElementsByClassName("up-section")[0];


// let slides=['48189.jpg','https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049977/bg-hero-5-1792-x2.png'];

// let Start=0;

// function slider(){
//     if(Start<slides.length){
//         Start=Start+1;
//     }
//     else{
//         Start=1;
//     }
  
//     // let img = slides[Start-1];
//     // console.log(img);
//     upSection.style.backgroundImage = `url(${slides[Start-1]})`;
 
// }

// setInterval(slider,2000);



  



