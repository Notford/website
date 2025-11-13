document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Contact form placeholder
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(form.checkValidity()){
        alert('Thank you for reaching out! I will respond shortly.');
        form.reset();
      }
    });
  }
});
