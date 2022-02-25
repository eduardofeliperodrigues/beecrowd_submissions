const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A, B;

rl.question('', (answer) => {
  A = answer
  rl.question('', (answer2) => {
    B = answer2
    console.log('X =', Number(A) + Number(B));
    rl.close()
  })
})

