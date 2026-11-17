class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // Método público: abstrae la lógica interna
    depositar(monto) {
        if (monto <= 0) {
            console.error("El monto debe ser mayor a 0.");
            return;
        } else {
            this.saldo += monto;
            console.log(`Depósito exitoso. Saldo actual: $${this.saldo}`);
        }
    }

    retirar(monto) {
        if (monto > this.saldo) {
            console.error("Fondos insuficientes.");
            return;
        } else {
            this.saldo -= monto;
            console.log(`Retiro exitoso. Saldo actual: $${this.saldo}`);
        }
    }
}
//Abstracción
let cuenta1 = new CuentaBancaria("Jose",1000)
cuenta1.depositar(500)
cuenta1.depositar(-1000);

cuenta1.retirar(100);
cuenta1.retirar(2000); 

//Encapsulamiento
class Usuario {
#password; // -> Propiedad privada

constructor(nombre, password) {
this.nombre = nombre;
this.#password = password;
}

// Método para validar acceso
validarPassword(pass) {
return this.#password === pass;
}

// Método para cambiar contraseña
cambiarPassword(passActual, nuevoPass) {
if (this.validarPassword(passActual)) {
this.#password = nuevoPass;
console.log("Contraseña actualizada.");
} else {
console.error("Contraseña actual incorrecta.");
}
}
}

const user = new Usuario("Ana", "1234");
console.log(user.validarPassword("1234")); // true
user.cambiarPassword("1234", "abcd"); // Contraseña actualizada

