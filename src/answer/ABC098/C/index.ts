import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const S = argss[1][0];

  let countLeftW = new Array(N);
  let cw = 0;
  for (let n = 0; n < N; n++) {
    countLeftW[n] = cw;
    if (S.charAt(n) === 'W') {
      cw++;
    }
  }

  let countRightE = new Array(N);
  let ce = 0;
  for (let n = N-1; n >= 0; n--) {
    countRightE[n] = ce;
    if (S.charAt(n) === 'E') {
      ce++;
    }
  }

  let count = N;
  for (let n = 0; n < N; n++) {
    if (count > countRightE[n] + countLeftW[n]) {
      count = countRightE[n] + countLeftW[n]
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
