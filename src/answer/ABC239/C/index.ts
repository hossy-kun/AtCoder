import * as readline from "readline";

const main = (argss: string[][]) => {
  const x1 = +argss[0][0];
  const y1 = +argss[0][1];
  const x2 = +argss[0][2];
  const y2 = +argss[0][3];

  const dx: number[] = [ 1, 1, 2, 2,-1,-1,-2,-2];
  const dy: number[] = [ 2,-2, 1,-1, 2,-2, 1,-1];

  let ok = false;
  for (let n = 0; n < 8; n++) {
    const x = x1 + dx[n];
    const y = y1 + dy[n];
    for (let n = 0; n < 8; n++) {
      const xx = x + dx[n];
      const yy = y + dy[n];
      if (xx === x2 && yy === y2) {
        ok = true;
      }
    }
  }
  console.log(ok ? 'Yes' : 'No');
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
