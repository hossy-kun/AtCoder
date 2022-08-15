import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const P = argss[1].map(Number);
  const MAX = P.reduce((p, c) => p + c);

  const dp = generate2DArray(N+1, MAX+1, 0);
  dp[0][0] = 1;

  for (let n = 0; n < N; n++) {
    const p = P[n];
    for (let m = 0; m <= MAX; m++) {
      if (dp[n][m] === 1) {
        dp[n+1][m] = 1;
        dp[n+1][m+p] = 1;
      }
    }
  }

  console.log(dp[N].filter((f) => f === 1).length);
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
