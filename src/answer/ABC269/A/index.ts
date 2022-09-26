import * as readline from "readline";

const main = (argss: string[][]) => {
  const [a,b,c,d] = argss[0].map(Number);
  console.log(((a + b) * (c - d)).toString());
  console.log('Takahashi');
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
