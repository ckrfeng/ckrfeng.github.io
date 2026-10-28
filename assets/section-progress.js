(() => {
  const entries = Array.from(document.querySelectorAll('[data-scroll-entry]'));
  if (!entries.length) return;

  let activeEntry = null;
  let framePending = false;

  function updateActiveEntry() {
    framePending = false;
    const viewportHeight = window.innerHeight;
    const readingLine = viewportHeight * 0.4;
    const frameInset = window.matchMedia('(max-width: 700px)').matches ? 10 : 17;
    let nextEntry = null;
    let nearestDistance = Infinity;

    for (const entry of entries) {
      const bounds = entry.getBoundingClientRect();
      if (bounds.bottom <= frameInset || bounds.top >= viewportHeight - frameInset) continue;

      const distance = Math.max(bounds.top - readingLine, readingLine - bounds.bottom, 0);
      if (distance < nearestDistance) {
        nextEntry = entry;
        nearestDistance = distance;
      }
    }

    if (nextEntry === activeEntry) return;
    if (activeEntry) activeEntry.dataset.active = 'false';
    if (nextEntry) nextEntry.dataset.active = 'true';
    activeEntry = nextEntry;
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateActiveEntry);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate, { once: true });
  if (document.fonts) document.fonts.ready.then(scheduleUpdate);
  scheduleUpdate();
})();
