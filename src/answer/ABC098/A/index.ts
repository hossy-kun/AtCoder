import * as readline from "readline";

const main = (argss: string[][]) => {
  const A = +argss[0][0];
  const B = +argss[0][1];

  const add = A + B;
  const sub = A - B;
  const mul = A * B;
  console.log(Math.max(add, sub, mul)+0);
};

// ----------------------------------------------------------------------------
// Template

const __lines: string[] = [];
const __reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

__reader.on('line', (line) => {
  __lines.push(line);
});
__reader.on('close', () => {
  main(__lines.map(s => s.split(' ')));
});
