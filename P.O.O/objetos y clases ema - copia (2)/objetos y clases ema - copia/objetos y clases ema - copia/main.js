class Libro {
    constructor(titulo, autor, paginas,) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }


    presentar() {
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor} y tiene ${this.paginas} páginas.`);
    }

    get obtenerTitulo() {
        return this.titulo.toUpperCase();
    }


    set asignarPaginas(nuevaCantidad) {
        if (nuevaCantidad > 0) {
            this.paginas = nuevaCantidad;
        } else {
            console.log("La cantidad de páginas debe ser mayor a 0");
        }
    }

    resumen() {
        console.log(` ${this.titulo} | ${this.autor}`);
    }

    set asignarTitulo(nuevoTitulo) {
        // trim() elimionar espacios 
        let nuevoTituloLimpio = nuevoTitulo.trim();

        if (nuevoTituloLimpio.length >= 3) {
            this.titulo = nuevoTituloLimpio;
            console.log(`Título actualizado correctamente a: "${this.titulo}"`);
        } else {
            console.log("error: El título no puede estar vacío y debe tener al menos 3 caracteres.");
        }
    }

    get LibroLargo() {
        return this.paginas > 300;
    }

}


let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 417);
let libro2 = new Libro("El Principito", "Antoine de Saint-Exupéry", 96);
let libro3 = new Libro("1984", "George Orwell", 328);


console.log(libro1);
console.log(libro2);
console.log(libro3);


console.log("Libro 1 :", libro1['titulo'], "-", libro1['autor'], "-", libro1['paginas']);
console.log("Libro 2 :", libro2.titulo, "-", libro2.autor, "-", libro2.paginas);
console.log("Libro 3 :", `${libro3.titulo} por ${libro3.autor}`);


libro1.titulo = "El amor en los tiempos del cólera";
libro2['paginas'] = 110;

console.log("Libro 1 modificado:", libro1);
console.log("Libro 2 modificado:", libro2);


libro1.publicacion = 1985;
libro2['descripcion'] = "Una novela poética y filosófica.";


console.log("Libro 1:", libro1);
console.log("Libro 2:", libro2);
console.log("Libro 3:", libro3);



delete libro1.publicacion;

console.log("libro1.publicacion:", libro1.publicacion);


libro1.presentar();
libro2.presentar();
libro3.presentar();


console.log("Título original:", libro3.titulo);
console.log("Título usando el getter (obtenerTitulo):", libro3.obtenerTitulo);


console.log("Páginas antes del cambio:", libro3.paginas);
libro3.asignarPaginas = 350;
console.log("Páginas después de asignar 350 (válido):", libro3.paginas);


libro3.asignarPaginas = -15;
console.log("Páginas después de intentar asignar -15:", libro3.paginas);



console.log(libro1.resumen());
console.log("titulo anterior")