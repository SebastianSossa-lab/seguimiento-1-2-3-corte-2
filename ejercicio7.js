let Genero = "Femenino";
let edad = 35;

let ayudaFinanciera

if (genero === "femenino") {
    if (edad > 50) {
        ayudaFinanciera = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayudaFinanciera = 100000;
    } else {
        ayudaFinanciera = 0;
    }
} else if (genero === "masculino") {
    ayudaFinanciera = 40000;
}

console.log("El valor de ayuda mensual es: $" + ayudaFinanciera);
