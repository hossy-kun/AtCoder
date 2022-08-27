import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = BigInt(argss[0][0]);
  let x = N - 998244353n;
  x = x % 998244353n;
  if (x < 0) {
    console.log((998244353n + x).toString());
  } else {
    console.log(x.toString());
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
