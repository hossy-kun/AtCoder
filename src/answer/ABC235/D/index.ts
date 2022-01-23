import * as readline from "readline";

const checkMoveTtoB = (v: number) => {
  if (v < 10) {
    return false;
  }
  const s = v.toString();
  if (s[1] === '0') {
    return false;
  }
  return true;
};

const moveTtoB = (v: number): number => {
  const a = v.toString().split('');
  a.push(a.shift()!);
  return Number(a.join(''));
};

const main = (argss: string[][]) => {
  const a = +argss[0][0];
  const N = +argss[0][1];

  const que = [[N, 0]];
  const cache = new Map<number, boolean>();
  let ans = -1;
  while (0 < que.length) {
    const [v, ope] = que.shift()!;
    if (cache.has(v)) {
      continue;
    }
    cache.set(v, true);
    if (v === 1) {
      ans = ope;
      break;
    }
    if (v % a === 0) {
      que.push([v/a, ope+1]);
    }
    if (checkMoveTtoB(v)) {
      const vv = moveTtoB(v)
      if (v !== vv) {
        que.push([vv, ope+1]);
      }
    }
  }
  console.log(ans);
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
