dashboard_scroll_fix - Ready-to-install Redmine plugin
================================================

Installation:
1. Copy the 'dashboard_scroll_fix' folder into your Redmine 'plugins/' directory.
2. Restart Redmine (e.g. systemctl restart redmine or restart passenger/unicorn/puma).
3. Go to Administration -> Plugins -> Dashboard Scroll Fix -> Configure to adjust settings.

What it does:
- Adds horizontal scrolling for the dashboard columns.
- Optionally auto-shrinks column width when the number of statuses exceeds a threshold.

Compatibility:
- Designed to be compatible with jgraichen/redmine_dashboard 2.16.0 and Redmine 5.x
