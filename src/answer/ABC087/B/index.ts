import * as readline from "readline";

const check = (a: number, b: number, c: number, x: number): boolean => {
  return 500 * a + 100 * b + 50 * c === x;
}

const main = (argss: string[][]) => {
  const A = +argss[0][0];
  const B = +argss[1][0];
  const C = +argss[2][0];
  const X = +argss[3][0];

  let count = 0;
  for (let a = 0; a <= A; a++) {
    for (let b = 0; b <= B; b++) {
      for (let c = 0; c <= C; c++) {
        if (check(a, b, c, X)) {
          count++;
        }
      }
    }
  }
  console.log(count);
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
