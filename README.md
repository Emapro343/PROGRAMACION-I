## PROGRAMACIÓN I

## Descripción 
Taller de Programación I - 5to Com B

## Temas Trabajados: 
- Selectivas 
- Repetitivas
- Arreglos -> Simples y Compuestos.
- P.O.O -> Clases, Subclases, Objetos y Pilares.
- D.O.M

##
- Selectivas: Es una estructura que permite tomar decisiones segun si la condicion se cumple o no.
```bash
let edad = 18;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
``` 

##
- Repetitivas: Permite ejecutar una o varias veces el codigo.
```bash
for (let i = 1; i <= 3; i++) {
    console.log("Hola");
}
```

##
- Arreglos: Permite almacenar varios datos en una misma variable.
```bash Simples
let nombres = ["Ema", "Fede", "Luchi"];
```
 ```bash Compuestos
 let peliculas = [
    ["Titanic", 1997, "Romance"],
    ["Shrek", 2001, "Comedia"],
    ["Avatar", 2009, "Ciencia ficción"]
];

console.log(peliculas[1][0]);
```


##
- P.O.O: Forma de programar que organiza el codigo mediante clases y objetos.
Abstracción: representa las características más importantes de un objeto.
Encapsulamiento: protege los datos de un objeto.
Herencia: permite reutilizar características de otra clase.
Polimorfismo: permite que una misma acción tenga diferentes comportamientos.
```bash 
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

let persona1 = new Persona("Juan");
```

##
- D.O.M: Representación  estructurada de una pagina WEB donde tiene una forma de arbol, cada etiqueta HTML se convierte en un nodo (cada nodo contiene un objeto).
- JS:
```bash
 let titulo = document.createElement("h1");
 titulo.textContent = "¡Hola Ema!";
 titulo.classList.add("titulo");

```

- HTML:
```bash
<h1>¡Hola Ema!</h1>

```

- CSS 
```bash 
.titulo {
color: blue;
}