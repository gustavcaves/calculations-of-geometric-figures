//* Código del cuadrado
const perimetroCuadrado = (lado: number): number => {
return lado * 4;
}

const areaCuadrado = (lado: number): number => {
return Math.pow(lado, 2);
}

//*Código del triángulo
const perimetroTriangulo = (lado1: number, lado2: number, base: number): number => {
return lado1 + lado2 + base;
}

const areaTriangulo = (base: number, altura: number): number =>{
return (base*altura) / 2;
}

//* Código del círculo
const perimetroCirculo = (diametro: number): number => {
return Math.pow(Math.PI, 2) * diametro;
}

const areaCirculo = (radio: number): number => {
return Math.PI * Math.pow(radio, 2);
}