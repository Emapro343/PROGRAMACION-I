function ej1(){
    const n=[4,8,15,16,23,42];
n.forEach((num)=>{
console.log(num)
});
}
function ej2(){
   const numeros=[3,12,7,25,5,18,9,30];
const mayores=numeros.filter((edad)=> edad>=10);
console.log(mayores); 
}
function ej3(){
    const nums=[2,5,10,3,8,6];
const triples=nums.map((n)=> n*3);
console.log(triples);
}
function ej4(){
    const numeros2 =[14,7,-3,22,-8,5,-1];
const resultado=numeros2.find((n)=>n<0);
console.log(resultado);
}
function ej5(){
    const nm=["12","45","67","8","91","33","55"];
    const primero=nm.findIndex((p)=>p>50);
    console.log(primero)
}
function ej6(){
    const frutas =["manzana","banana","naranja","uva"];
frutas.push("kiwi");
console.log(frutas);
}
function ej7(){
    const color=["rojo","azul","verde","amarillo","blanco"];
const elin=color.splice(0,2);
console.log(elin);
console.log(color);
}
function ej8(){
const letras =["a","e","i","o","u"];
console.log(letras.length);
}
function ej9(){
    const numeros=[1,4,7,8,3,12,5,6,11,10];
const par=numeros.filter((pares)=> pares % 2===0);
multi=par.map((pares)=> pares*2)
console.log(par,multi);
}