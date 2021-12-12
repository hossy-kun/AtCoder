import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const Q = +argss[0][1];
  const A = argss[1].map(Number);
  A.sort((a, b) => a - b);

  for (let q = 0; q < Q; q++) {
    const x = +argss[2+q][0];

    let ok = A.length;
    let ng = -1;
    while (ok - ng > 1) {
      const mid = Math.floor((ok+ng) / 2);

      if (x <= A[mid]) {
        ok = mid;
      } else {
        ng = mid;
      }
    }
    console.log(A.length - ok);
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
