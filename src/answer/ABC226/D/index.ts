import * as readline from "readline";

const gcd = (x: number, y: number): number => {
  // @ts-ignore
  return y == 0 ? x : gcd(y, x % y);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const set = new Set<string>();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) {
        continue;
      }

      // i -> j
      const ix = +argss[i+1][0];
      const iy = +argss[i+1][1];
      const jx = +argss[j+1][0];
      const jy = +argss[j+1][1];

      const dx = jx - ix;
      const dy = jy - iy;
      const d = gcd(dx, dy);

      set.add([dx/d,dy/d].toString());
    }
  }
  console.log(set.size * 2);
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
