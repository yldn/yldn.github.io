(function () {
	var STORAGE_KEY = 'site_lang';
	var DEFAULT = 'en';

	function current() {
		return localStorage.getItem(STORAGE_KEY) || DEFAULT;
	}

	function setLang(lang) {
		localStorage.setItem(STORAGE_KEY, lang);
		document.documentElement.lang = (lang === 'zh') ? 'zh' : 'en';
		applyTranslations(lang);
		updateToggleLabel(lang);
		toggleLangVisibility(lang);
	}

	function toggleLangVisibility(lang) {
		var showZh = (lang === 'zh');
		// Use body classes so CSS can control display (avoids inline style specificity issues)
		document.body.classList.toggle('lang-zh-active', showZh);
		document.body.classList.toggle('lang-en-active', !showZh);
	}

	function applyTranslations(lang) {
		var els = document.querySelectorAll('[data-name-en]');
		els.forEach(function (el) {
			var text = (lang === 'zh') ? el.getAttribute('data-name-zh') : el.getAttribute('data-name-en');
			var span = el.querySelector('.i18n-name');
			if (span) {
				span.textContent = text || '';
			} else {
				el.textContent = text || '';
			}
		});

		// Elements with generic data-i18n attributes
		var custom = document.querySelectorAll('[data-i18n-en]');
		custom.forEach(function (el) {
			// If element is input/textarea, skip here (handled below)
			if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
			el.textContent = (lang === 'zh') ? el.getAttribute('data-i18n-zh') : el.getAttribute('data-i18n-en');
		});

		// Handle placeholders
		var placeholders = document.querySelectorAll('[data-placeholder-en]');
		placeholders.forEach(function (el) {
			var ph = (lang === 'zh') ? el.getAttribute('data-placeholder-zh') : el.getAttribute('data-placeholder-en');
			if ('placeholder' in el) el.placeholder = ph || '';
		});

		// Handle value attributes (e.g., submit buttons)
		var values = document.querySelectorAll('[data-value-en]');
		values.forEach(function (el) {
			var v = (lang === 'zh') ? el.getAttribute('data-value-zh') : el.getAttribute('data-value-en');
			if ('value' in el) el.value = v || '';
		});
	}

	function updateToggleLabel(lang) {
		var buttons = document.querySelectorAll('.lang-toggle');
		buttons.forEach(function (btn) {
			btn.textContent = (lang === 'zh') ? '中' : 'EN';
		});
	}

	function bindToggleButtons() {
		var buttons = document.querySelectorAll('.lang-toggle');
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

				var next = (current() === 'zh') ? 'en' : 'zh';
				setLang(next);
			};
			btn.addEventListener('click', handleToggle);
			btn.addEventListener('touchend', handleToggle);
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		var lang = current();
		updateToggleLabel(lang);
		applyTranslations(lang);
		toggleLangVisibility(lang);

		bindToggleButtons();
	});

	window.siteLang = {
		get: current,
		set: setLang
	};
})();
