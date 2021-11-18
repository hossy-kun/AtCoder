import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];

  let count = 0;
  for (let a = 1; a*a*a <= N; a++) {
    for (let b = a; a*b*b <= N; b++) {
      count += Math.floor(N / (a*b)) - b + 1;
    }
  }

  console.log(count.toString());
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
