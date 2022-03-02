// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = [140153]

let horas, minutos, segundos, valor, diferenca;
valor = parseInt(lines[0])

diferenca = valor % 3600
horas = (valor - diferenca) / 3600
valor = valor - (horas * 3600)

diferenca = valor % 60
minutos = (valor - diferenca) / 60
valor = valor - (minutos * 60)

segundos = valor

console.log(`${horas}:${minutos}:${segundos}`)