var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a, b, c, pi = 3.14159, triangulo, circulo, trapezio, quadrado, retangulo;
a = parseFloat(lines[0])
b = parseFloat(lines[1])
c = parseFloat(lines[2])
triangulo = (a * c) / 2;
circulo = pi * (c * c);
trapezio = ((a + b) * c ) / 2;
quadrado = b * b;
retangulo = a * b;

console.log('TRIANGULO:', triangulo.toFixed(3))
console.log('CIRCULO:', circulo.toFixed(3))
console.log('TRAPEZIO:', trapezio.toFixed(3))
console.log('QUADRADO:', quadrado.toFixed(3))
console.log('RETANGULO:', retangulo.toFixed(3))