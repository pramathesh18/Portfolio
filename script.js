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
  const navLinks = qsa('.nav a');

  // Placeholder for future logic
  // Example: active link on scroll
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
