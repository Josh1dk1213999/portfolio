const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-navigation");
const themeButton = document.getElementById("theme-toggle");

// Keep the menu's visible state and accessible button state in sync.
if (menuButton && navigation) {
    function setMenuOpen(isOpen) {
        navigation.classList.toggle("is-open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    }

    menuButton.addEventListener("click", function () {
        setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && phoneLayout.matches) {
            setMenuOpen(false);
            menuButton.focus();
        }
    });

    // Returning to desktop clears the menu state for the next phone visit.
    const phoneLayout = window.matchMedia("(max-width: 600px)");
    phoneLayout.addEventListener("change", function () {
        setMenuOpen(false);
    });
}

// Apply one theme attribute; CSS variables supply the matching colors.
if (themeButton) {
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        themeButton.textContent = theme === "light" ? "Switch to dark theme" : "Switch to light theme";
    }

    let savedTheme = "dark";
    try {
        savedTheme = localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
    } catch (error) {
        // Some browsers restrict storage for local files. Dark remains the default.
    }
    applyTheme(savedTheme);

    themeButton.addEventListener("click", function () {
        const nextTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        applyTheme(nextTheme);
        try {
            localStorage.setItem("portfolio-theme", nextTheme);
        } catch (error) {
            // The button still works for this page when saving is unavailable.
        }
    });
}
