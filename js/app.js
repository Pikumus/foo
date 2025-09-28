document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.technology__button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileBurger = document.getElementById('mobile-burger');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  mobileBurger.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});