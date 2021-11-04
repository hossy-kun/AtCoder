import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];

  let t = 1n;
  let a = 1n;
  for (let n = 0; n < N; n++) {
    const T = BigInt(argss[n+1][0]);
    const A = BigInt(argss[n+1][1]);
    let k = 0n;
    if (t/T > a/A) {
      k = (t-1n)/T + 1n;
    } else {
      k = (a-1n)/A + 1n;
    }
    t = T * k;
    a = A * k;
  }
  console.log((t+a).toString());
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
