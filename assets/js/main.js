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


var emailLinks = document.querySelectorAll("[data-email-link]");

emailLinks.forEach(function (link) {
  var user = link.getAttribute("data-user");
  var domain = link.getAttribute("data-domain");

  if (!user || !domain) {
    return;
  }

  link.setAttribute("href", "mailto:" + user + "@" + domain);
});

var navToggle = document.querySelector(".nav-toggle");
var siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", function () {
    var isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.querySelector(".nav-toggle__text").textContent = isOpen ? "Menu" : "Close";
    siteNav.classList.toggle("is-open", !isOpen);
  });
}