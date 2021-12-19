import * as readline from "readline";

const main = (argss: string[][]) => {
  const S = argss[0][0];
  const ss = S.split('x');
  console.log(+ss[0] * +ss[1]);
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
