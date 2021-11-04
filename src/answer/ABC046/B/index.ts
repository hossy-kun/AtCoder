import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const K = +argss[0][1];

  const v = K * Math.pow(K-1, N-1);
  console.log(v);
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
