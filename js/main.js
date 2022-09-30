const contenido = document.getElementById('contenido');
let nombre = "Jason";

contenido.innerHTML = nombre;

let resultado = "Nombre: "+nombre;

for (let i = 0; i <= 10; i++) {
    (i%2 == 0)?console.log(i):'';
}

console.log(nombre[2]);