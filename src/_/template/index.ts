import * as readline from "readline";

const main = (argss: string[][]) => {
  // <in>
  // N
  // A B
  const N = +argss[0][0];
  const [A, B] = argss[1].map(Number);
  answer(N * (A + B));
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
