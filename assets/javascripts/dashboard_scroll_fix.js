// dashboard_scroll_fix.js
// Wait for DOM ready
(function() {
    function applyScrollFix() {
        try {
            var dashboard = document.querySelector('.dashboard');
            if (!dashboard) return;

            // Wrap dashboard in a scroll wrapper if not already wrapped
            if (!dashboard.parentElement.classList.contains('rsf-scroll-wrapper')) {
                var wrapper = document.createElement('div');
                wrapper.className = 'rsf-scroll-wrapper';
                dashboard.parentNode.insertBefore(wrapper, dashboard);
                wrapper.appendChild(dashboard);
            }

            // Add a marker class to status columns (some dashboard versions use .status-issues or .status-column)
            var cols = dashboard.querySelectorAll('.status-issues, .status-column');
            cols.forEach(function(c) {
                if (!c.classList.contains('rsf-status-column')) c.classList.add('rsf-status-column');
            });

            // Auto-shrink logic based on settings injected by hook
            if (window.DashboardScrollFix && window.DashboardScrollFix.autoShrink) {
                var threshold = parseInt(window.DashboardScrollFix.shrinkThreshold || 8, 10);
                if (cols.length > threshold) {
                    document.documentElement.classList.add('rsf-shrink');
                } else {
                    document.documentElement.classList.remove('rsf-shrink');
                }
            }
        } catch (e) {
            console && console.error && console.error('dashboard_scroll_fix error', e);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyScrollFix);
    } else {
        applyScrollFix();
    }
})();
