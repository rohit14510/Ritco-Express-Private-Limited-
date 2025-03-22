// const menuIcon = document.querySelector('.menu-icon');
// const navLinks = document.querySelector('.nav-links');

// menuIcon.addEventListener('click', () => {
//   const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
//   menuIcon.setAttribute('aria-expanded', !isExpanded);
//   navLinks.classList.toggle('active');
// });

// testimonials slide

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonials_splide", {
    type: "loop",
    perPage: 2, // Default for desktop
    autoplay: true,
    breakpoints: {
      768: {
        perPage: 1, // For screens 768px or smaller
      },
    },
  }).mount();
});
// About Page Testimonials
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonials_splide-1", {
    type: "loop",
    perPage: 3, // Default for desktop
    autoplay: true,
    breakpoints: {
      768: {
        perPage: 1, // For screens 768px or smaller
      },
    },
  }).mount();
});
 // काउंटर फ़ंक्शन
 function startCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const speed = 200; // जितना छोटा उतना तेज़
  const increment = Math.ceil(target / speed);

  let count = 0;
  
  const updateCounter = () => {
    if (count < target) {
      count += increment;
      if (count > target) count = target; // लिमिट सेट करना
      counter.textContent = count;
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
}

// स्क्रॉल पर काउंटर स्टार्ट
function checkScroll() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && !counter.classList.contains('started')) {
      counter.classList.add('started');
      startCounter(counter);
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);  // लोड पर भी चेक करें