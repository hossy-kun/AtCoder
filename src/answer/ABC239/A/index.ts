import * as readline from "readline";

const main = (argss: string[][]) => {
  const H = +argss[0][0];
  console.log(Math.sqrt(H * (12800000 + H)));
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
