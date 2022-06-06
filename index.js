//portfolio section

const btnGroup = document.querySelector(".btn-group");
const btns = document.querySelectorAll(".button");
const works = document.querySelectorAll(".work");
const home = document.querySelector(".home");


// btnGroup.addEventListener("click", (e) => {
//     const pBtns = e.target;

//     btns.forEach((btn) => {
//         btn.classList.remove("btn-active");
//     });
//     pBtns.classList.add("btn-active");

//     const btnNumber = pBtns.dataset.btnNum;

//     const workActive = document.querySelectorAll(`.p-btn-${btnNumber}`);

//     works.forEach((work) => work.classList.add("work-not-active"));
//     workActive.forEach((work) => work.classList.remove("work-not-active"));
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//responsive na vbar
const mobileResponse = document.querySelector('.mobile-responsive');
mobileResponse.addEventListener('click', () => {
    home.classList.toggle('nav-active')
})


const scrollToTop = document.getElementById("scroll-to-top");
scrollToTop.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth" });
});

//Animated counter
const counterNumber = document.querySelectorAll(".counter-number");

counterNumber.forEach((curNumber) => {
    const speed = 200;
    const updateNumber = () => {
        const targetNumber = parseInt(curNumber.dataset.number);
        const initialNumber = parseInt(curNumber.textContent);
        const speedRange = Math.trunc(targetNumber / speed);

        if (initialNumber < targetNumber) {
            curNumber.textContent = `${initialNumber + speedRange} +`;
            setInterval(updateNumber, 100);
        }
    };
    updateNumber();
});

//Scroll navbar
const target = document.querySelector(".home");
const observeElem = document.querySelector(".hero");

let observer = new IntersectionObserver((entry) => {
    const ent = entry[0];
    ent.isIntersecting === false ? target.classList.add('sticky') : target.classList.remove('sticky');

}, {});
observer.observe(observeElem);