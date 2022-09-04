import * as readline from "readline";

const main = (argss: string[][]) => {
  const [A, B] = argss[0].map(v => Number(v) - 1);
  const n = (A + 1 + 10) % 10;
  const p = (A - 1 + 10) % 10;

  if (n === B || p === B) {
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
