import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const d = argss.splice(1).map(ary => +ary[0]);
  const dd = Array.from(new Set(d));
  console.log(dd.length);
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
