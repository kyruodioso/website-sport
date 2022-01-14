const tl= gsap.timeline({defaults: {ease:'power1.out'}})
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
const bigText = document.querySelector('big-text')

tl.to('.text',{ y: "0%",duration:1,stagger:0.25 });
tl.to('.slider', {y: "-100%", duration: 1.5 , delay: 0.5})
tl.to('.intro', { y: "-100%", duration:1}, "-=1")
tl.fromTo('nav', {opacity:0},{opacity:1 , duration: 1})
tl.fromTo('.big-text', {opacity:0},{opacity:1 , duration: 1}, '-=1');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open')
})

