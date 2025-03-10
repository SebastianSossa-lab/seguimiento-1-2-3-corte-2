let tipoLavadora = 1; 
let cantidad = 4; 
let horas = 5; 

let costoPorHora;
if (tipoLavadora === 1) {
    costoPorHora = 4000; 
} else {
    costoPorHora = 3000; 
}

let costoBase = cantidad * horas * costoPorHora;

let descuento = 0;
if (cantidad > 3) {
    descuento = costoBase * 0.03; 
}

let costoTotal = costoBase - descuento;

let tipo = tipoLavadora === 1 ? "grande" : "pequeña";
console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas: $${costoTotal}.`);



