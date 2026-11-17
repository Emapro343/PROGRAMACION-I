// Abstracción 
class Celular {
    #pin;
    #intentos;
    #bloqueado; //Propiedad privada
    constructor(marca, modelo, bateria, pin) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = bateria;
        this.#pin = pin;
        this.#intentos = 0;
        this.#bloqueado = false;
    }

    cargar(minutos) {
       if (this.bateria === 100){
        console.log(`La bateria ya esta completa.`);
        return;
       }

       for (let i = 0; i <= minutos; i++){
        this.bateria++;
        if(this.bateria === 100) {
            console.log("Bateria completa.");
            break;
        }
       }
       console.log(`Bateria: ${this.bateria}%`)
    }

    usar(minutos) {
        this.bateria -= minutos;
        if (this.bateria < 0) {
            this.bateria = 0;
        }
        console.log(`Usaste el celular por ${minutos} minutos. Batería restante: ${this.bateria}%.`);
    }
   desbloquear(pin) {
    if (this.#bloqueado) {
        console.log(`El celular esta bloqueado`);
        return true;
    }
    if (pin === this.#pin) {
        this.#intentos = 0;
        console.log(`Celular desbloqueado`)
        return true;
    }
    do {
        if (this.#intentos >= 3) {
            this.bloqueado = true;
            console.error(`Celular bloqueado`)
            return false
        }
        this.#intentos++;

    } while (this.#intentos <= 3);

    console.error(`Pin incorrecto`)

}
    cambiarPin(pin, pinNuevo) {
    if (this.desbloquear(pin)) {
        this.#pin = pinNuevo;
        console.log("Cambio de contraseña exitoso.")
    } else {
        console.error("Contraseña Incorrecta.")
    }
}

}

const celular1 = new Celular("Samsung", "Galaxy S23", 100, "2855");
const celular2 = new Celular("Apple", "iPhone 15", 70, "abcd");


celular1.usar(40);  // Batería baja a 60%
celular1.usar(70);  // bajar a -10%, pero se queda en 0%
celular1.cargar();  // Vuelve a 100%


celular2.usar(25);  // Batería baja a 75%
celular2.cargar();  // Vuelve a 100% 


//Encapsulamiento 



/*celular1.#pin. No se puede acceder a la propiedad "#pin" fuera de la clase "Celular" porque tiene un identificador privado*/

/*celular.pin. Pin no existe.*/
//Herencia

class Smartphone extends Celular {
    #pin
    constructor(marca,modelo,pin, bateria, sistema){
        super(marca,modelo,pin,bateria)
        this.sistema = sistema;
        this.app = []
    }
    InstalarApp(nombre){
        this.apps.push(nombre)
        console.log(`La aplicacion agregada es ${nombre}`)
    }
    desinstalarApp(nombre){
        let busc = this.apps.findIndex((app)=> app = nombre)
        if(this.apps.includes(nombre)){
            this.apps.splice(busc)
        } else {
            console.log("La aplicacion no esta en apps")
        }
    }
    listaApp(){
        if(this.apps.lenght() === 0){
            console.log("No hay apps instaladas.")
        } else {
            this.apps.forEach((app,i) => `App numero ${i+1} es ${app}`);
                
            
        }
    }
}

let smart1 = new Smartphone("Samsung", " Galaxy", 70, "abcd", "Android");


























