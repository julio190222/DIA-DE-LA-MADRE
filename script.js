function marcar(element) {
  element.classList.toggle("marcado");
}

function scrollToSeccion(id) {
  const seccion = document.getElementById(id);
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,       // duración de la animación
    easing: "ease-in-out",
    once: true,          // solo una vez por scroll
    mirror: false        // no vuelve a animar al hacer scroll hacia arriba
  });
});

// Puedes agregar aquí otras funciones como scroll suave o bingo
function marcar(element) {
  element.classList.toggle("marcado");
}

function scrollToSeccion(id) {
  const seccion = document.getElementById(id);
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth" });
  }
}


const CASILLAS_KEY = "cuponesMarcados";

  // Marcar o desmarcar casilla y guardar en localStorage
  function marcar(element) {
    element.classList.toggle("marcado");
    guardarEstado();
  }

  // Guardar el estado actual de las casillas en localStorage
  function guardarEstado() {
    const casillas = document.querySelectorAll(".casilla");
    const estado = Array.from(casillas).map(c => c.classList.contains("marcado"));
    localStorage.setItem(CASILLAS_KEY, JSON.stringify(estado));
  }

  // Cargar el estado guardado al cargar la página
  window.onload = function () {
    const casillas = document.querySelectorAll(".casilla");
    const estadoGuardado = JSON.parse(localStorage.getItem(CASILLAS_KEY));

    if (estadoGuardado) {
      casillas.forEach((c, i) => {
        if (estadoGuardado[i]) {
          c.classList.add("marcado");
        }
      });
    }
}

