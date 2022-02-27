// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = [5,6,7,8]
let a, b, c, d, diferenca;

a = lines[0];
b = lines[1];
c = lines[2];
d = lines[3];

diferenca = (a * b - c * d)
console.log('DIFERENCA =', diferenca)
