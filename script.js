// skoffroad — site interactions
// counter animation + subtle parallax on hero mountains

(() => {
  // --- counters ----------------------------------------------------------
  const fmt = (n) => n.toLocaleString('en-US');
  const animateCounter = (el) => {
    const targetText = el.textContent.trim();
    const target = parseInt(el.dataset.target ?? targetText.replace(/[^\d]/g, ''), 10);
    if (!Number.isFinite(target) || target === 0) return;

    const duration = 1400;
    const start = performance.now();
    const prefix = targetText.match(/^[^\d]*/)?.[0] ?? '';
    const suffix = targetText.match(/[^\d]*$/)?.[0] ?? '';

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.round(target * eased);
      el.textContent = `${prefix}${fmt(v)}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counters = document.querySelectorAll('.stat-number[data-target]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => io.observe(c));
  } else {
    counters.forEach(animateCounter);
  }

  // --- hero parallax -----------------------------------------------------
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) {
    const far = document.querySelector('.hero-mountains:not(.hero-mountains-near)');
    const near = document.querySelector('.hero-mountains-near');
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (far)  far.style.transform  = `translateY(${y * 0.15}px)`;
        if (near) near.style.transform = `translateY(${y * 0.35}px)`;
        ticking = false;
      });
    }, { passive: true });
  }

  // --- konami code: rainbow tires ---------------------------------------
  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let buf = [];
  document.addEventListener('keydown', (e) => {
    buf.push(e.key);
    if (buf.length > konami.length) buf.shift();
    if (buf.join(',') === konami.join(',')) {
      document.body.classList.toggle('rainbow');
      buf = [];
    }
  });
})();
