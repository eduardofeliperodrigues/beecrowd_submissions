// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = [3];
let raio, pi = 3.14159, volume;

raio = parseFloat(lines.shift())
volume = (4/3) * pi * Math.pow(raio, 3)

console.log('VOLUME =',volume.toFixed(3))
