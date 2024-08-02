const imgs = document.querySelectorAll(".header-slider ul img");
const prevBtn = document.querySelector(".control_prev");
const nextBtn = document.querySelector(".control_next");

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
};

changeSlide();

prevBtn.addEventListener("click", (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

nextBtn.addEventListener("click", (e) => {
    if (n < imgs.length -1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener("wheel",(evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
} 

// ========================== SCROLL REVEAL ========================//

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    dealy: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
 ScrollReveal().reveal('.home-contect h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contect p, .about-content', { origin: 'right' });