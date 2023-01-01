import * as readline from "readline";

const main = (argss: string[][]) => {
  const A = argss[0].map(Number);
  let k = 0;
  for (let n = 0; n < 3; n++) {
    k = A[k];
  }
  answer(k);
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
