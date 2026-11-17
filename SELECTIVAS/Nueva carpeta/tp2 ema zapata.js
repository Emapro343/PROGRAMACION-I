
function ej1() {
    let numero = parseFloat(prompt("Ingrese un numero"));

    if (isNaN(numero)) {
        console.log("Valor invalido");
        return;
    }

    if (numero > 0) {
        console.log("Es positivo")
    } else {
        if (numero < 0) {
            console.log("Es negativo")
        } else {
            console.log("Es cero")
        }
    }
}
//ej1()

function ej2() {
    let edad = parseInt(prompt("Ingrese su edad"))
    if (isNaN(edad)) {
        console.log("Edad invalida");
        return;
    }

    if (edad >= 18) {
        console.log("Mayor de edad")
    } else {

        console.log("Menor de edad")

    }
}
//ej2()

function ej3() {
    let temp = parseFloat(prompt("Ingrese una temperatura"))

    if (temp < 0) {
        console.log("Helado");
    } else {
        if (temp < 15) {
            console.log("Frio");
        } else {
            if (temp < 25) {
                console.log("Templado")
            } else {
                if (temp < 35) {
                    console.log("Caluroso")
                } else {
                    console.log("Extremo")
                }
            }
        }
    }
}

//ej3()

function ej4() {

    let usuario = prompt("Ingrese su nombre de usuario")
    let contrasenia = prompt("Ingrese la contraseña")
    if (usuario === "admin") {
        if (contrasenia === "1234") {
            console.log("Bienvenido")
        }
        else {
            console.log("Contraseña incorrecta")
        }
    }
    else {
        console.log("Usuario no encontrado")
    }

}
//ej4()

function ej5() {
    let edad = parseInt(prompt("Ingrese su edad"))
    let ingresos = parseFloat(prompt("Ingresos"))
    let trabajo = parseInt(prompt("¿Tiene Trabajo?\n1. SI\n2.NO"))
    if (isNaN(edad) || isNaN(ingresos) || isNaN(trabajo)) {
        console.log("Datos incorrectos");
        return;
    }
    if (trabajo !== 1 && trabajo !== 2) {
        console.log("opcion invalida")
        return;
    }
    let tienetrabajo;

    if (trabajo === 1) {
        tienetrabajo = true;
    } else {
        tienetrabajo = false;
    }

    if (edad >= 18) {
        if (ingresos > 15000) {
            console.log("prestamo aprobado")
        } else {
            if (tienetrabajo) {
                console.log("prestamo aprobado")
            } else {
                console.log("prestamo denegado, no tiene ni trabajo ni ingresos")
            }
        }
    } else {
        console.log("prestamo denegado, es menor de edad")
    }

}

//ej5()

function ej6() {
    let monto = parseFloat(prompt("ingrese monto"))
    let pago = prompt("ingrese si pago en efectivo o transferencia")

    if (isNaN(monto) || monto <= 0 || isNaN(pago)) {
        console.log("datos invalidos")
        return;
    }

    if (pago !== 1 && pago !== 2) {
        console.log("opcion invalida");
        return;
    }

    let total = monto;
    if (monto > 10000) {
        if (pago === 1) {
            total = monto * 0.8;
        } else {
            total = monto * 0.9;
        }
    }
    console.log("total a pagar;", Math.round(total));

}

//ej6()
function ej7() {
    let preciobase = parseFloat(prompt("ingrese precio base"))
    let esSocio = confirm("¿Usted es socio?")
    let cantitems = parseInt(prompt("Ingrese cantidad items"))
    let descSocio;
    let descNosocio;
    if (esSocio) {
        descSocio = preciobase * 0.8;
        console.log("El descuento con el 20% es;", descSocio)
    } else {
        if (cantitems < 5) {
            descNosocio = preciobase * 0.9;
            console.log("El descuento con el 10% es;", descNosocio)
        }
        else {
            console.log("Sin descuento")
        }
    }


    if (descSocio > 5000) {
        preciofinalSocio = descSocio * 0.95
        console.log("Se aplica un descuento del 5% porque su precio final es mayor a 5000;", preciofinalSocio)
    } else {
        if (descNosocio > 5000) {
            preciofinalNosocio = descNosocio * 0.95
            console.log("Se aplico un descuento del 5% porque su precio final es mayor a 5000;", preciofinalNosocio)
        }
    }

}

//ej7()

function ej8() {
    let zona = prompt("Escoja una Zona\nA. CABA \nB. GBA \nC. Interior")
    let pesoKg = parseFloat(prompt("Ingrese el peso de su pedido"))
    let urgente = confirm("¿Su envio es Urgente?")
    let Miembro = confirm("¿Usted es Miembro?")
    let totalCompra = parseFloat(prompt("Ingrese el precio de la compra"))
    let envio;
    if (zona) {
        if (zona === "A") {
            envio = $500
        } else {
            if (zona === "B") {
                envio = $900
            } else {
                if (zona === "C") {
                    envio = $1500
                }
            }
        }
    } else {
        console.log("Zona no reconocida")
        return;
    }



    if (pesoKg > 5) {
        adicional = (pesoKg - 5) * 200
        envio = envio + adicional
    }
    if (urgente) {
        envio = envio * 1.5
        console.log("Costo de envio;", envio)
    }

    if (Miembro === true && totalCompra >= 5000) {
        descfinal = totalCompra * 0.8
        console.log("Descuento aplicado;", descfinal)
    }


}
/* switch(zona) {
    case 1:
        costo = 500;
        break;
    case 2:
        costo = 900;
        break;
    case 3:
        costo = 1500;
        break;
    default:
        console.log("Zona invalida");
    }*/
   

//ej8()
function ej9() {
    let tord = parseInt(prompt("ingrese la cantidad de tornillos defectuados"));
    let torp = parseInt(prompt("ingrese la cantidad de tornillos producidos"));
    let grado = 0
    if (isNaN(tord) === true || isNaN(torp) === true) {
        console.log("ingreso valores invalidos");
        return "la funcion fue ejecutada"
    }
    if (tord < 200 && torp > 10000) {
        grado = 8
    } else {
        if (torp > 10000) {
            grado = 7
        } else {
            if (tord < 200) {
                grado = 6
            } else {
                grado = 5
            }
        }
    }
    console.log("grado:", grado);
    return "la funcion fue ejecutada"
}

