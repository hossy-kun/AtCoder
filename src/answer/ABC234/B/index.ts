import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const list = new Array<number[]>(N);

  for (let n = 0; n < N; n++) {
    list[n] = argss[n+1].map(Number);
  }

  let maxLL = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      const x = list[j][0] - list[i][0];
      const y = list[j][1] - list[i][1];
      const ll = x * x + y * y;
      if (maxLL < ll) {
        maxLL = ll;
      }
    }
  }

  console.log(Math.sqrt(maxLL));
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
