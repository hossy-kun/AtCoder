import * as readline from "readline";

const main = (argss: string[][]) => {
  const [L, R] = argss[0].map(Number);
  const S = argss[1][0];

  const a = S.substring(0, L-1);
  const b = S.substring(L-1, R).split('').reverse().join('');
  const c = S.substring(R)

  console.log(a + b + c);
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
