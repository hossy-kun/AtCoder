import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = BigInt(argss[0][0]);
  if (-2147483648 <= N && N < 2147483648) {
    console.log('Yes');
  } else {
    console.log('No');
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
