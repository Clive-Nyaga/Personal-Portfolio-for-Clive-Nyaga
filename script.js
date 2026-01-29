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

// Toggle Skills visibility
function toggleSkills() {
  const hiddenSkills = document.querySelectorAll('.hidden-skill');
  const button = document.querySelector('#skills .view-more-btn');
  
  hiddenSkills.forEach(skill => {
    if (skill.style.display === 'none' || skill.style.display === '') {
      skill.style.display = 'block';
    } else {
      skill.style.display = 'none';
    }
  });
  
  button.textContent = button.textContent === 'View More' ? 'View Less' : 'View More';
}

// Toggle Tech Stack visibility
function toggleTechStack() {
  const hiddenTech = document.querySelectorAll('.hidden-tech');
  const button = document.querySelector('#tech-stack .view-more-btn');
  
  hiddenTech.forEach(tech => {
    if (tech.style.display === 'none' || tech.style.display === '') {
      tech.style.display = 'block';
    } else {
      tech.style.display = 'none';
    }
  });
  
  button.textContent = button.textContent === 'View More' ? 'View Less' : 'View More';
}

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