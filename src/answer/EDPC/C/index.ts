import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const [A, B, C] = [0, 1, 2];
  const ABC = new Array<number[]>();
  for (let n = 0; n < N; n++) {
    ABC.push(argss[1+n].map(Number));
  }

  const dp = generate2DArray(N, 3, 0);
  dp[0] = ABC[0];
  for (let n = 1; n < N; n++) {
    dp[n][A] = Math.max(dp[n-1][B] + ABC[n][A], dp[n-1][C] + ABC[n][A]);
    dp[n][B] = Math.max(dp[n-1][A] + ABC[n][B], dp[n-1][C] + ABC[n][B]);
    dp[n][C] = Math.max(dp[n-1][A] + ABC[n][C], dp[n-1][B] + ABC[n][C]);
  }

  console.log(Math.max(...dp[N-1]));
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
