import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const [H, W] = argss[0].map(Number);
  const map = generate2DArray(H, W, 0);
  for (let h = 0; h < H; h++) {
    const s = argss[h+1][0].split('');
    for (let w = 0; w < W; w++) {
      map[h][w] = s[w] === '#' ? 1 : 0;
    }
  }

  const cmap = generate2DArray(H, W, 0);

  let max = 1;
  const stack: { x: number, y: number, c: number }[] = [{x: 0, y: 0, c: 1}];
  while (0 < stack.length) {
    const {x, y, c} = stack.pop()!;
    if (cmap[y][x] !== 0) {
      continue;
    }
    cmap[y][x] = c;
    if (max < c) {
      max = c;
      if (max === W+H-1) {
        break;
      }
    }
    if (y+1 < H && map[y+1][x] === 0) {
      stack.push({x: x, y: y+1, c: c+1});
    }
    if (x+1 < W && map[y][x+1] === 0) {
      stack.push({x: x+1, y: y, c: c+1});
    }
  }
  console.log(max);
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
