import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A = argss[1].map(Number);
  const map = new Map<number, number>();

  A.forEach((v) => {
    if (map.has(v)) {
      map.set(v, map.get(v)! + 1);
    } else {
      map.set(v, 1);
    }
  });

  let card = -1;
  map.forEach((v, k) => {
    if (v === 3) {
      card = k;
    }
  });
  console.log(card);
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
