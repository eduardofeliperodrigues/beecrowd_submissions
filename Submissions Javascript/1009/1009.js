// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = ['JOAO',500.00,1230.30]
let nome, salarioFixo, vendas, salarioTotal;

nome = lines[0];
salarioFixo = parseFloat(lines[1]);
vendas = parseFloat(lines[2]);

salarioTotal = (vendas * 0.15) + salarioFixo
console.log('TOTAL = R$', salarioTotal.toFixed(2))