import * as readline from "readline";

interface Point {
  x: bigint;
  y: bigint;
}

const check = (a: Point, b: Point, c: Point): boolean => {
  const dx1 = b.x - a.x;
  const dy1 = b.y - a.y;
  const dx2 = c.x - a.x;
  const dy2 = c.y - a.y;
  return dy1 * dx2 === dy2 * dx1;
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  // 3点が、１直線上に並んだとき、面積が正にならない
  const p: Point[] = [];
  for (let n = 0; n < N; n++) {
    const [x, y] = argss[n+1];
    p.push({ x: BigInt(x), y: BigInt(y) });
  }
  let count = 0;
  for (let a = 0; a < N; a++) {
    for (let b = a+1; b < N; b++) {
      for (let c = b+1; c < N; c++) {
        if (check(p[a], p[b], p[c])) {
          continue;
        }
        count++;
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
