import * as readline from "readline";

const main = (argss: string[][]) => {
  const K = BigInt(argss[0][0]);

  let a = K.toString(2);
  console.log(a.replace(new RegExp('1', 'g'), '2'));
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
