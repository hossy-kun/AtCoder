import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const K = +argss[0][1];
  const h = argss[1].map(Number);

  const dp = generateArray(N, Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let n = 1; n < N; n++) {
    for (let i = 0; i < K; i++) {
      const p = n - (i+1);
      if (0 <= p) {
        dp[n] = Math.min(dp[n], dp[p] + Math.abs(h[n] - h[p]));
      }
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
