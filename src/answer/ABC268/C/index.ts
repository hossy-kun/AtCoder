import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const P = argss[1].map(Number);
  const cnt = generateArray(N, 0);

  for (let n = 0; n < N; n++) {
    for (let m = 0; m < 3; m++) {
      cnt[(P[n] + (m - 1) - n + N) % N]++;
    }
  }

  let max = 0;
  for (let n = 0; n < N; n++) {
    max = Math.max(max, cnt[n]);
  }
  console.log(max);
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
