require 'redmine'
require_relative 'lib/dashboard_scroll_fix/hooks'

Redmine::Plugin.register :dashboard_scroll_fix do
  name 'Dashboard Scroll Fix'
  author 'Arean Narrayan'
  url 'https://github.com/Arean82/dashboard_scroll_fix'
  author_url 'mailto:arean82@gmail.com'

  description 'Adds scroll and auto-shrink for Dashboard plugin'
  version '1.0.0'

  settings default: {
    'auto_shrink' => true,
    'shrink_width_px' => 220,
    'shrink_threshold' => 8,
    'scroll_mode' => 'auto',
    'scroll_size_mode' => 'auto',
    'scroll_size_custom' => '8'
  }, partial: 'settings/dashboard_scroll_fix_settings'
end
