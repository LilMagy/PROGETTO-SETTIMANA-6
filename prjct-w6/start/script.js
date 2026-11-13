// Atelier — Week Project Settimana VI

// Form contatti: validazione base e nessun invio reale (progetto dimostrativo)
const form = document.getElementById("formContatti");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  alert("Grazie! Ti risponderemo entro 48 ore.");
  form.reset();
});
