import * as readline from "readline";

// bit全探索
const main = (argss: string[][]) => {
  const [N, W] = argss[0].map(Number);
  const a = argss[1].map(Number);

  let exists = false;
  for (let bit = 0; bit < (1 << N); bit++) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (bit & (1 << i)) {
        sum += a[i];
      }
    }
    if (sum === W) {
      exists = true;
      break;
    }
  }

  console.log(exists ? 'Yes' : 'No');
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
