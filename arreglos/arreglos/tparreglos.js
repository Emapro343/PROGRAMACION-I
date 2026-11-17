function ej1() {
    const numeros = [4, 8, 15, 16, 23, 42];

    numeros.forEach((numero) => {
        console.log(numero)
    });
}
function ej2() {
    const numeros = [3, 12, 7, 25, 5, 18, 9, 30];
    const mayores10 = numeros.filter((n) => n > 10);
    console.log(mayores10);
}

function ej3() {
    const numeros = [2, 5, 10, 3, 8, 6];
    const triple = numeros.map((n) => n * 3);
    console.log(triple);
}

function ej4() {
    const numeros = [14,7,-3,22,-8,5,-1];
    const negativo = numeros.find((n) => n < 0);
    console.log(negativo);
}

function ej5() {
    const numeros = [12,45,67,8,91,33,55];
    const mayor = numeros.findIndex((n) => n > 50);
    console.log(mayor);
}

function ej6() {
    const frutas = ["manzana", "banana", "naranja", "uva"];
    frutas.push("sandia");
    console.log(frutas);
}

function ej7() {
    const color = ["rojo", "azul", "verde","amarillo","blanco"];
    const eliminar = color.splice(3,1);
    console.log (color)
    console.log (eliminar)
}

function ej8() {
    const vocales = ["a", "e", "i", "o", "u"];
    console.log(vocales);
}

function ej9(){
    const numeros = [1,4,7,8,3,12,5,6,11,10];
    const pares = numeros.filter((n) => n % 2 ===0);
    const mult2 = pares.map((n) => n * 2);
    console.log (`La multiplicacion de los pares es ${mult2}`);
}

function ej10(){
    const numeros = [18,25,31,12,28,35,20];
    const mayores25 = numeros.filter((n) => n > 25);
    const temp = mayores25.map((n) => `${n}°C`)
    console.log(temp);
}