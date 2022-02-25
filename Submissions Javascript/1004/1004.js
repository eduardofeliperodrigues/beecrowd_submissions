const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('', (answer) => {
  let a = answer;
  rl.question('', (answer) => {
    let b = answer;
    let prod = a * b
    console.log('PROD =', prod)
    rl.close()
  })
})