/* Pet Vida 2.0 — vanilla JS: mobile menu, booking form validation, demo cart.
   No dependencies. Progressive enhancement: pages work without JS. */
(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Booking / contact form ---------- */
  var forms = document.querySelectorAll('form[data-validate]');
  Array.prototype.forEach.call(forms, function (form) {
    var fields = form.querySelectorAll('[required]');
    var success = form.querySelector('.form-success');

    function setError(input, message) {
      var field = input.closest('.field');
      var err = field ? field.querySelector('.field-error') : null;
      if (field) field.classList.toggle('has-error', !!message);
      if (err) err.textContent = message || '';
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function validate(input) {
      var v = input.value.trim();
      if (!v) return 'This field is required.';
      if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid e-mail.';
      if (input.type === 'tel' && v.replace(/\D/g, '').length < 8) return 'Enter a phone number with area code.';
      return '';
    }

    Array.prototype.forEach.call(fields, function (input) {
      input.addEventListener('blur', function () { setError(input, validate(input)); });
      input.addEventListener('input', function () {
        if (input.getAttribute('aria-invalid') === 'true') setError(input, validate(input));
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      Array.prototype.forEach.call(fields, function (input) {
        var msg = validate(input);
        setError(input, msg);
        if (msg && !firstBad) firstBad = input;
      });
      if (firstBad) { firstBad.focus(); return; }
      var name = form.querySelector('[name="name"]');
      if (success) {
        success.innerHTML = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>Thanks' + (name && name.value ? ', ' + name.value.trim().split(' ')[0] : '') + '. We received your request and will confirm by phone or WhatsApp within one business day.</span>';
        success.classList.add('is-visible');
        success.setAttribute('tabindex', '-1');
        success.focus();
      }
      form.reset();
      Array.prototype.forEach.call(fields, function (input) { input.removeAttribute('aria-invalid'); });
    });
  });

  /* ---------- Demo cart (shop pages) ---------- */
  var cartPill = document.querySelector('.cart-pill');
  var cartCount = document.querySelector('.cart-count');
  var live = document.getElementById('cart-live');
  var count = 0;
  var addButtons = document.querySelectorAll('[data-add-to-cart]');
  if (addButtons.length && cartPill && cartCount) {
    Array.prototype.forEach.call(addButtons, function (btn) {
      btn.addEventListener('click', function () {
        count += 1;
        cartCount.textContent = String(count);
        cartPill.hidden = false;
        var label = btn.getAttribute('data-add-to-cart') || 'Item';
        if (live) live.textContent = label + ' added to cart. ' + count + ' item' + (count > 1 ? 's' : '') + ' in cart.';
        var original = btn.textContent;
        btn.textContent = 'Added';
        btn.disabled = true;
        setTimeout(function () { btn.textContent = original; btn.disabled = false; }, 1200);
      });
    });
  }
})();
