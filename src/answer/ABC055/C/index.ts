import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const M = +argss[0][1];
  if (N === Math.floor(M/2)) {
    console.log(N);
  }
  if (N < M/2) {
    console.log(N + Math.floor((M-2*N)/4));
  }
  if (N > M/2) {
    console.log(Math.floor(M/2));
  }
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
