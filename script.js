// Intersection Observer for scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add(‘visible’);
}
});
}, { threshold: 0.15 });

// Observe phases
document.querySelectorAll(’.phase’).forEach((el, i) => {
el.style.transitionDelay = `${i * 0.15}s`;
observer.observe(el);
});

// Observe timeline items
document.querySelectorAll(’.tl-item’).forEach((el, i) => {
el.style.transitionDelay = `${i * 0.12}s`;
observer.observe(el);
});

// Smooth number counter for any stat elements (future use)
function animateCounter(el, target, duration = 1500) {
let start = 0;
const step = (timestamp) => {
if (!start) start = timestamp;
const progress = Math.min((timestamp - start) / duration, 1);
const eased = 1 - Math.pow(1 - progress, 3);
el.textContent = Math.floor(eased * target).toLocaleString();
if (progress < 1) requestAnimationFrame(step);
};
requestAnimationFrame(step);
}

// Subtle parallax on hero
const heroBg = document.querySelector(’.hero-bg’);
window.addEventListener(‘scroll’, () => {
const y = window.scrollY;
if (heroBg && y < window.innerHeight) {
heroBg.style.transform = `translateY(${y * 0.3}px)`;
}
});
