import * as readline from 'readline';

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};
const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const C = generate2DArray(2, N, 0);

  for (let n = 0; n < N; n++) {
    const [c, p] = argss[1+n].map(Number);
    C[c-1][n] = p;
  }

  const sum1 = generateArray(1+N, 0);
  const sum2 = generateArray(1+N, 0);
  for (let n = 1; n <= N; n++) {
    sum1[n] = sum1[n-1] + C[0][n-1];
    sum2[n] = sum2[n-1] + C[1][n-1];
  }

  const Q = +argss[1+N][0];
  const results: number[][] = [];
  for (let q = 0; q < Q; q++) {
    const [l, r] = argss[1+N+1+q].map(Number);
    const a = sum1[r] - sum1[l-1];
    const b = sum2[r] - sum2[l-1];
    results.push([a, b]);
  }
  return answerll(results);
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
