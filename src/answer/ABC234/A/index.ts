import * as readline from "readline";

const f = (x: number) => {
  return (x * x) + (2 * x) + 3;
};

const main = (argss: string[][]) => {
  const t = +argss[0][0];

  console.log(f(f(f(t) + t) + f(f(t))));

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
