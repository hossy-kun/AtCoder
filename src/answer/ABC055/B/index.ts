import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  let power = 1;
  for (let n = 1; n <= N; n++) {
    power = (power * n) % 1000000007;
  }
  console.log(power);
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
