// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = [5,10,10]
let a, b, c, media;

a = lines[0] * 2
b = lines[1] * 3
c = lines[2] * 5

media = (a + b + c) / 10
console.log('MEDIA =', media.toFixed(1))
