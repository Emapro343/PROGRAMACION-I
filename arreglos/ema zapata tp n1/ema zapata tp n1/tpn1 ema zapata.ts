function ej1(): void {
    let semana: string | null = prompt("Ingrese una opción\n1.LUNES\n2.MARTES\n3.MIERCOLES\n4.JUEVES\n5.VIERNES\n6.SABADO\n7.DOMINGO");
    let diasem: number = Number(semana);

    switch (diasem) {
        case 1:
            console.log("El dia 1 es: Lunes");
            break;
        case 2:
            console.log("El dia 2 es: Martes");
            break;
        case 3:
            console.log("El dia 3 es: Miercoles");
            break;
        case 4:
            console.log("El dia 4 es: Jueves");
            break;
        case 5:
            console.log("El dia 5 es: Viernes");
            break;
        case 6:
            console.log("El dia 6 es: Sabado");
            break;
        case 7:
            console.log("El dia 7 es: Domingo");
            break;
        default:
            console.log("Opcion No valida")

    }
}
// EJERCICIO CON UN CONSOLE.LOG//

/*function ej1(): void {
    let semana: string | null = prompt("Ingrese una opción\n1.LUNES\n2.MARTES\n3.MIERCOLES\n4.JUEVES\n5.VIERNES\n6.SABADO\n7.DOMINGO");
    let diasem: number = Number(semana);
    let nom: string;
    switch (diasem) {
        case 1:
            nom = "Lunes";
            break;
        case 2:
            nom = "Martes";
            break;
        case 3:
            nom = "Miercoles";
            break;
        case 4:
            nom = "Jueves";
            break;
        case 5:
            nom = "Viernes";
            break;
        case 6:
            nom = "Sabado"
            break;
        case 7:
            nom = "Domingo"
            break;
        default:
         nom = "Dato invalido"

    }
    console.log("El dia "+diasem+ " es " + nom);
}
ej1() */

function ej2() {
    let num1: string | null = prompt("Ingrese un numero");
    let num2: string | null = prompt("Ingrese otro numero");
    let op: string | null = prompt("Elegi la operación \n 1.SUMAR \n 2.RESTAR \n 3.MULTIPLICAR \n 4.DIVISION");

    let n1: number = Number(num1);
    let n2: number = Number(num2);
    let resultado: number = 0;

    switch (op) {
        case "1":
            resultado = n1 + n2;
            break;
        case "2":
            resultado = n1 - n2;
            break;
        case "3":
            resultado = n1 * n2;
            break;
        case "4":
            if (n2 > 0) {
                resultado = n1 / n2;
            } else {
                console.log("No se puede dividir por cero.")
            }
            break;
        default:
            console.log("Opcion no valida")
    }
    console.log("El resultado es: " + resultado)
}
ej2()

function ej3() {
    let num: number = Number(prompt("Ingrese un numero positivo"));

    if (num < 0 || isNaN(num)) {
        console.log("Ingrese un numero positivo");
        return;
    }


    while (num > 0) {
        console.log(num);
        num--;
    }
    console.log("🚀 ¡Despegue!")
}
ej3()

function ej4() {

    let total: number = 0;
    let cant: number = 0;
    while (true) {
        let num: number = Number(prompt("Ingrese el precio de cada producto (0 para terminar):"));
        if (num === 0) {
            break;
        }
        if (num < 0 || isNaN(num)) {
            console.log("El precio ingresado no es valido.");
            continue;
        }

        total += num;
        cant++;
        console.log("Producto" + cant + ": $" + total)

    }

    console.log("______________");
    console.log("El total es " + cant + " productos, $ " + total)




}
ej4()
function ej5() {
    let r: string | null;
    let secreto: number = Math.floor(Math.random() * 10) + 1;
    let intentos: number = 0;

    do {
        intento = Number(prompt("Adivine el numero ( 1  al 10):"));
        intentos++;
        if (intento < secreto) {
            console.log("Ingresaste ")
        }
    } 

        }

function ej5(): void {
    let r: string | null;
    let secreto: number = Math.floor(Math.random() * 10) + 1;
    let num: number;
    let cant: number = 0;
    do {
        num = Number(prompt("Ingrese un numero del 1 al 10"));
        cant++
        if (num > secreto) {
            console.log("Ingresaste " + num + " El numero es MENOR");
        } else if (num < secreto) {
            console.log("Ingresaste " + num + " El numero es MAYOR");
        }
    } while (cant !== secreto);
    console.log("Ingresaste " + num + "🎉 ¡Adivinaste en "+ cant +" intentos!");
}
ej5()

function ej6() {
    let pin: string | null;
    let intentos: number = 0;
    let pinCorrecto: string = "2835";
    let maxInt: number = 3;
    do {
        intentos++
        pin = prompt("Ingresa tu pin de 4 digitos (intento " + intentos + " de " + maxInt + "):");
        if (pin !== pinCorrecto) {
            let restantes: number = maxInt - intentos;
            if (restantes > 0) {
                console.log("Intentos " + intentos + " PIN incorrecto. Te quedan " + restantes + "intentos")
            } else {
                console.log("intento " + intentos + " PIN incorrecto")
            }
        }
    } while (pin !== pinCorrecto && intentos < 3)
if (pin === pinCorrecto) {
    console.log("✅ Acceso concedido")
} else {
    console.log("🔒 Tarjeta bloqueada")
}

}
ej6()

function ej7() {
    let num: number = Number(prompt("Ingrese un numero del 1 al 10"));


    for (num = 1; num <= 10; num++) {
    
        console.log("");
    }
}
