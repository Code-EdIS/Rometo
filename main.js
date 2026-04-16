const phoneSection = document.getElementById("phoneSection");
const phone = document.getElementById("smartphone");
const title = document.getElementById("siteName");
const cta = document.getElementById("cta");
const content = document.getElementById("content");

const pagina = document.body;

// ENTRY ANIMATION
window.addEventListener("load", () => {
  pagina.classList.remove("opacity-0", "-translate-y-10");
  pagina.classList.add("opacity-100");
  
  setTimeout(() => {phone.classList.remove("opacity-0", "translate-y-10");
  phone.classList.add("opacity-100", "translate-y-0", "rotate-90");
  }, 800);
  setTimeout(() => {
    title.classList.remove("opacity-0", "scale-0");
    title.classList.add("opacity-100", "scale-100");
  }, 1200);
  setTimeout(() => {
    cta.classList.remove("opacity-0", "scale-0");
    cta.classList.add("opacity-100", "scale-100");
  }, 2200);
});

// SCROLL EFFECT
window.addEventListener("scroll", () => {
  const rect = phoneSection.getBoundingClientRect();

  const progress = Math.min(
    Math.max(-rect.top / rect.height, 0),
    1
  );

  // PHONE SCALE
  const scale = 1 - progress * 0.15;
  phone.style.transform = `translateY(0) scale(${scale}) rotate(90deg)`;

  // CTA FADE
  cta.style.opacity = 1 - progress * 1.2;
  cta.style.transform = `translateY(${progress * 20}px)`;

  // TITLE FADE
  title.style.opacity = 1 - progress * 0.8;
});

// CONTENT APPEAR
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      content.classList.remove("opacity-0", "translate-y-10");
      content.classList.add("opacity-100", "translate-y-0");
    }
  });
});

observer.observe(document.getElementById("trigger"));
