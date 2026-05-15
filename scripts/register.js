(function () {
	console.log('[register.js] loaded, pathname:', location.pathname);

	if (location.pathname.indexOf('addAttendee.jsp') === -1) {
		console.log('[register.js] not on addAttendee.jsp, exiting');
		return;
	}

	var STEPS = [
		{
			title: 'Your Profile',
			rows: [
				'rowpersonType',
				'rowcompanyAdministrator',
				'rowfirstName',
				'rowlastName',
				'rowUDTESTCEBERGENCOLLEAGUEDATEOFBIRTH'
			]
		},
		{
			title: 'Login & Security',
			rows: [
				'rowemail',
				'rowusername',
				'rowpassword',
				'rowsq',
				'rowreminder'
			]
		},
		{
			title: 'Contact',
			rows: [
				'rowmobilePhone',
				'rowaddress1',
				'rowaddress2',
				'rowcity',
				'rowstate',
				'rowzip',
				'rowcountry'
			]
		},
		{
			title: 'About You',
			rows: [
				'rowUDTESTCEBERGENCITIZEN',
				'rowUDTESTCEBERGENCITIZENSHIPPRIMARY',
				'rowUDTESTCEBERGENCITIZENSTATUS',
				'rowUDTESTCEBERGENVISATYPE',
				'rowUDTESTCEBERGENGENDER',
				'rowUDTESTCEBERGENCOLLEAGUEETHNICITY',
				'rowUDTESTCEBERGENETHNICGROUPS',
				'rowUDTESTCEBERGENTEXTMESSAGING'
			]
		},
		{
			title: 'Workshop',
			rows: [
				'rowWorkshopNote',
				'rowWorkshopHeader',
				'rowUDTESTCEBERGENJOBTITLE',
				'rowUDTESTCEBERGENWAGENJBIA',
				'rowCOMPANYcompanyName',
				'rowUDTESTCEBERGENFEINNUMBER',
				'rowCOMPANYaddress1',
				'rowCOMPANYcity',
				'rowCOMPANYstate',
				'rowCOMPANYzip',
				'rowUDTESTCEBERGENCOUNTY',
				'rowCOMPANYcountry',
				'rowUDTESTCEBERGENMGREMAIL',
				'rowUDTESTCEBERGENMGRPHONE'
			]
		}
	];

	function init() {
		console.log('[register.js] init() called');
		var form = document.querySelector('form[action*="form_addAttendee"]');
		console.log('[register.js] form found:', form);
		if (!form) {
			console.warn('[register.js] form not found — selector: form[action*="form_addAttendee"]');
			return;
		}

		console.log('[register.js] cartOption:', cartOption);
		console.log('[register.js] formTable:', formTable);

		// The workshop section has two anonymous <tr>s before the company field rows:
		// one with a note div and one with the skipCompany checkbox.
		var skipCompanyEl = document.getElementById('skipCompany');
		console.log('[register.js] skipCompany el:', skipCompanyEl);
		if (skipCompanyEl) {
			var headerRow = skipCompanyEl.closest('tr');
			if (headerRow && !headerRow.id) headerRow.id = 'rowWorkshopHeader';
			var noteRow = headerRow && headerRow.previousElementSibling;
			if (noteRow && !noteRow.id) noteRow.id = 'rowWorkshopNote';
			console.log('[register.js] workshopNote row:', noteRow, '| workshopHeader row:', headerRow);
		}

		var currentStep = 0;
		var cartOption = form.querySelector('.cartOption');
		if (cartOption) cartOption.style.display = 'none';

		var indicator = document.createElement('div');
		indicator.id = 'cf-wizard-steps';

		var errorBox = document.createElement('div');
		errorBox.id = 'cf-wizard-errors';
		errorBox.style.display = 'none';

		var nav = document.createElement('div');
		nav.id = 'cf-wizard-nav';

		var backBtn = document.createElement('button');
		backBtn.type = 'button';
		backBtn.className = 'cf-wizard-btn cf-wizard-back';
		backBtn.textContent = '← Back';

		var nextBtn = document.createElement('button');
		nextBtn.type = 'button';
		nextBtn.className = 'cf-wizard-btn cf-wizard-next';
		nextBtn.textContent = 'Continue →';

		var submitBtn = document.createElement('button');
		submitBtn.type = 'button';
		submitBtn.className = 'cf-wizard-btn cf-wizard-submit';
		submitBtn.textContent = 'Create Account';

		nav.appendChild(backBtn);
		nav.appendChild(nextBtn);
		nav.appendChild(submitBtn);

		var formTable = form.querySelector('table');
		if (formTable) {
			form.insertBefore(indicator, formTable);
			form.insertBefore(errorBox, formTable);
		}
		if (formTable) {
			formTable.insertAdjacentElement('afterend', nav);
		} else {
			form.appendChild(nav);
		}

		// A row is platform-hidden when the platform toggled class="hidden" on it.
		// We must not override this with our own inline style on the active step,
		// so conditional fields (e.g. citizenship details) continue to show/hide
		// correctly as the user changes their selections.
		function isPlatformHidden(row) {
			return row.classList.contains('hidden');
		}

		function renderIndicator() {
			indicator.innerHTML = '';
			STEPS.forEach(function (s, i) {
				var item = document.createElement('div');
				item.className = 'cf-wizard-step-item' +
					(i === currentStep ? ' active' : '') +
					(i < currentStep ? ' done' : '');

				var circle = document.createElement('span');
				circle.className = 'cf-wizard-step-circle';
				circle.textContent = i < currentStep ? '✓' : String(i + 1);

				var label = document.createElement('span');
				label.className = 'cf-wizard-step-label';
				label.textContent = s.title;

				item.appendChild(circle);
				item.appendChild(label);
				indicator.appendChild(item);

				if (i < STEPS.length - 1) {
					var line = document.createElement('div');
					line.className = 'cf-wizard-step-line' + (i < currentStep ? ' done' : '');
					indicator.appendChild(line);
				}
			});
		}

		function showStep(step) {
			currentStep = step;

			STEPS.forEach(function (s, i) {
				s.rows.forEach(function (rowId) {
					var row = document.getElementById(rowId);
					if (!row) return;
					if (i === step) {
						// Clear our inline override — let the platform's class control
						// conditional visibility (e.g. class="hidden" toggled by the platform)
						row.style.display = '';
					} else {
						row.style.display = 'none';
					}
				});
			});

			renderIndicator();

			backBtn.style.display   = step === 0 ? 'none' : '';
			nextBtn.style.display   = step < STEPS.length - 1 ? '' : 'none';
			submitBtn.style.display = step === STEPS.length - 1 ? '' : 'none';

			clearErrors();

			var top = indicator.getBoundingClientRect().top + window.scrollY - 20;
			window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
		}

		function clearErrors() {
			errorBox.innerHTML = '';
			errorBox.style.display = 'none';
			form.querySelectorAll('.cf-wizard-field-error').forEach(function (el) {
				el.classList.remove('cf-wizard-field-error');
			});
		}

		function validateStep() {
			clearErrors();
			var errors = [];

			STEPS[currentStep].rows.forEach(function (rowId) {
				var row = document.getElementById(rowId);
				// Skip rows hidden by the platform (conditional fields not yet applicable)
				// or force-hidden by us (shouldn't happen for current step, but guard anyway)
				if (!row || isPlatformHidden(row) || row.style.display === 'none') return;

				row.querySelectorAll('[mandatory]').forEach(function (field) {
					if (field.disabled || field.type === 'hidden') return;
					var val = (field.value || '').trim();
					if (val === '' || val === '0') {
						errors.push(field.getAttribute('mandatory'));
						field.classList.add('cf-wizard-field-error');
					}
				});
			});

			// Match checks for fields that share a row (no separate mandatory on retype fields)
			if (currentStep === 1) {
				var pw  = document.getElementById('password');
				var rpw = document.getElementById('retypepassword');
				var sa  = document.getElementById('reminder');
				var rsa = document.getElementById('retypereminder');
				if (pw && rpw && pw.value && rpw.value !== pw.value) {
					errors.push('Passwords do not match.');
					rpw.classList.add('cf-wizard-field-error');
				}
				if (sa && rsa && sa.value && rsa.value !== sa.value) {
					errors.push('Security answers do not match.');
					rsa.classList.add('cf-wizard-field-error');
				}
			}

			if (!errors.length) return true;

			var ul = document.createElement('ul');
			var seen = {};
			errors.forEach(function (msg) {
				if (msg && !seen[msg]) {
					seen[msg] = true;
					var li = document.createElement('li');
					li.textContent = msg;
					ul.appendChild(li);
				}
			});
			errorBox.appendChild(ul);
			errorBox.style.display = '';
			return false;
		}

		nextBtn.addEventListener('click', function () {
			if (validateStep()) showStep(currentStep + 1);
		});

		backBtn.addEventListener('click', function () {
			showStep(currentStep - 1);
		});

		submitBtn.addEventListener('click', function () {
			if (!validateStep()) return;
			// Run the platform's own validateRegistration via the onsubmit handler,
			// then submit if it passes.
			if (form.onsubmit) {
				if (form.onsubmit.call(form) !== false) form.submit();
			} else {
				form.submit();
			}
		});

		showStep(0);
	}

	console.log('[register.js] readyState:', document.readyState);
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
