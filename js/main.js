const navOpen = document.getElementById("nav-open");
navClose = document.getElementById("nav-close");
navMenu = document.getElementById("nav-menu");
navLinks = document.querySelectorAll(".nav-link");
overlay = document.querySelector(".overlay"); 

let tl = gsap.timeline({
    paused: "true",
});

tl.to(".overlay", {
    duration: .2,
    opacity: .9,
    pointerEvents:'auto',
    ease:Expo.easeInOut,
});

tl.to(".nav-menu", {
    duration: 1,
    opacity: 1,
    x: 0,
    ease:Expo.easeInOut,
});

tl.fromTo(
    ".nav-item",
    {
    y: "-100%",
    opacity:0
},
{
    duration:0.5,
    opacity: 1,
    y: "0%",
    stagger:.25,
}
);
tl.fromTo(
    ".social-link, .email",
    {
    x: "-50%",
    opacity:0
},
{
    duration:0.8,
    opacity: 1,
    x: "0%",
    ease:Expo.easeInOut,
},
"-=0.5"
);

navOpen.addEventListener("click", () => {
    tl.play();
    navOpen.style.opacity = 0;
});

navClose.addEventListener("click", () => {
    tl.reverse();
    navOpen.style.opacity = 1;
});
overlay.addEventListener("click", () => {
    tl.reverse();
    navOpen.style.opacity = 1;
});
navLinks.forEach((e) => {
    e.addEventListener('click',() => {
        tl.reverse();
        navOpen.style.opacity = 1;
    })
});

//Hide logo 

function hidelogo() {
    const logo = document.querySelector(".logo")

    if (this.scrollY >= 100){
        logo.classList.add("hide-logo")
    }else {
        logo.classList.remove("hide-logo")
    }
}
window.addEventListener("scroll", hidelogo);

//hoverrrrrrrrrrrrr

new hoverEffect({
    parent: document.querySelector(".project-thumbnail"),
    intensity:0.3,
    image1:"/images/meditate.png",
    image2:"/images/meditate.png",
    displacementImage:"/images/meditated.png",
    imagesRatio:300 / 300,
});

new hoverEffect({
    parent: document.querySelector(".project-thumbnail2"),
    intensity:0.3,
    image1:"/images/artsyy.png",
    image2:"/images/artsyy.png",
    displacementImage:"/images/artsyy2.png",
    imagesRatio:300 / 300,
});
new hoverEffect({
    parent: document.querySelector(".project-thumbnail3"),
    intensity:0.3,
    image1:"/images/ereportapp.png",
    image2:"/images/ereportapp.png",
    displacementImage:"/images/ereportappd.png",
    imagesRatio:300 / 300,
});

console.log(hoverEffect);

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    if(this.scrollY >= 200) scrollUp.classList.add("show-scroll")
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);



