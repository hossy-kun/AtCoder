import * as readline from "readline";

const main = (argss: string[][]) => {
  const S = argss[0][0];
  const [a, b] = argss[1].map(Number);

  const ary = S.split('');
  const temp = ary[a-1];
  ary[a-1] = ary[b-1];
  ary[b-1] = temp;

  console.log(ary.join(''));
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
