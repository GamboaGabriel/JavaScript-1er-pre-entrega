//Corrección de la escritura de JS en el html //
//Evento para conectar la funcion con el boton//
    document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcularBtn");

    calcularBtn.addEventListener("click", function () {
        calcular();
    });
});


function calcular() {
    let precio = parseFloat(document.getElementById("precio").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    let aplicarDescuento = document.getElementById("descuento").value.toLowerCase() === 'si';
    
    //Si el precio o las cuotas del producto son menores o iguales a "0", se pone en funcionamiento el if //
    if (precio <= 0 || cuotas <= 0) {
        alert("Por favor, ingrese valores válidos.");
    //Si el numero de cuotas excede las 12 cuotas hay otro alert //
    }else if (cuotas > 12){
        alert("Por el momento solo podemos hacer el plan de Hasta 12 cuotas. Disculpe las molestias");
        return;
    }

    if (![3, 6, 12].includes(cuotas)) {
        alert("Solo aceptamos pagos en 3, 6 ó 12 cuotas. Por favor, seleccione una de estas opciones.");
        return;
    }

    
    //Variables
    let descuento = aplicarDescuento ? precio * 0.20 : 0;
    let precioConDescuento = precio - descuento;
    let iva = precioConDescuento * 0.21;
    let costoTotalConImpuestos = precioConDescuento + iva;
    let montoPorCuota = costoTotalConImpuestos / cuotas;

    //Ciclo que se repite si la cuota es igual a 1
    let unaCuota = 1;
    while (unaCuota == cuotas) {
        let montoPorCuota = costoTotalConImpuestos / cuotas;
        alert(`Cuota ${unaCuota}: $${montoPorCuota.toFixed(2)}
${"Se va a cobrar impuestos aunque sea una sola cuota, y no aplica el descuento del 20%. Gracias!!"}`);
        unaCuota++;

    }
    //Evento para mostrar el resultado en numeros con dos decimales
    document.getElementById("costo-total").innerText = costoTotalConImpuestos.toFixed(2);
    document.getElementById("costo-por-cuota").innerText = montoPorCuota.toFixed(2);

    
}

