function calcularAyudaFinanciera(genero, edad) {
    let ayudaFinanciera;

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
    } else {
        ayudaFinanciera = 0; 
    }

    return ayudaFinanciera; 
}

let personas = [
    { genero: "femenino", edad: 35 },
    { genero: "femenino", edad: 55 },
    { genero: "masculino", edad: 40 },
    { genero: "femenino", edad: 25 }
];

for (let i = 0; i < personas.length; i++) {
    let genero = personas[i].genero;
    let edad = personas[i].edad;
    let ayudaFinanciera = calcularAyudaFinanciera(genero, edad);

    console.log(`Para género ${genero} y edad ${edad}, el valor de ayuda mensual es: $${ayudaFinanciera}`);
}
