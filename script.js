//variables
// let NumeroUno = 7;
// let NumeroDos = 6;
// let Resultado = NumeroUno + NumeroDos;

// console.log(Resultado);

// let numero = Number(prompt("10"));
// alert(numero+6);

// let nombre = "";
// let saludo = "Hola buenas, ";
// let numero = 2023;
// let numeroUsuario = "";

// nombre = prompt("ingresa tu nombre");
// alert(saludo + nombre);
// numeroUsuario = parseInt(prompt("ingresa tu año de nacimiento"));
// alert(numero - numeroUsuario);


// let edad = Number(prompt("Ingrese la edad"));

// if(edad < 14){
//     alert("No puede entrar a la fiesta")
// }else if (edad < 18) {
//     alert("Puede entrar a la fiesta con un adulto responsable")
// }else {
//     alert("Puedes entrar a la fiesta")
// }

// let edad = Number(prompt("Ingrese su edad, por favor"));
// // let nombre = prompt("Ingrese su nombre")
// // let apellido = prompt("Y su apellido por favor")

// if (edad != ""){
//     alert("Este campo no puede quedar vacio")
// }else if (edad <= 99){
//     alert("Perfecto, gracias por la información")
// }else if(edad >= 100){
//     alert("No puede ingresar una edad que no corresponda a la edad media de una persona")
// }


// for (let turno = i; turno <=7 ; turno++) {
//     let nombre = prompt ("Ingrese su nombre");

//     alert()
// }

// const suma = (x, y) => x + y;
// const resta = (x, y) => x - y;
// const iva = (x) => x * 0.21;

// let precioProducto = Number(prompt("Ingrese el precio del producto"));
// let descuento = Number(prompt("Ingrese el descuento"));

// //precio + iva - descuento
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// // = resta(suma(1000, iva(1000)), 100);
// // = resta(suma(1000, 210), 100);
// // = resta(1210, 100);
// // = 1110
// alert(nuevoPrecio);


/* 
function nombreFuncion(){
    codigo a ejecutar por la funcion
}
*/

// let nombre = prompt("Ingrese su nombre");
// alert(`El nombre ingresado es ${nombre}`); Manera convencional y repetitiva

// function saludar() {
//     console.log("Hola");
// }

// saludar();

// function saludar() {
//     let nombre = prompt("Ingrese su nombre");
//     alert(`El nombre ingresado es ${nombre}`);
// }

// saludar();

// function saludar(saludo, nombre) {
//     console.log(`${saludo} ${nombre}`);
// }

// let nombre = prompt("Ingrese su nombre");
// saludar("Hola", nombre)
// saludar ("Bienvenido", "Gabi");

// class MonitorSamsumg {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }

//     vender() {
//         this.cantidad -= 1; //this.cantidad = this.cantidad - 1
//     }
//     if(cantidad = 0) {
//         console.log("Ya no hay mas productos en stock")
//     }
// }
// const monitor = new MonitorSamsumg("monitor", 1000, 5);
// console.log(monitor);
// monitor.vender();
// console.log(monitor);
// monitor.vender();
// console.log(monitor);
// monitor.vender();
// console.log(monitor);
// monitor.vender();
// console.log(monitor);
// monitor.vender();
// console.log(monitor);
// monitor.vender();


function calcular() {
    let precio = parseFloat(document.getElementById("precio").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    
    if (isNaN(precio) || isNaN(cuotas) || precio <= 0 || cuotas <= 0) {
        alert("Por favor, ingrese valores válidos.");
    }
    
    let iva = precio * 0.21;
    let costoTotalConImpuestos = precio + iva;
    let montoPorCuota = costoTotalConImpuestos / cuotas;

    document.getElementById("costo-total").innerText = costoTotalConImpuestos.toFixed(2);
    document.getElementById("costo-por-cuota").innerText = montoPorCuota.toFixed(2);
}

