let numero1 = parseInt(prompt("Ingrese un número porfavor: "));
let numero2 = parseInt(prompt("Ingrese otro número porfavor: "));
let numero3 = parseInt(prompt("Ingrese un último número porfavor: "));

let numeroMayor;

if(numero1 >= numero2 && numero1 >= numero3) {
    numeroMayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    numeroMayor = numero2;
} else {
    numeroMayor = numero3;
}

console.log("El numero mayor es:" + numeroMayor);