import * as readline from "readline";

const main = (argss: string[][]) => {
  let N = +argss[0][0];
  const K = +argss[0][1];

  for (let k = 0; k < K; k++) {
    if (N % 200 === 0) {
      N = N / 200;
    } else {
      N = Number(String(N) + '200');
    }
  }
  console.log(N);
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
