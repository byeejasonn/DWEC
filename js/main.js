// cosas basicas
const contenido = document.getElementById('contenido');
let nombre = "Jason";

contenido.innerHTML = nombre;

let resultado = "Nombre: "+nombre;

for (let i = 0; i <= 10; i++) {
    (i%2 == 0)?console.log(i):'';
}

console.log(nombre[2]);

const pic = document.getElementById('pic');

// funciones para cambiar la foto
function gojo() {
    let src = './img/gojo.webp';

    pic.src = src;
}

function yuta() {
    let src = './img/yuta.webp';

    pic.src = src;
}