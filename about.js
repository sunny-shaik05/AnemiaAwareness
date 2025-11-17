// Animate LinkedIn icons on hover
document.querySelectorAll('.member-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const icon = card.querySelector('.linkedin-icon');
    icon.style.transform = 'scale(1.2)';
  });

  card.addEventListener('mouseleave', () => {
    const icon = card.querySelector('.linkedin-icon');
    icon.style.transform = 'scale(1)';
  });
});