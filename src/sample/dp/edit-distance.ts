import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

// DP(編集距離)
const main = (argss: string[][]) => {
  const S = argss[0][0];
  const T = argss[1][0];

  const dp = generate2DArray(S.length+1, T.length+1, Number.MAX_SAFE_INTEGER);
  dp[0][0] = 0;

  for (let s = 0; s <= S.length; s++) {
    for (let t = 0; t <= T.length; t++) {
      // 変更
      if (0 < s && 0 < t) {
        if (S[s-1] === T[t-1]) {
          dp[s][t] = Math.min(dp[s][t], dp[s-1][t-1]);
        } else {
          dp[s][t] = Math.min(dp[s][t], dp[s-1][t-1] + 1);
        }
      }
      // 削除
      if (0 < s) {
        dp[s][t] = Math.min(dp[s][t], dp[s-1][t] + 1);
      }
      // 追加
      if (0 < t) {
        dp[s][t] = Math.min(dp[s][t], dp[s][t-1] + 1);
      }
    }
  }

  console.log(dp[S.length][T.length]);
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
