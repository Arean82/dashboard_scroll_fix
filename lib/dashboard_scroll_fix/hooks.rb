module DashboardScrollFix
  class Hooks < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context={})
      s = Setting.plugin_dashboard_scroll_fix

      css = stylesheet_link_tag 'dashboard_scroll_fix.css', plugin: 'dashboard_scroll_fix'
      js  = javascript_include_tag 'dashboard_scroll_fix.js', plugin: 'dashboard_scroll_fix'

      config = %Q(
        <script>
        window.DSFix = {
          autoShrink: #{s['auto_shrink'] ? 'true' : 'false'},
          shrinkWidth: #{s['shrink_width_px'].to_i},
          shrinkThreshold: #{s['shrink_threshold'].to_i},
          scrollMode: "#{s['scroll_mode']}",
          scrollSizeMode: "#{s['scroll_size_mode']}",
          scrollSizeCustom: #{s['scroll_size_custom'].to_i}
        };
        </script>
      )

      css + js + config
    end
  end
end
