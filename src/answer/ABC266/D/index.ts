import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};
const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const MT = 100000;
  const MX = 5;

  const dp = generate2DArray(MT+1, MX, 0);
  dp[0] = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  let p = 0;
  for (let t = 1; t <= MT; t++) {
    const [T, X, A] = p < N ? argss[p+1].map(Number) : [-1, -1, -1];
    for (let x = 0; x < MX; x++) {
      let value = 0;
      if (T === t && x === X) {
        value = A;
      }
      if (x === 0) {
        dp[t][x] = Math.max(dp[t-1][x], dp[t-1][x+1]) + value;
      } else if (x === 4) {
        dp[t][x] = Math.max(dp[t-1][x-1], dp[t-1][x]) + value;
      } else {
        dp[t][x] = Math.max(dp[t-1][x-1], dp[t-1][x], dp[t-1][x+1]) + value;
      }
    }

    if (T === t) {
      p++;
    }
  }

  console.log(Math.max(...dp[MT]));
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
