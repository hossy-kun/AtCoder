import * as readline from "readline";

const sumDigit = (n: number): number => {
  return n.toString().split('')
          .map(v => +v)
          .reduce((p, c) => p + c);
}

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A = +argss[0][1];
  const B = +argss[0][2];

  let total = 0;
  for (let n = 1; n <= N; n++) {
    const sum = sumDigit(n);
    if (A <= sum && sum <= B) {
      total += n;
    }
  }
  console.log(total);
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
