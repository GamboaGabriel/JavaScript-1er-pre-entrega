function calcular() {
    let precio = parseFloat(document.getElementById("precio").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    let aplicarDescuento = document.getElementById("descuento").value.toLowerCase() === 'si';
    
    if (isNaN(precio) || isNaN(cuotas) || precio <= 0 || cuotas <= 0) {
        alert("Por favor, ingrese valores válidos.");
    }
    
    let descuento = aplicarDescuento ? precio * 0.20 : 0;
    let precioConDescuento = precio - descuento;
    let iva = precioConDescuento * 0.21;
    let costoTotalConImpuestos = precioConDescuento + iva;
    let montoPorCuota = costoTotalConImpuestos / cuotas;

    document.getElementById("costo-total").innerText = costoTotalConImpuestos.toFixed(2);
    document.getElementById("costo-por-cuota").innerText = montoPorCuota.toFixed(2);

    
}

