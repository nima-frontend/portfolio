const pointers = {
    c1: document.querySelector('.c1'),
    c2: document.querySelector('.c2'),
};

let pos = { x: 0, y: 0 };

document.body.addEventListener('mousemove', (e) => {
    const scrollY = window.scrollY;

    pos.x = e.clientX;
    pos.y = e.clientY + scrollY;

    pointers.c1.style.transform = `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`;
    pointers.c2.style.transform = `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`;
});

document.body.addEventListener('mousedown', () => {
    pointers.c1.style.transform += ' scale(2)';
    pointers.c2.style.transform += ' scale(0.6)';
});

document.body.addEventListener('mouseup', () => {
    pointers.c1.style.transform = pointers.c1.style.transform.replace(' scale(2)', '') + ' scale(1)';
    pointers.c2.style.transform = pointers.c2.style.transform.replace(' scale(0.6)', '') + ' scale(1)';
});

// Prevent default cursor
document.body.addEventListener('click', (e) => {
    if (e.target !== pointers.c1 && e.target !== pointers.c2) {
        e.stopPropagation();
    }
});

//progress bar
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.scrollY / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

//hamburgur menu
const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');
const close = document.querySelector('#close');
const overlay = document.getElementById('overlay');

let isOpen = false;

navBtn.addEventListener('click', () => {
    isOpen = !isOpen; // Toggle the menu open state

    menuBar.classList.replace('hidden', 'flex');
    overlay.classList.toggle('hidden', !isOpen); // Show overlay
    overlay.classList.toggle('opacity-40', isOpen); // Fade in overlay
});

close.addEventListener('click', () => {
    isOpen = false; // Close the menu
    menuBar.classList.replace('flex', 'hidden');
    overlay.classList.add('hidden'); // Hide overlay
    overlay.classList.remove('opacity-40'); // Reset opacity
});

//typed text
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
    const words = ["Nima", "a Front-End Developer", "a Creative Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 0;

    function typeEffect() {
        let currentWord = words[wordIndex];

        if (!isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        }

        let speed = isDeleting ? 50 : 100; // Speed: Typing vs Deleting

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 1200; 
            isDeleting = true;
        } 
        else if (isDeleting && charIndex === 0) {
            delay = 500; 
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        } 
        else {
            delay = speed; 
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
});

//count up
function animateCounter(element, start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 16); 

    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(interval);
        }
        element.innerText = Math.floor(current) + "+";
    }, 16);
}

window.addEventListener("scroll", function () {
    const counterElement = document.querySelector(".count-up");
    const triggerHeight =  window.innerHeight * 0.75; // 75% of screen height

    if (counterElement && counterElement.getBoundingClientRect().top < triggerHeight) {
        animateCounter(counterElement, 0, 22, 1000);
        window.removeEventListener("scroll", arguments.callee); // Stop listening after animation
    }
});

//slider 1
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if (index > 2) return '';
          return '<span class="' + className + '"></span>';
        },
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  });


//slider 2
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // One slide per view on mobile
    spaceBetween: 10,
    navigation: {
        nextEl: '#nextSlide',
        prevEl: '#prevSlide',
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // Two slides per view on medium screens (md)
        },
        1024: {
            slidesPerView: 2, // Two slides per view on large screens (lg)
        }
    }
});