//Referenciar al elemento del HTML que tenga ID = "contenedor"
//querySelector -> "#" -> ID | "." -> CLASES
let contenedor = document.querySelector("#contenedor");

//Crea un nuevo elemento desde el 35 hacia el HTML.
let titulo = document.createElement("h1");


//Le doy un contenido al titulo
titulo.textContent = "Actividad 1 - DOM";
titulo.classList.add ("titulo")
titulo.style.color = "blue"


//Agrega titulo dentro del contenedor (div)
contenedor.appendChild(titulo); // contenedor. appendChil (elemento agregado)

let subtitulo = document.createElement("h2");
subtitulo.textContent = "Programación I "
subtitulo.style.color = "green"
contenedor.appendChild(subtitulo);

// Tabla 
let tabla = document.createElement("table");
//Agrega una clase a la etiqueta -> CSS -> ".tabla"
tabla.classList.add("tabla");

//Cabeza de la tabla 
let thead = document.createElement("thead");
let filaEncabezada = document.createElement("tr")

//COLUMNA 1
let th1 = document.createElement("th")
th1.textContent = "Titulo";

//COLUMNA 2
let th2 = document.createElement("th")
th2.textContent = "Año";

filaEncabezada.appendChild(th1);
filaEncabezada.appendChild(th2);
thead.appendChild(filaEncabezada);
tabla.appendChild(thead);

//Cuerpo de la tabla
let tbody =  document.createElement("tbody");

//Fila 1
let fila1 = document.createElement("tr");
let td1 = document.createElement("td");
td1.textContent = "Soy Leyenda";

let td2 = document.createElement("td")
td2.textContent = "2007";

fila1.appendChild(td1)
fila1.appendChild(td2)
tbody.appendChild(fila1);

//Fila 2 
let fila2 = document.createElement("tr");
let td3 = document.createElement("td");
td3.textContent = "Rapidos y Furiosos";

let td4 = document.createElement("td")
td4.textContent = "2001";

fila2.appendChild(td3);
fila2.appendChild(td4);
tbody.appendChild(fila2);

tabla.appendChild(tbody);
contenedor.appendChild(tabla);
