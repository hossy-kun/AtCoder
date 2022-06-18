import * as readline from "readline";

const main = (argss: string[][]) => {
  const X = BigInt(argss[0][0]);
  if (0n < X) {
    console.log((X / 10n).toString());
  } else {
    if (X % 10n === 0n) {
      console.log((X / 10n).toString());
    } else {
      console.log((X / 10n - 1n).toString());
    }
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
