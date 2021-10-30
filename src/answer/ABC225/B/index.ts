import * as readline from "readline";

const count = (map: Map<number, number>, k: number) => {
  if (map.has(k)) {
    const v = map.get(k) || 0;
    map.set(k, v+1);
  } else {
    map.set(k, 1);
  }
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const map = new Map<number, number>();

  for (let n = 0; n < N-1; n++) {
    const a = +argss[n + 1][0];
    const b = +argss[n + 1][1];
    count(map, a);
    count(map, b);
  }

  let star = false;
  map.forEach((v) => {
    if (v === N - 1) {
      star = true;
      return false;
    }
  });

  if (star) {
    console.log('Yes');
  } else {
    console.log('No');
  }
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
