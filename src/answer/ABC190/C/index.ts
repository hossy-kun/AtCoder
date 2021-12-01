import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const M = +argss[0][1];
  const cond: number[][] = [];
  for (let m = 0; m < M; m++) {
    cond.push(argss[1+m].map(Number));
  }
  const K = +argss[1+M][0];
  const choice: number[][] = [];
  for (let k = 0; k < K; k++) {
    choice.push(argss[1+M+1+k].map(Number));
  }

  let max = 0;
  for (let bit = 0; bit < (1 << K); bit++) {
    const ball = generateArray(N, false);
    choice.forEach(([C, D], i) => {
      ball[bit & 1 << i ? C : D] = true;
    });
    const cnt = cond.filter(([A, B]) => ball[A] && ball[B]).length;
    if (max < cnt) {
      max = cnt;
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
