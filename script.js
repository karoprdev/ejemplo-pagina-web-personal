//FUNCIONES

let names = "Karo";
let ciudad = "Chimbote";
let gusto = "jugar basquet";

let parrafo1 = document.getElementById("paragraph");

function cambiarTexto(name, ciudad, gusto) {
  let contenido = `Hola me llamo ${name}. Soy de la ciudad de ${ciudad}. Me gusta el helado y también ${gusto}.
  Me encanta saber acerca de la tecnología y aprender a programar más para poder ayudar a las personas a mostrar lo que hacen.`;

  return contenido;
}

parrafo1.innerText = cambiarTexto(names, ciudad, gusto);


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}