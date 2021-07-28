// Cuadrados

console.group("Cálculos de Cuadrados")

const ladoCuadrado = 5
console.log("El lado del cuadrado es: " + ladoCuadrado + " cm")

// Perímetro del cuadrado

const perimetoDelCuadraro = ladoCuadrado * 4
console.log("El perímetro del cuadrado es: " + perimetoDelCuadraro + " cm")

const areaDelCuadrado = ladoCuadrado * ladoCuadrado
console.log("El área del cuadrado es: " + areaDelCuadrado + " cm^2")


console.groupEnd()

console.group("Cálculos de Triángulos")

// Triángulos

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

console.log("Los lados del triángulo son: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm," + baseTriangulo + " cm")

// Perímetro del Triangulo




const perimetroDelTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perímetro del triangulo es: " + perimetroDelTriangulo + " cm")

// Área del Triangulo

const areaDelTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log("El área del triangulo es: " + areaDelTriangulo + " cm^2")

console.groupEnd()

// Circunferencias

console.group("Cálculos de Triángulos")

// PI
const PI = Math.PI
console.log("Pi es: " + PI)

// Radio
const radio = 4
console.log("El radio ingresao es: " + radio + " cm")

// Diametro
const diametroCirculo = radio * 2
console.log("El diámetro del circulo es: " + diametroCirculo + " cm")

// Perímetro de la circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm")

// Área de la circunferencia
const areaDelCirculo = PI * (radio * radio)
console.log("El área del círculo es: " + areaDelCirculo + " cm^2")

console.groupEnd()
