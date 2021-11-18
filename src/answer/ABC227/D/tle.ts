import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const K = +argss[0][1];
  let A = argss[1].map(Number);

  let count = 0;
  while (true) {
    A = A.sort((a, b) => b - a);

    let bk = false;
    for (let k = 0; k < K; k++) {
      if (A[k] === 0) {
        bk = true;
        break;
      } else {
        A[k]--;
      }
    }
    if (bk) {
      break;
    }
    count++;
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
