import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const set = new Set(argss[1].map(Number));
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
