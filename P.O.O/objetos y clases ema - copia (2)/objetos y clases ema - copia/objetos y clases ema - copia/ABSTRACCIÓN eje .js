class cuenataBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo= saldoInicial;
    }

    depositar(monto) {
        if (monto <= 0) {
            console.error("el monto debe ser mayor a 0.");
            return;
        } else {
            this.saldo += monto;
            console.log(`deposito exitoso. saldo actual: $${this.saldo}`);
        }
    }

    retirar(monto) {
        if (monto > this.saldo) {
            console.error("fondo insuficientes.");
            return;
        } else {
            this.saldo -= monto;
            console.log(`retiro exitoso. saldo actual: $${this.saldo}`);
        }
    }
}

const cuenta1= new cuenataBancaria ("juan" , 1000);
cuenta1.depositar(500);// 1000 + 500 = 1500
cuenta1.retirar(100);// 1500 - 100 = 1400


