/* Summit Automation - script.js */

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* Contact form submission handler */
var form = document.querySelector('form');
var successBox = document.querySelector('.form-success');

if (form && successBox) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    /* Simulate a brief submission delay, then show the success message.
       Replace this block with a real fetch() to your form backend or GHL webhook. */
    setTimeout(function () {
      form.style.display = 'none';
      successBox.style.display = 'block';
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 800);
  });
}
