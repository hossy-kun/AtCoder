import * as readline from "readline";

const check = (s: number): boolean => {
  for (let a = 1; a <= 200; a++) {
    for (let b = 1; b <= 200; b++) {
      const S = 4*a*b + 3*a + 3*b;

      if (S === s) {
        return true;
      }
    }
  }
  return false;
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const S = argss[1].map(Number);

  let count = 0;
  for (let n = 0; n < N; n++) {
    if (!check(S[n])) {
      count++;
    }
  }
  console.log(count);
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
