import * as readline from "readline";

const main = (argss: string[][]) => {
  const A = argss[0].map(Number);
  const set = new Set(A);
  console.log(set.size);
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
