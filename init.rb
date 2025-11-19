require 'redmine'
require_relative 'lib/dashboard_scroll_fix/hooks'

Redmine::Plugin.register :dashboard_scroll_fix do
  name 'Dashboard Scroll Fix'
  author 'Arean Narrayan'
  description 'Enable horizontal scrolling and optional auto-shrink for jgraichen/redmine_dashboard'
  version '0.1.0'
  url 'https://github.com/Arean82/dashboard_scroll_fix'
  author_url 'mailto:arean82@gmail.com'

  settings partial: 'settings/dashboard_scroll_fix_settings',
           default: {
             'auto_shrink' => true,
             'shrink_width_px' => 220,
             'shrink_threshold' => 8
           }
end
