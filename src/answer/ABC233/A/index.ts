import * as readline from "readline";

const main = (argss: string[][]) => {
  const [X, Y] = argss[0].map(Number);
  const rest = Y - X;
  console.log(0 < rest ? Math.ceil(rest / 10) : 0);
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
