import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const K = +argss[0][1];
  const A = +argss[0][2];

  const ans = (A + K - 1) % N;
  console.log(ans !== 0 ? ans : N);
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
