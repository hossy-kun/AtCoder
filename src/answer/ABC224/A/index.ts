import * as readline from "readline";

const main = (argss: string[][]) => {
  const S = argss[0][0];
  if (S.substr(-2) === 'er') {
    console.log(S.substr(-2));
  }
  if (S.substr(-3) === 'ist') {
    console.log(S.substr(-3));
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
