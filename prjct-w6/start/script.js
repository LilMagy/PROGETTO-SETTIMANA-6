// Atelier — Week Project Settimana VI

const overlay = document.getElementById("contatti");
const form = document.getElementById("formContatti");
const btnChiudi = document.getElementById("chiudiContatti");
// Qualsiasi link/bottone che punta a #contatti apre l'overlay
const triggers = document.querySelectorAll('a[href="#contatti"]');

let ultimoTrigger = null;

// Overlay contatti
function apriOverlay(trigger) {
  ultimoTrigger = trigger;
  overlay.classList.remove("d-none");
  document.body.classList.add("overflow-hidden"); // blocca lo scroll sotto
  document.getElementById("nome").focus();
}

function chiudiOverlay() {
  overlay.classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
  if (ultimoTrigger) ultimoTrigger.focus();
}

triggers.forEach((t) => {
  t.addEventListener("click", (e) => {
    e.preventDefault(); 
    const menu = document.getElementById("menuPrincipale");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
    apriOverlay(t);
  });
});

btnChiudi.addEventListener("click", chiudiOverlay);

// Click sul fondo chiude
overlay.addEventListener("click", (e) => {
  if (!e.target.closest(".col-12")) {
    chiudiOverlay();
  }
});

// Esc chiude
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.classList.contains("d-none")) {
    chiudiOverlay();
  }
});

// Form contatti
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  alert("Grazie! Ti risponderemo entro 48 ore.");
  form.reset();
  chiudiOverlay();
});
//WIP
const tags = document.querySelectorAll("#filtri button.tag");
tags.forEach((tag) => 
  tag.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.classList);
  }),
);
