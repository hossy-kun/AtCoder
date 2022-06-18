import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A = argss[1].map(Number);
  const pieces = generateArray(N+2, -1);
  pieces[0] = 0;
  pieces[N+1] = 360;

  let sumR = 0;
  for (let n = 0; n < N; n++) {
    const r = A[n];
    sumR = (sumR + r) % 360;
    pieces[n+1] = sumR;
  }
  pieces.sort((a, b) => a - b);

  let max = 0;
  for (let n = 1; n < N+2; n++) {
    const r = pieces[n] - pieces[n-1];
    if (max < r) {
      max = r;
    }
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
