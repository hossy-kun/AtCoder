import * as readline from "readline";

const array = (m: number, n: number): number[][] => {
  return [...Array(m)].map(() => Array(n).fill(0));
}

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const M = +argss[0][1];

  const x: number[][] = array(N, M);
  const y: number[][] = array(N, M);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const B = +argss[i+1][j];
      x[i][j] = Math.floor((B-1) / 7);
      y[i][j] = (B-1) % 7;
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (0 < i) {
        if (x[i][j] !== x[i-1][j]+1) {
          console.log('No');
          return;
        }
      }
      if (0 < j) {
        if (y[i][j] !== y[i][j-1]+1) {
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
