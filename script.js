if (typeof AOS !== undefined){
    AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 120,
});
}
// responsive//
const btn = document.querySelector("#cacher");
const navigation = document.querySelector("#heade");
btn.addEventListener("click", () => navigation.classList.toggle("active"));

// Counter animation//
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat-item[data-counter]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const numberEl = el.querySelector('.number');
        const target = parseInt(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        
        let start = null;
        
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const current = Math.floor(progress * target);
          numberEl.textContent = current + suffix;
          
          if (progress < 1) requestAnimationFrame(step);
          else numberEl.textContent = target + suffix;
        };
        
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});
//year of experience//
const yearCounter = document.querySelector('.nbr-year');
const targetYear = 8;
const duration = 2000;
let start = null;

const step = (timestamp) => {
  if (!start) start = timestamp;
  const progress = Math.min((timestamp - start) / duration, 1);
  const current = Math.floor(progress * targetYear);
  yearCounter.textContent = current;

  if (progress < 1) requestAnimationFrame(step);
  else yearCounter.textContent = targetYear;
};

requestAnimationFrame(step);

//testimonial//

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 700,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
