// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let p1, p2, distancia;
p1 = lines[0].split(' ')
p2 = lines[1].split(' ')

distancia = Math.sqrt(Math.pow(Number(p2[0]) - Number(p1[0]), 2) + Math.pow(Number(p2[1]) - Number(p1[1]), 2))
console.log(distancia.toFixed(4))
