import * as readline from 'readline';

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const nextPermutation = (arr: number[]): boolean => {
  const len = arr.length;
  for (let i = len - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      for (let j = len - 1; j > i; j--) {
        if (arr[j] > arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          const l = (len - (i + 1)) >> 1;
          for (let k = 0; k < l; k++) {
            [arr[i + 1 + k], arr[len - 1 - k]] = [arr[len - 1 - k], arr[i + 1 + k]];
          }
          return true;
        }
      }
    }
  }
  return false;
}

const sequentialNumbers = (size: number, start = 0): number[] => {
  return [...Array(size)].map((_, i) => i + start);
};

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const A = generate2DArray(N, N, 0);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      A[i][j] = +argss[1+i][j];
    }
  }
  const M = +argss[1+N][0];
  const B = generate2DArray(N, N, false);
  for (let i = 0; i < M; i++) {
    const [X, Y] = argss[1+N+1+i].map(Number);
    B[X-1][Y-1] = true;
    B[Y-1][X-1] = true;
  }

  const P = sequentialNumbers(N);
  let min = Number.MAX_SAFE_INTEGER;
  do {
    let exp = 0;
    let ok = true;
    for (let n = 0; n < P.length; n++) {
      if (0 < n) {
        const X = P[n-1];
        const Y = P[n];
        if (B[X][Y]) {
          ok = false;
          break;
        }
      }
      exp += A[P[n]][n];
    }
    if (ok) {
      min = Math.min(min, exp);
    }
  } while (nextPermutation(P));

  if (min === Number.MAX_SAFE_INTEGER) {
    return answer(-1);
  }
  return answer(min);
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
