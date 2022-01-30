import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const [H, W] = argss[0].map(Number);
  const ary = generate2DArray(H, W, 0);

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      ary[i][j] = +argss[1+i][j];
    }
  }

  const ary2 = generate2DArray(W, H, 0);
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      ary2[j][i] = ary[i][j];
    }
  }

  for (let i = 0; i < W; i++) {
    const t = ary2[i].join(' ');
    console.log(t);
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
