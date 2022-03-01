// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split(' ');

lines = [7, 14, 106]

let a, b, c, maiorAB, maior;
a = parseFloat(lines[0])
b = parseFloat(lines[1])
c = parseFloat(lines[2])

maiorAB = (a+b + Math.abs(a-b)) / 2
maior = (maiorAB+c + Math.abs(maiorAB-c)) / 2

console.log(`${maior} eh o maior`)