function ej1 (){
    const nombres =  [`Ana`,`Luis`, `Marta`, `Pedro`]
    nombres.forEach ((n) =>{
        console.log ("Hola,", nombre)
    });
}

function ej2 (){
    let acum = 0;
    const precios =  [1200, 850, 430, 2100]
    precios.forEach ((n) => precios += acum);
    console.log(`El total es ${acum}`)

}

function ej4(){
    const estudiantes = [
{ id: 1, nombre: `Lucia`, nota: 4 },
{ id: 2, nombre: `Maia`, nota: 9},
{ id: 3, nombre: `Tomas`, nota: 5 },
{id: 4, nombre: `Jeremías`, nota: 9 }
]
const nombres = estudiantes.map((estudiantes) =>  estudiantes.nombre)
console.log(`El arreglo con solo los nombres quedaria ${nombres}`)
}   

function ej5(){
    const nombres = [`Ana`,` Luis`, `Marta`, `Pedro`, `Sofia`, `Juan`]
    const mas4 = nombres.filter((n) => n.length > 4)
    console.log(`Los nombres que tienen mas de 4 letras son ${mas4}`)
}

function ej6(){
    console.log(valor ? `Se encontro el usuario: ${estudiante.nombre}` : `No se encontro el usuario id 10`)
}