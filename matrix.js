// navbar

const hamberger = document.querySelector(".hamburger");
const mobMenu = document.querySelector(".mob-menu");
hamberger.addEventListener("click", function(){
    this.classList.toggle("active");
    mobMenu.classList.toggle("mob");
});

// herooo section

window.onload = function(){
    const heroImg=document.querySelector(".hero .hero-text .hero-img");
    const heroContent=document.querySelector(".hero .hero-text .hero-content");
    // console.log('title:',heroImg);
    // console.log('title2:',heroContent);

    window.addEventListener("scroll", function(){
        heroImg.style.transform="translateY(" + this.pageYOffset/1.6+"%)"
        heroContent.style.transform="translateY(" + this.pageYOffset/.7+"%)"
        // heroContent.style.display="none"
    });

}

//carosoul


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

//   var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });