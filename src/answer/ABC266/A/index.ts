import * as readline from "readline";

const main = (argss: string[][]) => {
  const S = argss[0][0];
  const half = ((S.length + 1) / 2) - 1;
  console.log(S.charAt(half));
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
