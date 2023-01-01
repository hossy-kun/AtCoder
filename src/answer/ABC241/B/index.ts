import * as readline from "readline";

const main = (argss: string[][]) => {
  const [N, M] = argss[0].map(Number);
  const A = argss[1].map(Number);
  const B = argss[2].map(Number);

  const AA: number[] = [];
  for (let n = 0; n < N; n++) {
    if (!AA[A[n]]) {
      AA[A[n]] = 0;
    }
    AA[A[n]]++;
  }

  for (let m = 0; m < M; m++) {
    if (!AA[B[m]]) {
      answer('No');
      return;
    } else {
      AA[B[m]]--;
    }
  }

  answer('Yes');
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

const answer = (v: number | string | bigint) => {
  if (v !== null && v !== undefined) {
    console.log(v.toString());
  } else {
    console.log(v);
  }
};
