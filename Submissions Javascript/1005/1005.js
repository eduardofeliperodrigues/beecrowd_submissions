const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('', (answer) => {
  let a = parseFloat(answer);
  rl.question('', (answer) => {
    let b = parseFloat(answer);
    let mean = ((a * 3.5) + (b * 7.5) ) / 11
    console.log('MEDIA = ' + mean.toFixed(5))
    rl.close()
  })
})