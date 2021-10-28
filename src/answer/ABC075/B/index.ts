import * as readline from "readline";

const count8 = (g: string[][], h: number, w: number) => {
  let count = 0;
  for (let y = -1; y < 2; y++) {
    for (let x = -1; x < 2; x++) {
      const py = h + y;
      const px = w + x;
      if (y === 0 && x === 0) {
        continue;
      }
      if (py < 0 || px < 0 || g.length <= py || g[0].length <= px) {
        continue;
      }
      if (g[py][px] === '#') {
        count++;
      }
    }
  }
  return count;
};

const main = (argss: string[][]) => {
  const H = +argss[0][0];
  const W = +argss[0][1];

  const g: string[][] = [];
  for (let h = 0; h < H; h++) {
    g.push([]);
    const cc = argss[h+1][0].split('');
    for (let w = 0; w < W; w++) {
      g[h].push(cc[w]);
    }
  }

  for (let h = 0; h < H; h++) {
    for (let w = 0; w < W; w++) {
      const c = g[h][w];
      if (c === '#') {
        continue;
      }
      g[h][w] = String(count8(g, h, w));
    }
  }

  for (let h = 0; h < H; h++) {
    console.log(g[h].join(''));
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
