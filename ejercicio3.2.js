let tipoLavadora = 1; 
let cantidad = 1; 
let horas = 5; 

while (cantidad <= 5) {
    let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;

    let costoBase = cantidad * horas * costoPorHora;

    let descuento = cantidad > 3 ? costoBase * 0.03 : 0;

    let costoTotal = costoBase - descuento;

    let tipo = tipoLavadora === 1 ? "grande" : "pequeña";
    console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas: $${costoTotal}.`);

    cantidad++;

}