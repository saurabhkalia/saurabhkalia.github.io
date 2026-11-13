(() => {
  const p = window.PROFILE || {};
  const root = document.body.dataset.root || './';
  document.querySelectorAll('[data-profile-link]').forEach(a => {
    const key = a.dataset.profileLink;
    let url = key === 'cv' ? (p.cvAvailable ? root + 'files/saurabh-kalia-cv.pdf' : '') : p[key];
    if (key === 'email' && url && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url)) url = 'mailto:' + url;
    if (!url || !/^(https:\/\/|mailto:|\.\.?\/files\/)/.test(url)) return;
    a.href = url;
    a.hidden = false;
    document.querySelectorAll('[data-contact-placeholder="' + key + '"]').forEach(el => el.hidden = true);
  });
  document.querySelectorAll('[data-updated]').forEach(el => { el.textContent = p.lastUpdated || 'November 4, 2026'; });
  if (p.cvAvailable) document.querySelectorAll('[data-cv-pending]').forEach(el => el.hidden = true);
  if (p.email || p.linkedin || p.github) document.querySelectorAll('[data-contact-pending]').forEach(el => el.hidden = true);
  const panels = [...document.querySelectorAll('.tab-panel')];
  const tabs = [...document.querySelectorAll('[data-tab]')];
  function activatePanel() {
    const id = location.hash.slice(1) || 'about';
    const target = panels.find(panel => panel.id === id);
    if (!target) return;
    panels.forEach(panel => panel.hidden = panel !== target);
    tabs.forEach(tab => {
      const active = tab.dataset.tab === id;
      tab.classList.toggle('active', active);
      if (active) tab.setAttribute('aria-current', 'page');
      else tab.removeAttribute('aria-current');
    });
  }
  if (panels.length) {
    activatePanel();
    window.addEventListener('hashchange', activatePanel);
  }
})();
