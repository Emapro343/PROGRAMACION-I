//let retorno = alert("Hola")
//let retorno= confirm("¿desea continuar?")
//let retorno = prompt("Ingrese su nombre")
//console.log(retorno)
//1.Solicitar numeros al usuario hasta que ingrese un numero negativo. 
//  Mostrar la suma total de los numeros ingresados.
//  Utilizar while
function ej1a() {
    let suma = 0;
    let num = parseFloat(prompt("Ingrese un número (negativo para finalizar):"));

    while (num >= 0) {
        suma += num;
        num = parseFloat(prompt("Ingrese otro número (negativo para finalizar):"));
    }

    alert("La suma total es: " + suma)

}
function ej1b() {
    let suma = 0;
    let num;
    do {
        num = parseFloat(prompt("Ingrese un números (negativos para finalizar):"));
        while (isNaN(num)) {
            alert("Ingreso inválida. Por favor ingrese un número");
            num = parseFloat(prompt("Ingrese otro número (negativo para finalizar):"));
        }
        if (num >= 0) {
            suma += num;
        }
    } while (num >= 0) {
        alert("La suma total es: " + suma);

    }


    alert("La suma total es: " + suma)

}
//2. Pedir 10 numeros e indicar cuantos son positivos, 
//  negativos y ceros.
//  Utilizar for.
function ej2a() {
    negativos = 0;
    positivos = 0;
    ceros = 0;
    let num = 0

    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`Ingrese el numero ${i}`))
        if (num > 0) {
            positivos++;
        } else {
            if (num < 0) {
                negativos++;
            } else {
                ceros++;
            }
        }


    }
    console.log(`Los positivos son ${positivos}`);
    console.log(`Los negativos son ${negativos}`);
    console.log(`Los ceros son ${ceros}`);
}
function ej2b() {
    negativos = 0;
    positivos = 0;
    ceros = 0;
    let num = 0

    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`Ingrese el numero ${i}`))
        while (isNaN(num)) {
            alert("Ingreso invalido. Por favor ingrese un número");
            num = parseFloat(prompt("Ingrese un número: N° " + i));
        }
        if (num > 0) {
            positivos++;
        } else {
            if (num < 0) {
                negativos++;
            } else {
                ceros++;
            }
        }


    }
    console.log(`Los positivos son ${positivos}`);
    console.log(`Los negativos son ${negativos}`);
    console.log(`Los ceros son ${ceros}`);
}
function ej2c() {
    negativos = 0;
    positivos = 0;
    ceros = 0;
    let num = 0

    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`Ingrese el numero ${i}`))
        if (isNaN(num)) {
            alert("Ingreso invalido. Por favor ingrese un número");
            i-- // i=i-1
        } else {
            if (num > 0) {
                positivos++;
            } else {
                if (num < 0) {
                    negativos++;
                } else {
                    ceros++;
                }
            }
        }

    }
    console.log(`Los positivos son ${positivos}`);
    console.log(`Los negativos son ${negativos}`);
    console.log(`Los ceros son ${ceros}`);
}
//3. Ingresar numeros hasta que el usuario escriba 0.
//  Calcular el promedio de los numeros positivos. Utilizar while.
function ej3a() {
    contador = 0;
    suma = 0;
    let num = parseInt(prompt("Ingrese numeros"));;
    while (num !== 0) {
        if (num > 0) {
            suma += num //suma=suma+num
            contador++;
        }
        num = parseFloat(prompt("Ingrese otro número (0 para finalizar):"));
    }
    if (contador > 0) {
        alert("Promedio de positivos: " + (suma / contador).toFixed(2));
    } else {
        alert("No se ingresaron numeros positivos")
    }

}
function ej3b() {
    contador = 0;
    suma = 0;
    let num = parseInt(prompt("Ingrese numeros"));;
    while (num !== 0) {
        while (isNaN(num)) {
            alert("Ingreso invalido. Por favor ingrese un número");
            num = parseFloat(prompt("Ingrese un número (0 para finalizar):"));
        }
        if (num > 0) {
            suma += num //suma=suma+num
            contador++;
        }
        num = parseFloat(prompt("Ingrese otro número (0 para finalizar):"));
    }
    if (contador > 0) {
        alert("Promedio de positivos: " + (suma / contador).toFixed(2));
    } else {
        alert("No se ingresaron numeros positivos")
    }

}
//4. Solicitar 5 edades e indicar cuantos son mayores de edad. 
// Si la edad es mayor a 65, contaria en un grupo especial.
// Usar for.
function ej4() {

    let mayores = 0;
    let especial = 0;
    let edades;
    for (let i = 0; i <= 5; i++) {
        edades = parseInt(prompt("Ingrese 5 edades:"))
        if (edades >= 18) {
            mayores++;
            if (edades >= 65) {
                especial++;
            }
        }
    }
    console.log(`Los mayores son ${mayores}`)
    console.log(`Los que  cuentan en un grupo especial son ${especial}`)
}
//5. Mostrar los numeros del 1 al 50. 
// Indicar además cuántos son multiplos de 3 y cuántos de 5. 
// Usar for
function ej5() {
    cont3 = 0;
    cont5 = 0;

    for (let i = 1; i <= 50; i++) {
        console.log(i)
        if (i % 3 === 0) {
            cont3++;
        } else {
            if (i % 5 === 0) {
                cont5++;
            }
        }
    }
    console.log(`Los multiplos de 3 son: ${cont3}`);
    console.log(`Los multiplos de 5 son: ${cont5}`);

}
//6.Ingresar números hasta que se ingrese uno mayor a 100. 
// Contar cuantos numeros se ingresaron y acumular su suma. 
// Utilizar do...while.
function ej6() {
    let num;
    contador = 0;
    acum = 0;
    do {
        num = parseInt(prompt("Ingrese numeros"))
        while (isNaN(num)) {
            alert("Ingreso invalido.");
            num = parseInt(prompt("Por favor ingrese un numero valido"));
        }

        if (num <= 100) {
            suma += num;
            contador++;
        }

    } while (num <= 100);
    alert(`Cantidad ingresada: ${contador}, Suma total: ${suma}`);


}
//7.Pedir 10 numeros e informar el mayor y el menor. Usar for. 
function ej7() {
    let mayor = 0;
    let menor = 0;
    let num;
    for (let i = 1; i <= 10; i++) {
        num = parseFloat(prompt(`Ingrese el ${i}° número:`));
        // validacion
        while (isNaN(num)) {
            alert("Ingreso invalido, por favor ingrese un número");
            num = parseFloat(prompt(`Ingrese el ${i}° numero:`));
        }
        if (i === 1) {
            mayor = num;
            menor = num;
        } else {
            if (num > mayor) {
                mayor = num;
            } else {
                if (num < menor) {
                    menor = num;
                }
            }
        }
    }
    alert(`Mayor: ${mayor}, Menor: ${menor}`);
}
//8.Solicitar números hasta ingresar un número negativo. 
// Informar cuántos números pares e impares se ingresaron. 
// Usar while.
function ej8() {
    let num = parseInt(prompt("Ingrese numeros"));
    pares = 0;
    impares = 0;

    while (num >= 0) {

        while (isNaN(num)) {
            alert("Ingreso invalido, por favor ingrese un número");
            num = parseFloat(prompt(`Ingrese el ${i}° numero:`));
        }

        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        num = parseInt(prompt("Ingrese numeros"));

    }
    console.log(`pares: ${pares}, impares: ${impares}`);
}
//9. Ingresar 15 notas de alumnos.
// Calcular el promedio general y la cantidad de aprobados(nota>=7) y desaprobados. 
// Usar for.
function ej9() {
    let aprobados = 0;
    let desaprobados = 0;
    let suma = 0;
    let nota;
    for (let i = 1; i <= 15; i++) {
        nota = parseFloat(prompt(`Ingrese la nota n°${i} del estudiante:`));
        // validacion
        while (isNaN(nota) || nota > 10 || nota < 1) {
            alert("Ingreso invalido, por favor ingrese una nota valida");
            nota = parseFloat(prompt(`Ingrese las notas de los estudiantes:`));
        }
        if (nota >= 7) {
            aprobados++;
        } else {
            desaprobados++;
        }
        suma += nota
    }
    console.log(`El promedio general es: ${(suma / 15).toFixed(2)}, Los aprobados son: ${aprobados}, Los desaprobados son: ${desaprobados}`)

    //10. Simular un sistema de facturación: ingresar precios de productos hasta que se ingrese 0.
    //Calcular el total a pagar. Si el total supera 10000, aplicar un 10% de descuento. Usar do..while.
}
function ej10() {
    let suma = 0;
    let precio;
    do {
        precio = parseFloat(prompt("Ingrese el precio del producto"))
        while (isNaN(precio) || precio < 0) {
            alert("Ingreso invalido, por favor ingrese un número");
            precio = parseFloat(prompt(`Ingrese el precio nuevamente:`));
        }
        suma += precio
    } while (precio !== 0)


    if (suma >= 10000) {
        console.log(`Su totales de: ${suma * 0.90}, tubo un descuento del 10%: ${suma * 0.10}`)
    } else {
        console.log(`tu total es de: ${suma}`)
    }


}
//11. Solicitar números al usuario hasta que se ingrese un 0. 
//Mostrar el mayor número ingresado.
function ej11() {
    let num;
    let mayor;
    let cont = 1;
    do {
        num = parseFloat(prompt("Ingrese numeros"))
        while (isNaN(num)) {
            alert("Ingreso invalido, por favor ingrese un número");
            num = parseFloat(prompt(`Ingrese un numero nuevamente:`));
        }

        if (cont === 1) {
            mayor = num
        } else {
            if (num > mayor) {
                mayor = num
            }
        }
        cont++
    } while (num !== 0)
    if (cont !== 1) {
        alert("El numero mayor es: " + mayor)
    } else {
        alert("No se ingresaron numeros validos")
    }

    console.log(`El numero mayor ingresado es el: ${mayor}`)
}
function ej11b() {
    let num;
    let mayor;
    let primero = true;
    do {
        num = parseFloat(prompt("Ingrese numeros"))
        while (isNaN(num)) {
            alert("Ingreso invalido, por favor ingrese un número");
            num = parseFloat(prompt(`Ingrese un numero nuevamente:`));
        }
        if (num !== 0) {
            if (primero) {
                mayor = num;
                primero = false;
            } else {
                if (num > mayor) {
                    mayor = num
                }
            }
        }

    } while (num !== 0)

    if (!primero) {
        alert("El numero mayor es: " + mayor)
    } else {
        alert("No se ingresaron numeros validos")
    }

}
//12.Pedir 10 numeros e indicar cuantos  estan entre 10 y 50 inclusive
function ej12() {
    let entre = 0;
    let num;
    for (let i = 1; i <= 10; i++) {
        num = parseFloat(prompt(`Ingrese el N°${i}`))
        if (isNaN(num)) {
            alert("El valor ingresado es invalido")
            num = parseFloat(prompt("Por favor ingrese un valor correcto"))
            i--
        }

        if (num >= 10 && num <= 50) {
            entre++;
        }

    }
    console.log(`Los valores que estan entre 10 y 50 son: ${entre}`)
}
//13. Ingresar números hasta que se ingrese uno negativo.
//Mostrar la suma de los números pares.
function ej13() {
    let num;
    let suma = 0;

    do {
        num = parseFloat(prompt("Ingrese un numero (negativo para finalizar):"))
        while (isNaN(num)) {
            alert("Ingreso invalido, por favor ingrese un número");
            num = parseFloat(prompt(`Ingrese un numero nuevamente:`));
        }
        if (num >= 0 && num % 2 === 0) {
            suma += num;
        }
    } while (num >= 0);
    console.log(`La suma de los pares es: ${suma}`)
}
//14. Solicitar 8 sueldos, cuantos cobran  mas de 1 millon,
//  y mostrar  el promedio de todos  los sueldos ingresados.
function ej14() {
    let mayor = 0;
    let promedio = 0;
    let sueldos;
    for (let i = 1; i <= 8; i++) {
        sueldos = parseFloat(prompt(`Ingrese el sueldo N°${i}`));
        while (isNaN(num)) {
            alert("Ingreso invalido, por favor ingrese un número");
            num = parseFloat(prompt(`Ingrese un numero nuevamente:`));
        }
        if (sueldos >= 1000000) {
            mayor++
        } else {
            promedio += sueldos
        }
    }
    console.log(`Los que cobran mas de 1 millon son: ${mayor}. El promedio de todo es de: ${promedio / 8}`);
}
//15.Mostrar los números del 1 al 100. Indicar cuántos son múltiplos de 2, de 3 y de ambos.
function ej15() {
    let ambos = 0;
    let mult2 = 0;
    let mult3 = 0;
    for (let i = 1; i <= 100; i++) {
        console.log(i)
        if (i % 2 === 0 && i % 3 === 0) {
            ambos++
            mult2++
            mult3++
        } else {
            if (i % 2 === 0) {
                mult2++
            }
            if (i % 3 === 0) {
                mult3++
            }

        }
    }
    console.log(`Los multiplos de 2 son: ${mult2}. Los multiplos de 3 son: ${mult3}. Los que son multiplos de ambos son: ${ambos}`)
}
//16.Ingresar numeros hasta que se ingrese uno mayor a 1000. Informar el menor numero ingresado.
function ej16() {
    let num;
    let menor;
    let primero = true;
    do {
        num = parseFloat(prompt("Ingrese numeros"))
        while (isNaN(num)) {
            alert("Ingreso invalido, por favor ingrese un número");
            num = parseFloat(prompt(`Ingrese un numero nuevamente:`));
        }
        if (num <= 1000) {
            if (primero) {
                menor = num;
                primero = false;
            } else {
                if (num > menor) {
                    menor = num
                }
            }
        }

    } while (num <= 1000)

    if (!primero) {
        alert("El numero menor es: " + menor)
    } else {
        alert("No se ingresaron numeros validos")
    }
}
//Pedir 12 temperaturas y mostrar cuántas son mayores a 30°, cuántas menores a 10° 
// y cuantas estan en el rango medio.  
function ej17() {
    let temperaturas;
    let mayores = 0;
    let menores = 0;
    let rangoMedio = 0;
    for (let i = 1; i <= 12; i++) {
        temperaturas = parseFloat(prompt(`Ingrese la temperatura N°${i}`))
        while (isNaN(temperaturas)) {
            alert("Ingreso una temperatura valida")
            temperaturas = parseFloat(prompt("Por favor, ingrese la temperatura correctamente"));
        }
        if (temperaturas > 30) {
            mayores++;
        } else {
            if (temperaturas < 10) {
                menores++
            } else {
                rangoMedio++;
            }
        }
    }

    console.log(`Las temperaturas mayores a 30° son: ${mayores}. Las temperaturas menores a 10° son ${menores}.
         Y las temperaturas que estan en el rango medio son: ${rangoMedio}`)

}
//18. Solicitar números  hasta ingresar un 0. indicar  cuántos  son multiplos  de 5 (ej: 15,25,35)..
function ej18() {
    let num;
    let mult5 = 0;
    do {
        num = parseFloat(prompt("Ingrese numeros (0 para cortar)"))
        while (isNaN(num)) {
            alert("Numero ingresado no valido")
            num = parseFloat(prompt("Ingrese numeros (0 para cortar)"))
        }
        if (num !== 0 && num % 5 === 0) {
            mult5++;
        }

    } while (num !== 0)
    console.log(`Multiplos de 5 son ${mult5}`)
}
//19. Ingresar 10 números e indicar si la mayoria son positivos, negativos o hay empate.
function ej19() {
    let num;
    let positivos = 0;
    let negativos = 0;
    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`Ingrese el N°${i}`))
        if (num > 0) {
            positivos++;
        } else {
            if (num < 0) {
                negativos++;
            }
        }
    }
    if (positivos === negativos) {
        console.log("Hay empate entre los numeros positivos y negativos")
    } else {
        if (positivos > negativos) {
            console.log("Hay mas positivos")
        } else {
            console.log("Hay mas negativos")
        }
    }
}
//20. Simular un sistema de ventas: ingresar montos hasta que se ingrese 0. 
// Calcular el total vendido y aplicar: 
// -5% de descuento si el total supera 5000. 
// -15% de descuento si supera 20000.
function ej20() {
    let monto;
    let total = 0;
    let desc5 = 0;
    let desc15 = 0;
    do {
        monto = parseFloat(prompt("Ingrese un monto"))
        while (isNaN(monto)) {
            alert("Monto ingresado no valido")
            monto = parseFloat(prompt("Ingrese un monto"))
        }
        total += monto



    } while (monto !== 0)
    if (total > 20000) {
        console.log(`El descuento del 15% es de: ${total * 0.15}`)
        total = total * 0.85

    } else {
        if (total > 5000) {
            console.log(`El descuento del 5% es de: ${total * 0.5} `)
            total = total * 0.95

        }
    }
    console.log("El total a pagar es de " + total)
}
//21.Solicitar números al usuario hasta que  ingrese un numero negativo.
// Mostrar: *La suma total
// *La cantidad de numeros ingresados
// *El promedio de los numeros positivos
function ej21() {
    let num;
    let suma = 0;
    let cont = 0;
    let promedio = 0;
    do {
        num = parseFloat(prompt("Ingrese numeros"))
        while (isNaN(num)) {
            alert("numero ingresado no valido")
            num = parseFloat(prompt("Ingrese numeros"))
        }
        if (num > 0) {
            suma += num;
            cont++;

        }

    } while (num >= 0)
    promedio = suma / cont;
    console.log(`La suma total es: ${suma}.La cantidad de numeros es: ${cont}.Y el promedio es de: ${promedio}`)

}
//22. Pedir 12 numeros e indicar: *cuantos son pares 
// *Cuantos son impares 
// * Cuantos son mayores a 100
function ej22() {
    let num;
    let pares = 0;
    let impares = 0;
    let mayores100 = 0;

    for (let i = 1; 1 <= 12; i++) {
        num = parseFloat(prompt("ingrese numeros"))
        if (num % 2 === 0) {
            pares++;

        } else {
            impares++;
        }
        if (num > 100) {
            mayores100++;
        }
    }
    console.log(`pares ${pares}. impares ${impares}. mayores100 ${mayores100}`)
}
function ej23(){
    let num;
    let mayor;
    let menor;
    let bandera=true;
    do {
        num = parseFloat(prompt("Ingrese numero (0 para salir)"));
        if (num !==0) {
            if(bandera){
                mayor = num
                menor = num
                bandera = false
            } else {
                
            }
        }
    }
}




