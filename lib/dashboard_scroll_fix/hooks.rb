module DashboardScrollFix
  class Hooks < Redmine::Hook::ViewListener
    # Inject CSS/JS into the page head
    def view_layouts_base_html_head(context = {})
      settings = Setting.plugin_dashboard_scroll_fix || {}
      auto_shrink = settings['auto_shrink'] ? 'true' : 'false'
      shrink_width = (settings['shrink_width_px'] || 220).to_i
      shrink_threshold = (settings['shrink_threshold'] || 8).to_i
      stylesheet = stylesheet_link_tag('dashboard_scroll_fix.css', plugin: 'dashboard_scroll_fix')
      script = javascript_include_tag('dashboard_scroll_fix.js', plugin: 'dashboard_scroll_fix')
      # inline config
      config = "<script>window.DashboardScrollFix = { autoShrink: #{auto_shrink}, shrinkWidth: #{shrink_width}, shrinkThreshold: #{shrink_threshold} };</script>"
      stylesheet + script + config
    end
  end
end
