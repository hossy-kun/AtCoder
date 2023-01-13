import * as readline from 'readline';

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};
const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]): string => {
  const [H, W] = argss[0].map(Number);

  const hh = generateArray(H, 0);
  const ww = generateArray(W, 0);
  for (let h = 0; h < H; h++) {
    for (let w = 0; w < W; w++) {
      const v = +argss[1+h][w];
      hh[h] += v;
      ww[w] += v;
    }
  }
  const m = generate2DArray(H, W, 0);
  for (let h = 0; h < H; h++) {
    for (let w = 0; w < W; w++) {
      const v = +argss[1+h][w];
      m[h][w] = hh[h] + ww[w] - v;
    }
  }

  return answer(m.map(l => l.join(' ')).join('\n'));
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
  const a = main(__lines.map(s => s.split(' ')));
  console.log(a);
});

const answer = (v: number | string | bigint): string => {
  if (v !== null && v !== undefined) {
    return v.toString();
  } else {
    return v;
  }
};
