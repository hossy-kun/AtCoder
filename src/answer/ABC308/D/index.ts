import * as readline from 'readline';

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]): string => {
  const [H, W] = argss[0].map(Number);
  const SNUKE = 'snuke'.split('');
  const S: string[][] = [];
  const M = generate2DArray(H, W, false);
  for (let h = 0; h < H; h++) {
    S.push(argss[1+h][0].split(''));
  }

  let ok = false;
  let queue: { i: number, h: number, w: number }[] = [];
  queue.push({ i: 0, h: 0, w: 0 });
  M[0][0] = true;
  while (0 < queue.length) {
    const { i, h, w } = queue.pop()!;

    if (S[h][w] !== SNUKE[i%5]) {
      continue;
    }

    M[h][w] = true;
    if (h === H-1 && w === W-1) {
      ok = true;
      break;
    }

    if (0 <= h-1 && M[h-1][w] === false) {
      queue.push({ i: i+1, h: h-1, w: w });
    }
    if (w+1 < W && M[h][w+1] === false) {
      queue.push({ i: i+1, h: h, w: w+1 });
    }
    if (h+1 < H && M[h+1][w] === false) {
      queue.push({ i: i+1, h: h+1, w: w });
    }
    if (0 <= w-1 && M[h][w-1] === false) {
      queue.push({ i: i+1, h: h, w: w-1 });
    }
  }

  return answer(ok ? 'Yes' : 'No');
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
const answerl = (v: (number | string | bigint)[], separator = '\n'): string => {
  if (v !== null && v !== undefined) {
    return v.join(separator);
  } else {
    return v;
  }
};
const answerll = (v: (number | string | bigint)[][], separators: string[] = [' ', '\n']): string => {
  if (v !== null && v !== undefined) {
    return v.map(l => l.join(separators[0])).join(separators[1]);
  } else {
    return v;
  }
};
