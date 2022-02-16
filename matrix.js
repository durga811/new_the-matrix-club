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
    

    window.addEventListener("scroll", function(){
        heroImg.style.transform="translateY(" + this.pageYOffset/1.6+"%)"
        heroContent.style.transform="translateY(" + this.pageYOffset/.7+"%)"
       
    });

}

