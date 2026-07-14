(function () {
	var STORAGE_KEY = 'site_theme';

	function systemPrefersDark() {
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function isDark() {
		var stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'dark') return true;
		if (stored === 'light') return false;
		return systemPrefersDark();
	}

	function updateToggleLabel(dark) {
		var buttons = document.querySelectorAll('.theme-toggle');
		buttons.forEach(function (btn) {
			btn.textContent = dark ? '\u2600' : '\u263E';
			btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
			btn.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
		});
	}

	function applyTheme(dark) {
		document.documentElement.classList.toggle('dark-mode', dark);
		updateToggleLabel(dark);
	}

	function setTheme(theme) {
		localStorage.setItem(STORAGE_KEY, theme);
		applyTheme(theme === 'dark');
	}

	function toggleTheme() {
		setTheme(isDark() ? 'light' : 'dark');
	}

	function bindToggleButtons() {
		var buttons = document.querySelectorAll('.theme-toggle');
		buttons.forEach(function (btn) {
			var suppressClick = false;
			var handleToggle = function (event) {
				event.preventDefault();
				event.stopPropagation();

				if (event.type === 'touchend') {
					if (suppressClick) {
						suppressClick = false;
						return;
					}
					suppressClick = true;
					window.setTimeout(function () {
						suppressClick = false;
					}, 300);
				} else if (suppressClick) {
					suppressClick = false;
					return;
				}

				toggleTheme();
			};

			btn.addEventListener('click', handleToggle);
			btn.addEventListener('touchend', handleToggle);
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		applyTheme(isDark());
		bindToggleButtons();

		if (window.matchMedia) {
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
				if (!localStorage.getItem(STORAGE_KEY)) {
					applyTheme(systemPrefersDark());
				}
			});
		}
	});

	window.siteTheme = {
		isDark: isDark,
		set: setTheme,
		toggle: toggleTheme
	};
})();
