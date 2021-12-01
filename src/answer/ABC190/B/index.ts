import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const S = +argss[0][1];
  const D = +argss[0][2];

  let damage = 0;
  for (let n = 0; n < N; n++) {
    const X = +argss[1+n][0];
    const Y = +argss[1+n][1];
    if (S <= X) {
      continue;
    }
    if (Y <= D) {
      continue;
    }
    damage += Y;
  }

  console.log(0 < damage ? 'Yes' : 'No');
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
