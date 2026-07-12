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
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#16150f' : '#faf9f7');
  }

  applyTheme(preferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
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

    // Los enlaces marcados como plantilla no navegan (evita saltos molestos)
    document.querySelectorAll('a[data-placeholder]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (link.getAttribute('href') === '#') e.preventDefault();
      });
    });
  });
})();
