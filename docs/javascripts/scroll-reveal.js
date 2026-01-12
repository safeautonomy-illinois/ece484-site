(() => {
  document.documentElement.classList.add('js');
  if (document.querySelector('.sa-hero')) {
    document.body.classList.add('sa-home');
  }
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReduced.matches) {
    document.querySelectorAll('.sa-reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const revealItems = document.querySelectorAll('.sa-reveal');
  if (!('IntersectionObserver' in window) || revealItems.length === 0) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  revealItems.forEach((el) => observer.observe(el));
})();
