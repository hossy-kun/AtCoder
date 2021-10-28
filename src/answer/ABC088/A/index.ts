import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A = +argss[1][0];

  const a = N % 500;
  if (a <= A)  {
    console.log('Yes');
  } else {
    console.log('No');
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
