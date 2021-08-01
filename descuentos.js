// 'use strict';

// const { result } = require("lodash");

// const precioInicialSinDescuento = 210;

// const descuentoARealizar = 15;

// const precioConDescuento = precioInicialSinDescuento - ((descuentoARealizar * precioInicialSinDescuento) / 100)

// console.log({
//     precioInicialSinDescuento,
//     descuentoARealizar,
//     precioConDescuento,
// })


function obtenerDescuento(precio, descuento) {
    const precioConDescuento = precio - ((descuento * precio) / 100)
    // alert(precioConDescuento)
    return precioConDescuento
}

const btnPrecio = document.getElementById("button-calculo")

btnPrecio.addEventListener('click', function CalcularObtenerDescuento(params) {

    const result = document.getElementById("result-discount")
    
    const data = document.getElementById("input-precio")
    const value1 =  data.value
    const data2 = document.getElementById("input-descuento")
    const value2 = data2.value
    let descuentoObtenido = obtenerDescuento(value1, value2)
    result.innerHTML = `${descuentoObtenido}`
})


