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


// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.
// Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

function alturaDeTrianguloIsoseles(lado1, base) {
    const altura = Math.sqrt((lado1**2)-((base/2)**2));
    return altura
}

// console.groupEnd()

// Aquí interactuamos con el HTML

// Cuadrados

function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);
    const perimeto = perimetroCuadrado(value);
    alert(perimeto);
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);
    const area = areaDelCuadrado(value);
    alert(area);
}

// Triangulos

function calcularPerimetroTriangulo(params) {
    const input1 = document.getElementById("InputLadoTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputLadoTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputBaseTriangulo");
    const value3 = parseInt(input3.value);
    const perimetro = perimetroDelTriangulo(value1,value2,value3)
    alert(perimetro);
}

function calcularAreaTriangulo(params) {
    const input1 = document.getElementById("InputBaseTriangulo");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputAlturaTriangulo");
    const value2 = parseInt(input2.value);
    const area = areaDelTriangulo(value1,value2)
    alert(area);
}

function calcularAlturaTriangulo(params) {
    const input1 = document.getElementById("InputLadoTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputLadoTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputBaseTriangulo");
    const value3 = parseInt(input3.value);

    if (value1 == value2) {
        alert("El triangulo es isoseles")
        const altura = alturaDeTrianguloIsoseles(value1,value3)
        alert(altura);    
    } else {
        alert("El triangulo no es isoseles debe intentar nuevamente.")
    }

    
}

// Circunferencias


function calcularDiametroCirculo(params) {
    const input = document.getElementById("InputRadioCirculo")
    const value = parseInt(input.value)
    const diametro = diametroCirculo(value)
    alert(diametro)
}

function calcularPerimetroCirculo(params) {
    const input = document.getElementById("InputRadioCirculo")
    const value = parseInt(input.value)
    const perimeto = perimetroCirculo(value)
    alert(perimeto)
}

function calcularAreaCirculo(params) {
    const input = document.getElementById("InputRadioCirculo")
    const value = parseInt(input.value)
    const area = areaDelCirculo(value)
    alert(area)
}
