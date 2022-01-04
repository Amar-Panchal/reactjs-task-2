gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top ',
    pin: true,
    x:100,
    pinSpacing: true
  });
});

AOS.init();

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1200:{
          items:1
      }
  }
})