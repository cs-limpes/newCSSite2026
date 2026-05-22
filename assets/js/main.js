(function () {
  var yearTargets = document.querySelectorAll("[data-current-year]");
  var currentYear = String(new Date().getFullYear());

  yearTargets.forEach(function (target) {
    target.textContent = currentYear;
  });

  var staticForms = document.querySelectorAll("[data-static-form]");

  staticForms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var status = form.querySelector("[data-form-status]");
      var honeypot = form.querySelector(".hp-field input");

      if (honeypot && honeypot.value) {
        if (status) {
          status.textContent = "The message was not sent.";
        }
        return;
      }

      if (status) {
        status.textContent = "This form is ready for a future backend, but it is not connected yet. No message has been sent.";
      }
    });
  });
})();
