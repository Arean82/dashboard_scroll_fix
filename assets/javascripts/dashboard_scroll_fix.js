document.addEventListener('DOMContentLoaded', function () {

  if (!window.DSFix) return;

  var container = document.querySelector('.issues_container');
  if (!container) return;

  var content = document.querySelector('#content');
  if (content) content.style.overflow = 'visible';

  // Wrap issues container
  var wrap;
  if (!container.parentElement.classList.contains('rsf-scroll-wrapper')) {
    wrap = document.createElement('div');
    wrap.className = 'rsf-scroll-wrapper';
    container.parentNode.insertBefore(wrap, container);
    wrap.appendChild(container);
  } else {
    wrap = container.parentElement;
  }

  var cols = container.querySelectorAll('.status_column');
  cols.forEach(function (c) {
    c.classList.add('rsf-status-column');
  });

  /* -------------------------------
     ✅ SCROLL MODE HANDLING (FIX)
  -------------------------------- */

  if (window.DSFix.scrollMode === "dashboard_only") {
    wrap.style.overflowX = "auto";
    wrap.style.width = "100%";
    wrap.style.display = "block";
  }
  else if (window.DSFix.scrollMode === "full_width") {
    wrap.style.overflowX = "visible";
    container.style.minWidth = "2000px";
  }
  else { // auto
    wrap.style.overflowX = "auto";
    wrap.style.width = "100%";
  }

  /* -------------------------------
     ✅ AUTO SHRINK (FIXED SCOPE)
  -------------------------------- */
  if (window.DSFix.autoShrink && cols.length > window.DSFix.shrinkThreshold) {
    wrap.classList.add('rsf-shrink');
  } else {
    wrap.classList.remove('rsf-shrink');
  }

});
