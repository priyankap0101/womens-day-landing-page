// Mobile menu toggle with slide-down effect
document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.getElementById("mobile-nav");
  nav.classList.toggle("hidden");
  nav.classList.toggle("translate-y-0");
});

function celebrate() {
  confetti({ particleCount: 100, spread: 70 });
}

function countdownTimer() {
  const eventDate = new Date("March 8, 2025 00:00:00").getTime();
  setInterval(() => {
    let now = new Date().getTime();
    let diff = eventDate - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.querySelector(
      ".countdown"
    ).innerText = `🌸 ${days} days to Women's Day!`;
  }, 1000);
}
countdownTimer();

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
