import * as readline from 'readline';

const lowerBound = <T>(list: T[], value: T): number => {
  let r = list.length;
  let l = -1;
  while (1 < r - l) {
    const mid = l + Math.floor((r - l) / 2);
    if (list[mid] >= value) {
      r = mid;
    } else {
      l = mid;
    }
  }
  return r;
};

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const A = argss[1].map(Number).sort((a, b) => a - b);
  const Q = +argss[2][0];

  const results: number[] = [];
  for (let q = 0; q < Q; q++) {
    const b = +argss[3+q][0];
    const idx = lowerBound(A, b);
    if (idx === 0) {
      results.push(Math.abs(A[idx] - b));
    } else if (idx === N) {
      results.push(Math.abs(A[idx-1] - b));
    } else if (0 < idx) {
      results.push(Math.min(Math.abs(A[idx-1] - b), Math.abs(A[idx] - b)));
    }
  }
  return answer(results.join('\n'));
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
