import  gsap  from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function animationImg () {
let lt = gsap
  .timeline()
  .fromTo(
    '.rot',
    { z: 0, opacity: 0 },
    { z: 0, opacity: 1, stagger: 1, delay: 0, duration: 0 }
  );
//
ScrollTrigger.create({
  trigger: '.scrollpin',
  start: 'top 50',
  end: '+=500%',
  //   end: () => '+=' + document.querySelector('.scrollpin').offsetHeight,
  scrub: true,
  pin: true,
  markers: true,
  animation: lt,
  anticipatePin: 1,
  id: 'main',
});
}


