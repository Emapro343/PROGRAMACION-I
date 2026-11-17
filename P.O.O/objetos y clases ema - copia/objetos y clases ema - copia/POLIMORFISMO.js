class  animal {
    emitirSonido() {
        console.log("el animal hace un sonido.");
    }
}

class perro extends animal {
    emitirSonido() {
        console.log("el perro dice : ¡guau!");
    }
}

class gato extends animal {
    emitirSonido() {
        console.log("el gato hace: ¡miau!");
    }
}

const animales = [new animal(), new perro(),new gato()];
animales.forEach((animal) => animal.emitirSonido()); 