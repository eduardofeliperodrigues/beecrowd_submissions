const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('', (answer) => {
  let a = parseInt(answer);
  rl.question('', (answer1) => {
    let b = parseInt(answer1);
    let soma = a + b
    console.log('SOMA =', soma)
    rl.close()
  })
})