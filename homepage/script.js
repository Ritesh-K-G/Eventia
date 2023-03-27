let swiper1 = new Swiper(".mySwiper", {

    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      loop: true,
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    // followFinger: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


let details = document.querySelector('.card-content');
const detailsbutton = document.querySelector('.btn');
detailsbutton.addEventListener('click', () => {
  details.classList.add('active');
});


const readlessbutton = document.querySelector('.readless');
readlessbutton.addEventListener('click', () => {
  details.classList.remove('active');
});




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



    

    

