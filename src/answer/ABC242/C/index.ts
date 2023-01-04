import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const MOD = 998244353;

  const dp = generate2DArray(N+1, 11, 0);

  for (let i = 1; i <= 9; i++) {
    dp[1][i]++;
  }
  for (let n = 2; n <= N; n++) {
    for (let i = 1; i <= 9; i++) {
      dp[n][i] = (dp[n-1][i-1] + dp[n-1][i] + dp[n-1][i+1]) % MOD;
    }
  }

  return answer(dp[N].reduce((a, b) => a + b) % MOD);
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

const answer = (v: number | string | bigint) => {
  if (v !== null && v !== undefined) {
    console.log(v.toString());
  } else {
    console.log(v);
  }
};
