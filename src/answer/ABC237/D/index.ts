import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const S = argss[1][0];

  const ary = generateArray(N+1, -1);
  let l = 0;
  let r = N;
  for (let n = 0; n < N; n++) {
    const o = S[n];
    if (o === 'L') {
      ary[r] = n;
      r--;
    } else {
      ary[l] = n;
      l++;
    }
  }
  ary[l] = N;

  console.log(ary.join(' '));
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
