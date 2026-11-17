//arreglos
const vacio = []

const frutas = ["manzana", "banana", "naranja"];

//Acceder por indice

console.log(frutas[0]); // "manzana"

console.log(frutas[2]); // "naranja"

//modificar un ejemplo

frutas[1] = "pera";

console.log(frutas); // ["manzana", "pera", "naranja"]

//propiedad .length(), no modifica nada, y podes consultar por un elemento.

const numeros = [10, 20, 30, 40, 50];

console.log(numeros.length); //5

// ultimo elemento

const ultimo = numeros[numeros.length - 1];

console.log(ultimo); //50

//recorrer con bucle for 

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// metodo .push(),podes agregar un elemento, devuelve la nueva dimensión del arreglo.
const tareas = ["estudiar", "hacer ejercicio"];

tareas.push("leer");

console.log(tareas);

// ["estudiar", "hacer ejercicio", "leer"]

// podes agregar varios a la vez

const nuevaDimensión = tareas.push("cocinar", "descansar")

console.log (nuevaDimensión); //5

//metodo .forEach(), Sirve para recorrer un arreglo. (1 parametro o 2).

const nombres = ["Ana", "Luis", "Mia"];

nombres.forEach ((nombre) => {
    console.log("Hola,", nombre); 
});

//Hola, Ana | Hola, Luis | Hola, Mia

// con indice:

nombres.forEach((nombre, i) => {
    console.log(`Posicion ${i}: ${nombre}`);
});

//metodo .filter(), siempre me devuelve un arreglo con los elementos que cumpliera la condicion,
//  y si ninguno cumple una condicion te devuelve un arreglo vacio.

const edades = [12, 25, 17, 30, 15, 22];

const mayores = edades.filter((edad) => edad >=18);

console.log(mayores); // [25, 30, 22]

// con strings

const productos = ["apple", "mango", "pera", "apio"];

const conA = productos.filter((p) => p.startsWith("a"));

console.log(conA);  //["apple", "apio"]

//metodo .map(), sirve para crear nuevos arreglos sin modificar el original.

const num = [1, 2, 3, 4];

//Duplicar cada número

const dobles = num.map((n) => n * 2);

console.log(dobles); //[2, 4, 6, 8]

//Convertir a strings con formato 

const precios = [100, 250, 80];

const formateados = precios.map((p) => `$${p}`);

console.log(formateados); // ["$100", "$250", "$80"]

//metodo .find(),devuelve el primer elemento que cumpla con la condicion,
// si no encuentra nada devuelve undefined.

const numeros2 = [3, 7, 15, 2, 22, 9];

const resultado = numeros2.find((n) => n > 10);

console.log(resultado); // 15

const palabras = ["luna", "sol", "mar", "cielo", "monte"];

const res2 = palabras.find((p) => p.startsWith("m"));

console.log (res2); // "mar"

//metodo .findIndex(), devuelve el indice del elemento. Si no encuentra nada, devuelve -1.

const frutas2 = ["manzana", "banana", "naranja", "uva"];

const idx = frutas.findIndex((f) => f === "naranja");

console.log(idx); //2

const noExiste = frutas2.findIndex((f) => f === "kiwi");

console.log (noExiste); // -1

// Caso de uso: reemplazar un elemento

const pos = frutas2.findIndex((f) => f === "banana");

if (pos !== -1) frutas2[pos] = "mango";

console.log(frutas2); // ["manzana", "mango", "naranja", "uva"]

// metodo .splice()
const letras = ["a", "b", "c", "d", "e"];

//1.Eliminar - splice(inicio, cuantos eliminar)

const  elim = letras.splice(1, 2);

console.log(letras); // ["a", "d", "e"]

console.log(elim); // ["b", "c"]

//2. Insertar - splice (posicion, 0, nuevos)

letras.splice(1, 0, "x", "y");

console.log (letras); //["a", "x", "y", "d", "e"]

//3. reemplazar 

letras.splice(2, 1, "z");

console.log(letras);  // ["a", "x", "z","d","e"]

// metodo .reduce(), acumula datos (suma )