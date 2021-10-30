import * as readline from "readline";

const main = (argss: string[][]) => {
  const S = argss[0][0];
  const s = new Set(S.split(''));
  if (s.size === 3) {
    console.log(6);
  } else if (s.size === 2) {
    console.log(3);
  } else {
    console.log(1);
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
