//funciones declaradas
function saludar(nombre) {
    return "hola," + nombre + "!"
}
const mensaje = saludar("Ariel")
console.log(mensaje);

function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 4))
console.log(sumar(10, 25))

function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(6, 7))

//funciones expresadas
const doblar = function (n) {
    return n * 2
}
console.log(doblar(5))
console.log(doblar(12))

const cuadrado = function calcCuadrado(n) {
    return n * n
}
console.log(cuadrado(9));

//flecha
const describir = (nombre, edad) => {
    let categoria
    if (edad >= 18) {
        categoria = "adulto"
    } else {
        categoria = "menor"
    }
    return `hola ${nombre}, usted es ${categoria}`
}
console.log(describir("papa", 22))

//funcion flecha
const espar1 = (n) => {
    if (n % 2 === 0) {
        return "es par"
    }
    return "es impar"
}

const espar2 = n => n % 2 === 0 ? "es par" : "es impar";
console.log(espar1(4))
console.log(espar2(3))

//parametros y argumentos
function presentar(nombre, profesion = "estudiante") {
    return `${nombre} es ${profesion}`
}
console.log(presentar("sofia"))
console.log(presentar("marcos", "programador"))