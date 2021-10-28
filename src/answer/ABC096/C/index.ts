import * as readline from "readline";

const generateGrid = (argss: string[][]): string[][] => {
  // 1行目はグリッド情報行
  const H = +argss[0][0];
  const W = +argss[0][1];
  const skip = 1;

  const g: string[][] = [];
  for (let h = 0; h < H; h++) {
    g.push([]);
    g[h] = argss[h+skip][0].split('').slice(0, W);
  }
  return g;
};

const countRound4 = (g: string[][], cy: number, cx: number, c: string) => {
  let count = 0;
  const DIR4 = [
    { y: -1, x:  0 }, // UP
    { y:  0, x: -1 }, // LEFT
    { y:  0, x:  1 }, // RIGHT
    { y:  1, x:  0 }, // DOWN
  ];
  DIR4.forEach((p) => {
    const py = cy + p.y;
    const px = cx + p.x;

    // 範囲内チェック
    const Y = g.length;
    const X = g[0].length;
    if (py < 0 || Y <= py || px < 0 || X <= px) {
      return;
    }
    // カウント
    if (g[py][px] === c) {
      count++;
    }
  });

  return count;
};

const main = (argss: string[][]) => {
  const H = +argss[0][0];
  const W = +argss[0][1];

  const g: string[][] = generateGrid(argss);

  for (let h = 0; h < H; h++) {
    for (let w = 0; w < W; w++) {
      const c = g[h][w];
      if (c === '#') {
        if (0 === countRound4(g, h, w, '#')) {
          console.log('No');
          return;
        }
      }
    }
  }

  console.log('Yes');
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
