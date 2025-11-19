require 'redmine'
#require_relative 'lib/dashboard_scroll_fix/hooks'

Redmine::Plugin.register :dashboard_scroll_fix do
  name 'Dashboard Scroll Fix'
  author 'Arean Narrayan'
  url 'https://github.com/Arean82/dashboard_scroll_fix'
  author_url 'mailto:arean82@gmail.com'

  description 'Adds scroll and auto-shrink for Dashboard plugin'
  version '1.0.0'

  settings default: {
      autoShrink: true,
      shrinkWidth: 220,
      shrinkThreshold: 8,
      scrollMode: 'auto',
      scrollSizeMode: 'auto',
      scrollSizeCustom: 8
  }, partial: 'settings/dashboard_scroll_fix_settings'
end
