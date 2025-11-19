(function() {
    function applyScrollFix() {
        try {
            var container = document.querySelector('.issues_container');
            if (!container) return;

            // Remove Redmine forced no-scroll
            var content = document.querySelector('#content');
            if (content) content.style.overflow = 'visible';

            // Wrap only once
            if (!container.parentElement.classList.contains('rsf-scroll-wrapper')) {
                var wrapper = document.createElement('div');
                wrapper.className = 'rsf-scroll-wrapper';
                wrapper.style.overflowX = 'auto';
                wrapper.style.overflowY = 'hidden';
                wrapper.style.whiteSpace = 'nowrap';

                container.parentNode.insertBefore(wrapper, container);
                wrapper.appendChild(container);
            }

            // Mark columns
            var cols = container.querySelectorAll('.status_column');
            cols.forEach(function(col) {
                col.style.display = 'inline-block';
                col.style.verticalAlign = 'top';
                col.style.whiteSpace = 'normal';
                col.classList.add('rsf-status-column');
            });

            // Auto-shrink logic
            if (window.DashboardScrollFix && window.DashboardScrollFix.autoShrink) {
                var threshold = window.DashboardScrollFix.shrinkThreshold || 8;
                if (cols.length > threshold) {
                    document.documentElement.classList.add('rsf-shrink');
                } else {
                    document.documentElement.classList.remove('rsf-shrink');
                }
            }

        } catch (e) {
            console.error(e);
        }
    }

    document.addEventListener('DOMContentLoaded', applyScrollFix);
})();
