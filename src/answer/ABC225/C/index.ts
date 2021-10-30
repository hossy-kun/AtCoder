import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const M = +argss[0][1];

  const sample = +argss[1][0];
  const j = (sample-1) % 7;

  if (7 <= j + M - 1) {
    console.log('No');
    return;
  }

  for (let n = 1; n <= N; n++) {
    for (let m = 1; m <= M; m++) {
      const B = +argss[n][m-1];

      if (1 < m) {
        const left = +argss[n][m-1-1];
        if (left + 1 !== B) {
          console.log('No');
          return;
        }
      }
      if (1 < n) {
        const up = +argss[n-1][m-1];
        if (up + 7 !== B) {
          console.log('No');
          return;
        }
      }
    }
  }
  console.log('Yes');
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
