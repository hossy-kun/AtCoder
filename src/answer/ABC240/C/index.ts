import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const [N, X] = argss[0].map(Number);

  const dp = generate2DArray(N+1, 10000 + 1, false);
  dp[0][0] = true;

  for (let n = 1; n <= N; n++) {
    for (let x = 0; x < 10000 + 1; x++) {
      const [a, b] = argss[n].map(Number);

      if (dp[n-1][x] === false) {
        continue;
      }

      if (x + a <= 10000) {
        dp[n][x + a] = true;
      }
      if (x + b <= 10000) {
        dp[n][x + b] = true;
      }
    }
  }

  if (dp[N][X]) {
    console.log('Yes');

  } else {
    console.log('No');

  }
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
