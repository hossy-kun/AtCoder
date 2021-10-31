import * as readline from "readline";

const main = (argss: string[][]) => {
  const A = +argss[0][0];
  const B = +argss[0][1];
  const C = +argss[0][2];
  const D = +argss[0][3];

  if (D <= A || B <= C) {
    console.log(0);
    return;
  }

  const a = Math.max(A, C);
  const b = Math.min(B, D);

  console.log(b-a);
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
