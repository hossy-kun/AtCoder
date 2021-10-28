import * as readline from "readline";

const main = (argss: string[][]) => {
  const H = +argss[0][0];
  const W = +argss[0][1];

  let result = 'Yes';
  for (let i1 = 0; i1 < H; i1++) {
    for (let i2 = i1+1; i2 < H; i2++) {
      for (let j1 = 0; j1 < W; j1++) {
        for (let j2 = j1+1; j2 < W; j2++) {
          const Ai1j1 = +argss[i1+1][j1];
          const Ai2j2 = +argss[i2+1][j2];
          const Ai2j1 = +argss[i2+1][j1];
          const Ai1j2 = +argss[i1+1][j2];
          if (Ai1j1 + Ai2j2 > Ai2j1 + Ai1j2) {
            result = 'No';
          }
        }
      }
    }
  }
  console.log(result);
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
