// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = [25,100,5.50]
let numero, horas, salarioHora, salarioTotal;

numero = lines[0];
horas = lines[1];
salarioHora = lines[2];

salarioTotal = horas * salarioHora
console.log('NUMBER =', numero);
console.log('SALARY = U$', salarioTotal.toFixed(2))