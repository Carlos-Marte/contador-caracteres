import { contarCaracteres } from "./contarCaracteres.js";

const textArea = document.querySelector(".contenedor__textarea");
const parrafo = textArea.nextElementSibling;

textArea.addEventListener('input', () => {
    let numCaracteres = contarCaracteres(textArea.value);

    if (numCaracteres !== 0) {
        return parrafo.innerHTML = `Carácteres totales: 
        <span class="num-caracteres">${numCaracteres}</span>`;
    }

    return parrafo.innerHTML = `¡Escribe algo para comenzar!`;
});