import * as readline from "readline";

const main = (argss: string[][]) => {
  const C = argss.map(ary => ary.map(v => +v));

  if (C[0][0] - C[0][1] === C[1][0] - C[1][1] && C[1][0] - C[1][1] === C[2][0] - C[2][1]) {
    if (C[0][1] - C[0][2] === C[1][1] - C[1][2] && C[1][1] - C[1][2] === C[2][1] - C[2][2]) {
      if (C[0][2] - C[0][0] === C[1][2] - C[1][0] && C[1][2] - C[1][0] === C[2][2] - C[2][0]) {
        console.log('Yes');
        return;
      }
    }
  }
  console.log('No');
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

