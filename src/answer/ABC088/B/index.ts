import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A = argss[1].map(v => +v).sort((a, b) => b - a);

  const alice = A.filter((_, i) => i % 2 === 0).reduce((p, c) => p + c);
  const bob = A.filter((_, i) => i % 2 === 1).reduce((p, c) => p + c);

  console.log(alice - bob);
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

