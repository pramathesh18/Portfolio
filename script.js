/* ================================
   Global App State (future use)
================================ */
const App = {
  initialized: false,
};

/* ================================
   Utility Functions
================================ */
function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

/* ================================
   Navigation Enhancements
   (active state, future scroll spy)
================================ */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (!targetId.startsWith('#')) return;

      e.preventDefault();

      const section = document.querySelector(targetId);
      if (!section) return;

      section.scrollIntoView({ behavior: 'smooth' });

      // set active state
      navLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');

      history.replaceState(null, '', targetId);
    });
  });
}

function setActiveLink(id) {
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === id);
  });
}



/* ================================
   Page Init
================================ */
function init() {
  if (App.initialized) return;

  initNavigation();

  App.initialized = true;
}

/* ================================
   DOM Ready
================================ */
document.addEventListener('DOMContentLoaded', init);
