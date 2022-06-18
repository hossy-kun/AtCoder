import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A = argss[1].map(Number);
  const math = [0,0,0,0];
  let p = 0;

  for (let n = 0; n < N; n++) {
    math[0] = 1;
    const a = A[n];
    for (let m = 3; 0 <= m; m--) {
      if (math[m] === 1) {
        if (4 <= m + a) {
          p++;
        } else {
          math[m+a] = 1;
        }
        math[m] = 0;
      }
    }
  }

  console.log(p);
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
