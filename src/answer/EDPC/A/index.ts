import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const h = argss[1].map(Number);

  const dp = generateArray(N, Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let n = 1; n < N; n++) {
    dp[n] = Math.min(dp[n], dp[n-1] + Math.abs(h[n] - h[n-1]));
    if (1 < n) {
      dp[n] = Math.min(dp[n], dp[n-2] + Math.abs(h[n] - h[n-2]));
    }
  }

  console.log(dp[N-1]);
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
