// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split(' ');

lines = [500, 35]

let distancia, combustivel, media;
distancia = parseFloat(lines[0])
combustivel = parseFloat(lines[1])

media = distancia / combustivel

console.log(`${media.toFixed(3)} km/l`)