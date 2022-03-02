// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = [1257]

let valor, diferenca, cem, cinquenta, vinte, dez, cinco, dois, um;

valor = parseInt(lines[0])

diferenca = valor % 100;
cem = (valor - diferenca) / 100
valor = valor - (cem * 100)

diferenca = valor % 50
cinquenta = (valor - diferenca) / 50
valor = valor - (cinquenta * 50)

diferenca = valor % 20
vinte = (valor - diferenca) / 20
valor = valor - (vinte * 20)

diferenca = valor % 10
dez = (valor - diferenca) / 10
valor = valor - (dez * 10)

diferenca = valor % 5
cinco = (valor - diferenca) / 5
valor = valor - (cinco * 5)

diferenca = valor % 2
dois = (valor - diferenca) / 2
valor = valor - (dois * 2)

diferenca = valor % 1
um = (valor - diferenca) / 1
valor = valor - (valor * 1)

console.log(lines[0])
console.log(`${cem} nota(s) de R$ 100,00`)
console.log(`${cinquenta} nota(s) de R$ 50,00`)
console.log(`${vinte} nota(s) de R$ 20,00`)
console.log(`${dez} nota(s) de R$ 10,00`)
console.log(`${cinco} nota(s) de R$ 5,00`)
console.log(`${dois} nota(s) de R$ 2,00`)
console.log(`${um} nota(s) de R$ 1,00`)