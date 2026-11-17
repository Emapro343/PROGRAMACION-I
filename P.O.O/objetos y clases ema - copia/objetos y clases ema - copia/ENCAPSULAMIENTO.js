class Usuario {
    #password; // _ (guion bajo,visual) , # (numeral , restriccion) indican propiedad PRIVADA

    constructor(nombre, password) {
        this.nombre = nombre;
        this.#password = password;
    }

    // metodo para validar acceso
    validarPassword(pass) {
        return this.#password === pass;
    }

    // metodo para cambiar contraseña 
    cambiarPassword(passActual, nuevoPass) {
        if (this.validarPassword(passActual)) {
            this.#password = nuevoPass;
            console.log("contraseña actualizada.");
        } else {
            console.error("contraseña actual incorrecta.");
        }
    }
}

const user = new Usuario("ana", "1234");
console.log(user.validarPassword("1234"));//contraseña
user.cambiarPassword("1234", "abcd");//contraseña actualizada



