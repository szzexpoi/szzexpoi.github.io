// Minimal progressive enhancement. The page works without JavaScript.
document.getElementById('year').textContent = new Date().getFullYear();

const navigationLinks = [...document.querySelectorAll('.primary-nav a')];
const sections = navigationLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navigationLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-18% 0px -62% 0px', threshold: [0, .1, .3] });
  sections.forEach(section => observer.observe(section));
}
