let = edad = 14;

edad <= 5 ? console.log("No tiene que pagar pasaje") : console.log("Tiene que pagar pasaje");

let temperatura = -10;

temperatura <=0 ? console.log("La temperatura esta bajo cero") : console.log("La temperatura es normal");

let reservacionRestaurante = true;
let nombredelrestaurante = "Bianco";

let mensaje = reservacionRestaurante ? `Su reservacion para el restaurante ${nombredelrestaurante} esta confirmada` : `Su reservacion para el restaurante ${nombredelrestaurante} no esta confirmada`;
console.log(mensaje);

const weight = "70kg";
const height = "1.70m";

weight == "70kg" && height == "1.70m" ? 
    console.log(`Los datos ingresados coinciden ${weight}. Puede seguir con los siguientes datos`) :
    console.log(`El peso ${weight} y la altura digitada es incorrecta`);

let diaSemana = "sábado";

    diaSemana == "lunes" ? console.log(`Hoy es ${diaSemana}, empieza una nueva semana.`) :
        diaSemana == "miércoles" ? console.log(`Hoy es ${diaSemana}, estamos a mitad de semana.`) :
            diaSemana == "sábado" ? console.log(`Hoy es ${diaSemana}, Llega el fin de semana`) :
                console.log(`Hoy es ${diaSemana}, espera a que llegue el fin de semana`);

let edad = 20;

if (edad >= 18) {
    console.log(`Tienes ${edad} años, por lo tanto, eres mayor de edad.`);
    }

let tipoUsuario = "editor";

    if (tipoUsuario === "editor") {
        console.log("Tienes acceso solo para editar contenido");
    } else if (tipoUsuario === "admin") {
        console.log("Tienes acceso para acceder a otras funcionalidades");
    } else {
        console.log("Tienes acceso limitado al sistema.");
    }

    let usuarioRegistrado = "user123";
    let passwordBD = "pass123";
    let usuarioIngresado = "user123";
    let passwordIngresada = "pass123";
    
    if (usuarioBD === usuarioIngresado && passwordBD === passwordIngresada) {
        console.log("¡Acceso concedido! Bienvenido.");
    } else {
        console.log("Acceso denegado. Verifique sus credenciales.");
    }

let libroDisponible = "100 años de soledad";
let libroSolicitado = "Cien años de soledad";
let UtililesDisponibles = "resaltador y marca páginas";
let UtilesSolicitados = "resaltador y marca páginas";

if (libroDisponible === libroSolicitado && UtilesDisponibles === UtilesSolicitados){
   console.log(`El libro ${libroSolicitado} y los utiles solicitados ${UtilesSolicitados} estan disponibles en este momento`); 
} else {
    console.log(`El libro ${libroSolicitado} y los utiles solicitados ${UtilesSolicitados} no estan disponibles en este momento`);
}

let derecha = true;
let izquierda = false;
let arriba = false;
let abajo = false;

if (derecha) {
    console.log("El personaje se mueve hacia la derecha");
}   else if (izquierda) {
    console.log("El personaje se mueve hacia la izquierda");
}
    else if (arriba) {
        console.log("El personaje se mueve hacia arriba");
    }
    else if (abajo) {
        console.log("El personaje se mueve hacia abajo");
    }
    else {
        console.log("El personaje no se mueve");
    }

 let encendido = true;
 let potenciaMotores = 50;
 if (encendido){
    console.log("El motor se ha encendido correctamente");
 }
    if (potenciaMotores >= 50) {
        console.log ("La potencia de los motores esta al 50%");
    }
    else if (potenciaMotores > 0 && potenciaMotores < 50) {
        console.log ("La potencia de los motores esta a la mitad de su potencial");
    }
    else {
        console.log ("La potencia de los motores esta apagada");
    }

    let hora = "2pm";
    let clase = "matematicas";
    if(hora === "2pm"){
        console.log (`Es la hora de la ${clase}`);
    }