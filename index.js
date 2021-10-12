const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function convert(base, x) {
  let i = x;
  for (i; i > 10; i++) {
    i % 10;
  }
  console.log(i);
}

rl.question(
  "Input base (Supports any natural number): ",
  function saveInput(base) {
    console.log(`His name is ${base}`);
    rl.close();
  }
);

// Main thing
while (true) {
  // let base = prompt("Input base (Supports any natural number): ");
  // let operation = prompt("Input operation (Supports: + - * /): ");
  // let a = prompt("Input a (Supports any whole number): ");
  // let b = prompt("Input b (Supports any whole number): ");
  // convert(base, a);
  //convert(base, b);
  // operate(operation, a, b);
  // deconvert(base, a);
  // deconvert(base, b);
}
