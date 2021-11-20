import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const K = +argss[0][1];

  const list: number[] = [];
  for (let n = 0; n < N; n++) {
    const total = argss[1+n].map(Number).reduce((p, c) => p + c);
    list.push(total);
  }

  const sample = list.slice().sort((a, b) => b - a)[K-1];

  list.forEach((v) => {
    if (sample > v + 300) {
      console.log('No');
    } else {
      console.log('Yes');
    }
  });
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
