import * as readline from "readline";

const main = (argss: string[][]) => {
  const T = +argss[0][0];

  for (let t = 0; t < T; t++) {
    const a = BigInt(argss[t+1][0]);
    const s = BigInt(argss[t+1][1]);

    let ok = false;
    if (2n * a <= s) {
      const v = s - 2n * a;
      if ((v & a) === 0n) {
        ok = true;
      }
    }
    console.log(ok ? 'Yes' : 'No');
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
