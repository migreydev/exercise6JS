/*
Desarrollar un formulario de contacto con un evento que cuando se quite el focus del input,
verifique que lo que se ha metido en el input es correcto (el
asunto no está vacío, cc es un correo, el cuerpo del mensaje
no está vacío...). 
En caso de ser correcto, se mostrará el borde
del input en verde. En caso de ser incorrecto, se mostrará el
borde del input en rojo y se añadirá debajo un texto en rojo
indicando que no se cumplen los requisitos.
*/

let botonEnviar = document.querySelector("#enviar");

let contadorCorreo = 0;
let contadorDestinatario = 0;
let contadorAsunto = 0;
let contadorDescripcion = 0;

botonEnviar.addEventListener("click", (event) => {
  event.preventDefault();

  let correo = document.querySelector("#correo").value;
  let destinatario = document.querySelector("#destino").value;
  let asunto = document.querySelector("#asunto").value;
  let descripcion = document.querySelector("#descripcion").value;

  if (correo === "" || esCorreoValido(correo)) {
    let inputCorreo = document.querySelector("#correo");
    inputCorreo.style.border = "1px solid red";

    if (contadorCorreo === 0) {
      let mensajeError = document.createElement("small");
      mensajeError.id = "mensajeErrorCorreo";
      mensajeError.textContent =
        "El correo no puede estar vacio y debe ser un correo valido";
      mensajeError.style.color = "red";

      let elementoPadre = document.querySelector("#divCorreo");
      elementoPadre.appendChild(mensajeError);
    }
    contadorCorreo++;
  } else {
    let inputCorreo = document.querySelector("#correo");
    let mensaje = document.querySelector("#mensajeErrorCorreo");
    if (mensaje) {
      mensaje.textContent = "";
    }

    inputCorreo.style.border = "1px solid green";
  }

  if (destinatario === "" || esCorreoValido(destinatario)) {
    let inputDestinatario = document.querySelector("#destino");
    inputDestinatario.style.border = "1px solid red";

    if (contadorDestinatario === 0) {
      let mensajeError = document.createElement("small");
      mensajeError.id = "mensajeErrorDestinatario";
      mensajeError.textContent = "El destinatario no puede estar vacio";
      mensajeError.style.color = "red";

      let elementoPadre = document.querySelector("#divDestinatario");
      elementoPadre.appendChild(mensajeError);
    }
    contadorDestinatario++;
  } else {
    let inputDestinatario = document.querySelector("#destino");
    let mensaje = document.querySelector("#mensajeErrorDestinatario");
    if (mensaje) {
      mensaje.textContent = "";
    }

    inputDestinatario.style.border = "1px solid green";
  }

  if (asunto === "") {
    let inputAsunto = document.querySelector("#asunto");
    inputAsunto.style.border = "1px solid red";

    if (contadorAsunto === 0) {
      let mensajeError = document.createElement("small");
      mensajeError.id = "mensajeErrorAsunto";
      mensajeError.textContent = "El asunto no puede estar vacio";
      mensajeError.style.color = "red";

      let elementoPadre = document.querySelector("#divAsunto");
      elementoPadre.appendChild(mensajeError);
    }

    contadorAsunto++;
  } else {
    let inputAsunto = document.querySelector("#asunto");
    let mensaje = document.querySelector("#mensajeErrorAsunto");
    if (mensaje) {
      mensaje.textContent = "";
    }

    inputAsunto.style.border = "1px solid green";
  }

  if (descripcion === "") {
    let inputDescripcion = document.querySelector("#descripcion");
    inputDescripcion.style.border = "1px solid red";

    if (contadorDescripcion === 0) {
      let mensajeError = document.createElement("small");
      mensajeError.id = "mensajeErrorDescripcion";
      mensajeError.textContent = "La descripción no puede estar vacio";
      mensajeError.style.color = "red";

      let elementoPadre = document.querySelector("#divDescripcion");
      elementoPadre.appendChild(mensajeError);
    }

    contadorDescripcion++;
  } else {
    let inputDescripcion = document.querySelector("#descripcion");
    let mensaje = document.querySelector("#mensajeErrorDescripcion");
    if (mensaje) {
      mensaje.textContent = "";
    }

    inputDescripcion.style.border = "1px solid green";
  }
});

function esCorreoValido(correo) {
  // Expresion regular de correo
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valido = false;
  if (!regexCorreo.test(correo)) {
    return (valido = true);
  } else {
    return (valido = false);
  }
}
