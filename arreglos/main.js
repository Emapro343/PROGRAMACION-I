const vacio =[];
const frutas=["manzana","banana","naranja"];

console.log(frutas[0]);
console.log(frutas[2]);

frutas[1]="pera";
console.log(frutas); //["manzana","pera","naranja"]

const numeros =[10,20,30,40,50];
console.log(numeros.length);//5

const ultimo=numeros[numeros.length-1];
console.log(ultimo);

for(let i=0;i<numeros.length;i++){
console.log(numeros[i]);
}




const tareas =["estudiar","hacer ejercicio"];
tareas.push("leer");
console.log(tareas);
//["estudiar","hacer ejercicio","leer"];

const nuevadimension=tareas.push("cocinar","descansar");
console.log(nuevadimension);

//tareas.push("cocinar","descansar")
//console.log(tareas.length);



const nombres=["Ana","Luis","Mia"];
nombres.forEach((nombre)=>{
console.log("Hola",nombre)
});
//Hola,Ana|Hola Luis|Hola,Mia
//con indices
nombres.forEach((nombre,i)=>{
    console.log(`posicion ${i}:${nombre}`);
})



const edades=[12,25,17,15,22];
const mayores=edades.filter((edad)=> edad>=18);
console.log(mayores);

const productos=["apple","mango","pear","aprocot"];
const conA=productos.filter((p)=> p.startsWith("a"));
console.log(conA);//["aplle","aprocot"]



 
//el map para crear nuevos arrglos din modificar el original
const nums=[1,2,3,4];
const dobles=nums.map((n)=> n*2);
console.log(dobles);//[2,4,6,8];
//Convertir a string con formato
const precios=[100,250,80];
const formateados=precios.map((p)=> `$${p}`);
console.log(formateados);//["$100","$250","$80"]




//find devuelve el primer elemento que cumple la condicion.sino devuelve undefind
const numeros2 =[3,7,15,2,22,9];
const resultado=numeros2.find((n)=>n>10);
console.log(resultado);//10
const palabras=["luna","sol","mar","cielo","monte"];
const res2=palabras.find((p)=> p.startsWith("m"));
console.log(res2);




//findindex devuelve el indice(posicion)del elemento.sino se devuelve -1
const frutas2=["manzana","banana","naranja","uva"];
const idx =frutas2.findIndex((f)=> f==="naranja");
console.log(idx);
const noExiste=frutas2.findIndex((f)=> f==="kiwi");
console.log(idx);
const pos=frutas2.findIndex((f)=>f==="banana");
if(pos !==-1)frutas2[pos]="mango";
console.log(frutas2);


//modifica el arreglo origanal,puede eliminar-reemplazar o insertar.Devuelve un arreglo con los arrglos elimandos
const letras2=["a","b","c","d","e"];
//1  eliminar_splice(inicios,cuantos)
const elin=letras2.splice(1,2);
console.log(letras2);
console.log(elin);

//2  insertar-aplice(posicion 0, nuevas)
letras2.aplice(1,0,"x","y");
console.log(letras2);

//3   reemplazar 
letras2.slice(2,1,"z");
console.log(letras2);