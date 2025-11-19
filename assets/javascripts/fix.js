document.addEventListener("DOMContentLoaded", function() {
    if (!window.DSFix) return;

    const container = document.querySelector(".issues_container");
    if (!container) return;

    container.style.overflowX = "auto";

    if (DSFix.autoShrink) {
        let cols = document.querySelectorAll(".status_column");
        if (cols.length > DSFix.shrinkThreshold) {
            cols.forEach(col => col.style.minWidth = DSFix.shrinkWidth + "px");
        }
    }
});
