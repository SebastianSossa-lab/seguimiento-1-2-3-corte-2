let numero = 1;
let limite = 5;

do {
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par`);
    } else {
        console.log(`El número ${numero} es impar`);
    }
    numero++;
} while (numero <= limite);