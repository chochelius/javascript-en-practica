const formulario = document.querySelector("#formulario");
const resultado = document.querySelector(".resultado");
const errorNombre = document.querySelector(".errorNombre")
const errorAsunto = document.querySelector(".errorAsunto")
const errorMensaje = document.querySelector(".errorMensaje")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Enviando");

    const nombre = document.querySelector("#nombre");
    const asunto = document.querySelector("#asunto");
    const mensaje = document.querySelector("#mensaje");

    console.log(!nombre.value.trim());
    console.log(!asunto.value.trim());
    console.log(!mensaje.value.trim());

    if (!nombre.value.trim()) {
        errorNombre.innerHTML = "El nombre es requerido";
    };

    if (!asunto.value.trim()) {
        errorAsunto.innerHTML = "El asunto es requerido";
    };

    if (!mensaje.value.trim()) {
        errorMensaje.innerHTML = "El mensaje es requerido";
    };

    const regExpLetras = /^[a-zA-Z]+$/gi;

    if (!regExpLetras.test(nombre.value)) {
        errorNombre.innerHTML = "Nombre solo con letras no números";
    }

    if (nombre.value.trim() || asunto.value.trim() || mensaje.value.trim() || !regExpLetras.test(nombre.value)) {
        resultado.innerHTML = "mensaje enviado con éxito"
    } 
       
//el codigo determina si están presentes los elementos y si el nombre tiene sólo letras pero no revierte el aviso de error o de exito al mandarlo de nuevo, además de que lo envía igual si el nombre no es válido


}
)