// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = target.offsetTop - headerHeight - 20;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Animate elements on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s, transform 0.6s';
  observer.observe(section);
});

// Typing effect for header
const text = "Software Engineering & Data Enthusiast";
const element = document.querySelector('header p');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    element.textContent = text.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', () => {
  element.textContent = '';
  typeWriter();
});