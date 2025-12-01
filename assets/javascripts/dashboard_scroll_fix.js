document.addEventListener('DOMContentLoaded', function () {

  if (!window.DSFix) return;

  var container = document.querySelector('.issues_container');
  if (!container) return;

  var content = document.querySelector('#content');
  if (content) content.style.overflow = 'visible';

  // ✅ FORCE WRAP INTO SCROLL CONTAINER
  if (!container.parentElement.classList.contains('rsf-scroll-wrapper')) {
    var wrap = document.createElement('div');
    wrap.className = 'rsf-scroll-wrapper';
    wrap.style.width = '100%';
    wrap.style.overflowX = 'auto';
    wrap.style.overflowY = 'hidden';
    container.parentNode.insertBefore(wrap, container);
    wrap.appendChild(container);
  }

  var wrap = container.parentElement;

  // ✅ FORCE HORIZONTAL LAYOUT
  var cols = container.querySelectorAll('.status_column');
  cols.forEach(function (c) {
    c.classList.add('rsf-status-column');
    c.style.display = 'inline-block';
    c.style.verticalAlign = 'top';
  });

  // ✅ AUTO SHRINK
  if (window.DSFix.autoShrink && cols.length > window.DSFix.shrinkThreshold) {
    document.body.classList.add('rsf-shrink');
  } else {
    document.body.classList.remove('rsf-shrink');
  }

  // ✅ SCROLL MODE LOGIC
  if (window.DSFix.scrollMode === 'dashboard_only') {
    wrap.style.maxWidth = '100%';
  }

  if (window.DSFix.scrollMode === 'full_width') {
    wrap.style.width = '100vw';
  }

});
