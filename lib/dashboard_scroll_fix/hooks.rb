module DashboardScrollFix
  class Hooks < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context={})
      s = Setting.plugin_dashboard_scroll_fix

      js  = javascript_include_tag 'dashboard_scroll_fix.js', plugin: 'dashboard_scroll_fix'
      css = stylesheet_link_tag 'dashboard_scroll_fix.css', plugin: 'dashboard_scroll_fix'

      config = %Q(
        <script>
        window.DSFix = {
          autoShrink: #{s['autoShrink'] ? 'true' : 'false'},
          shrinkWidth: #{s['shrinkWidth'].to_i},
          shrinkThreshold: #{s['shrinkThreshold'].to_i},
          scrollMode: "#{s['scrollMode']}",
          scrollSizeMode: "#{s['scrollSizeMode']}",
          scrollSizeCustom: #{s['scrollSizeCustom'].to_i}
        };
        </script>
      )

      css + js + config
    end
  end
end
