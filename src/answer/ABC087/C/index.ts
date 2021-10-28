import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A1 = argss[1].map(v => +v);
  const A2 = argss[2].map(v => +v);

  let d1 = A1[0];
  let d2 = A2.reduce((p, c) => p + c, 0);
  let result = d1 + d2;
  for (let n = 1; n < N; n++) {
    d1 += A1[n];
    d2 -= A2[n-1];
    if (result < d1 + d2) {
      result = d1 + d2;
    }
  }

  console.log(result);
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
