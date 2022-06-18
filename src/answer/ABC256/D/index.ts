import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const list: { v: number, LR: number }[] = [];

  for (let n = 0; n < N; n++) {
    const [L, R] = argss[n+1].map(Number);
    list.push({
      v: L,
      LR: 0,
    });
    list.push({
      v: R,
      LR: 1,
    });
  }

  list.sort((a, b) => {
    let exp = a.v - b.v;
    if (exp === 0) {
      exp = a.LR - b.LR;
    }
    return exp;
  });

  let result = '';
  let count = 0;
  for (let n = 0; n < list.length; n++) {
    const { v, LR } = list[n];
    if (LR === 0) {
      if (count === 0) {
        result += v + ' ';
      }
      count++;
    } else {
      count--;
      if (count === 0) {
        result += v + '\n';
      }
    }
  }

  console.log(result);
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
