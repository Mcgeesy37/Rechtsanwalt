const revealItems = document.querySelectorAll("[data-reveal]");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => observer.observe(item));

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Vorschau-Modus: Formularversand kann im nächsten Schritt an Ihr System angebunden werden.";
  });
}
