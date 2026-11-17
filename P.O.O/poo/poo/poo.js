/*
1)Crear 3 insancias de productos y agregale una propiedad distinta a cada una

2) llamar metodo "mostrarNombre" para las 3, y llamar el getter para la ultima

3)probar en la segunda instancia al setter, enviando stock = 0 y luego un stock mayor a 0

4) eliminar la propiedad "conservaP" de la primer instancia(resolvemos en la tele)

5) en clase "producto" agregar método "resumen" con nombre y precio. Mostrar las 3 instancias

6) agregar setter que cambie el nombre solo si el texto no está vacio. Notificar y probar caso válido e inválido

7) en setter del punto anterior, verificar que no haya nombres menores a 3 caracteres. Usar metodo "trim()". ¿que hace?

8) agregar un getter que devuelva "true" si el producto está disponible (false caso contrario). Mostrar mensaje al usuario
*/

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