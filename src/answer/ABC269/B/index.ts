import * as readline from "readline";

const main = (argss: string[][]) => {
  let A = 0, B = 0, C = 0, D = 0;
  for (let y = 0; y < 10; y++) {
    const line = argss[y][0].split('');
    for (let x = 0; x < 10; x++) {
      const c = line[x];

      if (c === '#') {
        if (A === 0) {
          A = y + 1;
        }
        B = y + 1;

        if (C === 0) {
          C = x + 1;
        }
        D = x + 1;
      }
    }
  }
  console.log(A, B);
  console.log(C, D);
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
