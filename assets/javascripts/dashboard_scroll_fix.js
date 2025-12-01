document.addEventListener('DOMContentLoaded', function () {

  if (!window.DSFix) return;

  var container = document.querySelector('.issues_container');
  if (!container) return;

  var content = document.querySelector('#content');
  if (content) content.style.overflow = 'visible';

  // Wrap issues container
  if (!container.parentElement.classList.contains('rsf-scroll-wrapper')) {
    var wrap = document.createElement('div');
    wrap.className = 'rsf-scroll-wrapper';
    container.parentNode.insertBefore(wrap, container);
    wrap.appendChild(container);
  }

  var cols = container.querySelectorAll('.status_column');
  cols.forEach(function (c) {
    c.classList.add('rsf-status-column');
  });

  // Auto shrink
  if (window.DSFix.autoShrink && cols.length > window.DSFix.shrinkThreshold) {
    document.body.classList.add('rsf-shrink');
  } else {
    document.body.classList.remove('rsf-shrink');
  }

});
