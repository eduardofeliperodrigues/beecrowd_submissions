// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = [10 , 85]

let kml = 12, horas, kmh, resultado
horas = parseFloat(lines[0])
kmh = parseFloat(lines[1])

resultado = horas * kmh / kml

console.log(resultado.toFixed(3))