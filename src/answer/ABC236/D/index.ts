import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};
const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const calc = (N: number, map: bigint[][], used: boolean[], pair: Array<{f: number, s: number}>) => {

  if (pair.length === N) {
    let exp = 0n;
    pair.forEach((p) => {
      exp ^= map[p.f][p.s];
    });
    return exp;
  }

  let f = 0;
  for (let i = 0; i < 2*N; i++) {
    if (!used[i]) {
      f = i;
      used[f] = true;
      break;
    }
  }

  let result = 0n;
  for (let s = 0; s < 2*N; s++) {
    if (!used[s]) {
      pair.push({f, s});
      used[s] = true;

      const exp = calc(N, map, used, pair);
      if (result < exp) {
        result = exp;
      }

      pair.pop();
      used[s] = false;
    }
  }

  used[f] = false;
  return result;
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const map = generate2DArray(2*N, 2*N, 0n);

  for (let i = 0; i < 2*N-1; i++) {
    for (let j = i+1; j < 2*N; j++) {
      map[i][j] = BigInt(argss[1+i][j-i-1]);
    }
  }

  const used = generateArray(2*N, false);
  const pair = new Array<{f: number, s: number}>();

  const result = calc(N, map, used, pair);
  console.log(result.toString());
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
