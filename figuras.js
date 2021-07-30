// Cuadrados

// console.group("Cálculos de Cuadrados")

// const ladoCuadrado = 5
// console.log("El lado del cuadrado es: " + ladoCuadrado + " cm")


// Perímetro del cuadrado

// const perimetoDelCupadraro = ladoCuadrado * 4
// console.log("El perímetro del cuadrado es: " + perimetoDelCuadraro + " cm")

function perimetroCuadrado(lado) {
    return lado * 4
}


// const areaDelCuadrado = ladoCuadrado * ladoCuadrado
// console.log("El área del cuadrado es: " + areaDelCuadrado + " cm^2")

function areaDelCuadrado(lado) {
    return lado * lado
}


// console.groupEnd()

// console.group("Cálculos de Triángulos")

// Triángulos

// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4
// const alturaTriangulo = 5.5

// console.log("Los lados del triángulo son: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm," + baseTriangulo + " cm")

// Perímetro del Triangulo

// const perimetroDelTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// console.log("El perímetro del triangulo es: " + perimetroDelTriangulo + " cm")

function perimetroDelTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

// Área del Triangulo

// const areaDelTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log("El área del triangulo es: " + areaDelTriangulo + " cm^2")

function areaDelTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2
}

// console.groupEnd()

// Circunferencias

// console.group("Cálculos de Triángulos")

// PI
// const PI = Math.PI
// console.log("Pi es: " + PI)

// Radio
// const radio = 4
// console.log("El radio ingresao es: " + radio + " cm")

// Diametro
// const diametroCirculo = radio * 2
// console.log("El diámetro del circulo es: " + diametroCirculo + " cm")

function diametroCirculo(radio) {
    return radio * 2
}

// Perímetro de la circunferencia
// const perimetroCirculo = diametroCirculo * PI
// console.log("El perímetro del círculo es: " + perimetroCirculo + " cm")

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * Math.PI
}

// Área de la circunferencia
// const areaDelCirculo = PI * (radio * radio)
// console.log("El área del círculo es: " + areaDelCirculo + " cm^2")

function areaDelCirculo(radio) {
    return (radio * radio) * Math.PI
}

// console.groupEnd()

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimeto = perimetroCuadrado(value);
    alert(perimeto);
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaDelCuadrado(value);
    alert(area);
}