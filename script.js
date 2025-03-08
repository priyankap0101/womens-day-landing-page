// Mobile menu toggle with slide-down effect
document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.getElementById("mobile-nav");
  nav.classList.toggle("hidden");
  nav.classList.toggle("translate-y-0");
});

function celebrate() {
  confetti({ particleCount: 100, spread: 70 });
}

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide
showSlide(slideIndex);

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.remove("opacity-0", "scale-90", "translate-y-10");
    backToTopButton.classList.add("opacity-100", "scale-100");
  } else {
    backToTopButton.classList.remove("opacity-100", "scale-100");
    backToTopButton.classList.add("opacity-0", "scale-90", "translate-y-10");
  }
});
