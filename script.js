// ============================================================
//  Aldo Turégano — interacciones del sitio
// ============================================================

(function () {
  'use strict';

  var root = document.documentElement;
  var STORAGE_KEY = 'theme';

  // --- Tema: preferencia guardada > preferencia del sistema > claro ---
  function preferredTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* modo privado: seguimos sin persistencia */
    }
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    // La barra del navegador sigue al tema elegido, no solo al del sistema
    var color = theme === 'dark' ? '#16150f' : '#faf9f7';
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (meta) {
      meta.setAttribute('content', color);
    });
    var toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  // El script se carga con defer: el DOM ya está listo
  (function () {
    applyTheme(preferredTheme());

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {
          /* sin persistencia disponible */
        }
      });
    }

    // Sigue la preferencia del sistema si el usuario no ha elegido manualmente
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        var saved = null;
        try {
          saved = localStorage.getItem(STORAGE_KEY);
        } catch (err) {}
        if (!saved) applyTheme(e.matches ? 'dark' : 'light');
      });
    }

    // Año dinámico en el footer
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  })();
})();
