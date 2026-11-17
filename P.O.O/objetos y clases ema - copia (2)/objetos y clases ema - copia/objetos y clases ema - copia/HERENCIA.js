class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }

    encender() {
        console.log(`${this.marca} encendido.`);
    }
}

class auto extends Vehiculo {
    constructor (marca,modelo){
        super(marca); //llama al contructor del vehiculo
        this.modelo = modelo;
    }

    tocarBocina () {
        console.log("¡Beep beep!");
    }
}

const miAuto = new auto("toyota","corolla");
miAuto.encender();//toyota encendido.
miAuto.tocarBocina();// ¡Beep beep!