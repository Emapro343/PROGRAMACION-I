function ej1() {
    const nombres = [`Ana`, `Luis`, `Marta`, `Pedro`]
    nombres.forEach((n) => {
        console.log("Hola,", n)
    });
}

function ej2() {
    let acum = 0;
    const precios = [1200, 850, 430, 2100]
    precios.forEach((n) => acum += n);
    console.log(`El total es ${acum}`)

}
function ej3() {
    const preciosBase = [1000, 2500, 800, 1500];
    const preciosConIVA = preciosBase.map(precio => Math.round(precio * 1.21));
    console.log(preciosConIVA);
}

function ej4() {
    const estudiantes = [
        { id: 1, nombre: `Lucia`, nota: 4 },
        { id: 2, nombre: `Maia`, nota: 9 },
        { id: 3, nombre: `Tomas`, nota: 5 },
        { id: 4, nombre: `Jeremías`, nota: 9 }
    ]
    const nombres = estudiantes.map((estudiantes) => estudiantes.nombre)
    console.log(`El arreglo con solo los nombres quedaria ${nombres}`)
}

function ej5() {
    const nombres = [`Ana`, ` Luis`, `Marta`, `Pedro`, `Sofia`, `Juan`]
    const mas4 = nombres.filter((n) => n.length > 4)
    console.log(`Los nombres que tienen mas de 4 letras son ${mas4}`)
}

function ej6() {
    //?-> entonces
    //valor ? TRUE : FALSE
    // Ejemplo de array de estudiantes
    const estudiantes = [
        { id: 1, nombre: "Ana", nota: 8 },
        { id: 2, nombre: "Pedro", nota: 5 },
        { id: 3, nombre: "Lucía", nota: 10 },
        { id: 4, nombre: "Jeremías", nota: 9 }
    ];

    // Buscar id = 3
    const estudiante3 = estudiantes.find(estudiante => estudiante.id === 3);
    const estudiante10 = estudiantes.find(estudiante => estudiante.id === 10);
    // Devuelve: undefined (porque no existe ningún objeto con ese id en el arreglo
    console.log(estudiante10 ? `se encontro el usuario ${estudiante.nombre}` : `no se encontro el usuario`)
}

function ej7() {
    const productos = [
        { nombre: "Mouse", stock: 5 },
        { nombre: "Teclado", stock: 0 },
        { nombre: "Monitor", stock: 2 },
        { nombre: "Webcam", stock: 0 }
    ];
    const productosConStock = productos.filter(producto => producto.stock > 0);
    console.log(productosConStock);
}

function ej8() {
    const carrito = ["pan", "mayonesa"];

    function agregarProducto(producto) {
        if (!carrito.includes(producto)) {
            carrito.push(producto);
            console.log(`"${producto}" fue agregado al carrito.`);
        } else {
            console.log(`"${producto}" ya existe en el carrito, no se agrega.`);
        }
    }
    agregarProducto("huevos");
    agregarProducto("mayonesa");

    console.log(carrito);
}

function ej9() {
    let listaEstudiantes = [
        { nombre: "Juan", nota: 4 },
        { nombre: "María", nota: 8 },
        { nombre: "Carlos", nota: 6 },
        { nombre: "Laura", nota: 5 }
    ];

    function procesarAprobados(arreglo) {
        arreglo
            .filter(estudiante => estudiante.nota >= 6) // Obtener aprobados
            .map(estudiante => `${estudiante.nombre}: ${estudiante.nota}`) // Transformar formato
            .forEach(texto => console.log(texto)); // Mostrar cada uno
    }
    console.log("--- Aprobados iniciales ---");
    procesarAprobados(listaEstudiantes);
    listaEstudiantes.push({ nombre: "Sofía", nota: 9 });

    console.log("\n--- Aprobados después de agregar a Sofía ---");
    procesarAprobados(listaEstudiantes);
}


function ej10() {
    const usuarios = [
        { id: 1, nombre: "Ana" },
        { id: 2, nombre: "Pedro" }
    ];
    const usuarioEncontrado = usuarios.find(u => u.id === 2);
    console.log(usuarioEncontrado);

    const frutas = ["manzana", "banana", "naranja"];
    const tieneBanana = frutas.includes("banana");
    console.log(tieneBanana);

    const numeros = [1, 2, 3, 4];
    const dobles = numeros.map(num => num * 2);
    console.log(dobles);

    const mayoresDeEdad = edades.filter(edad => edad >= 18);
    console.log(mayoresDeEdad);
}
/*a)Obtener los titulos de los libros que esten disponibles y que sean de genero fantasia*/
/*b)Agregar un nuevo libro que este disponible y sea de genero clasico*/
function ej11() {
    const libros = [
        { titulo: "El Hobbit", disponible: true, generos: ["fantasía", "aventura"] },
        { titulo: "Drácula", disponible: false, generos: ["terror", "clásico"] },
        { titulo: "Harry Potter", disponible: true, generos: ["fantasía", "juvenil"] },
        { titulo: "It", disponible: true, generos: ["terror"] },
        { titulo: "Eragon", disponible: false, generos: ["fantasía", "aventura"] },

    ];
    const librosdisp = libros.filter((l) => l.disponible && l.generos.includes("fantasía"));
    libros.push({ titulo: "El principito", disponible: true, generos: ["clásico"] });
    console.log(librosdisp);
    console.log(libros);
}

