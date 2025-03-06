gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.text-box .mask span',
  { 'background-size': '0% 100%' },
  {
    'background-size': '100% 100%',
    scrollTrigger: {
      trigger: '.text-box',
      pinedContainer: '.text-box',
      start: '0% 40%',
      scrub: 1,
      markers: true,
    },
  }
);
