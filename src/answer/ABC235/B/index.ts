import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const H = argss[1].map(Number);

  let c = H[0];
  for (let n = 1; n < N; n++) {
    if (c < H[n]) {
      c = H[n];
    } else {
      break;
    }
  }
  console.log(c);
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
