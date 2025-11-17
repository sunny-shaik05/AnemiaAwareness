// Animate each week section when it scrolls into view
const weeks = document.querySelectorAll('.week');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

weeks.forEach(week => {
  observer.observe(week);
});