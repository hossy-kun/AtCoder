import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const W = BigInt(argss[0][1]);
  const cheese = [];
  for (let n = 0; n < N; n++) {
    cheese.push(argss[n+1].map(BigInt));
  }
  cheese.sort((a, b) => Number(b[0]) - Number(a[0]));

  let w = 0n;
  let oishisa = 0n;
  for (let n = 0; n < N; n++) {
    const c = cheese[n];
    if (W < w + c[1]) {
      const g = W - w;
      oishisa = oishisa + c[0] * g;
      break;
    } else {
      w = w + c[1];
      oishisa = oishisa + c[0] * c[1];
    }
  }
  console.log(oishisa.toString());
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
