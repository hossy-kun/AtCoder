import * as readline from "readline";

const main = (argss: string[][]) => {
  const S = argss[0][0];
  const K = +argss[1][0];
  const n = S.length;
  const a = S.split('').map(c => c === '.' ? 1 : 0);

  let ans = 0;
  let r = 0;
  let sum = 0;
  for (let l = 0; l < n; l++) {
    while (r < n && sum + a[r] <= K) {
      sum += a[r];
      ++r;
    }
    ans = Math.max(ans, r-l);
    sum -= a[l];
  }

  console.log(ans);
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
