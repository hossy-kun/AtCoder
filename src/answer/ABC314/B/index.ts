import * as readline from 'readline';

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};
const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const M = generate2DArray(100, 37, false);
  const CC = generateArray(100, 0);
  for (let n = 0; n < N; n++) {
    const C = +argss[1+n*2][0];
    for (let c = 0; c < C; c++) {
      const A = +argss[2+n*2][c];
      M[n][A] = true;
    }
    CC[n] = C;
  }
  const X = +argss[1+2*N][0];

  let count = 37;
  let results: number[] = [];
  for (let n = 0; n < N; n++) {
    if (M[n][X]) {
      if (CC[n] === count) {
        count = CC[n];
        results.push(n+1);
      }
      if (CC[n] < count) {
        count = CC[n];
        results = [n+1]
      }
    }
  }

  results.sort((a, b) => a - b);
  console.log(results.length);
  console.log(results.join(' '));
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
