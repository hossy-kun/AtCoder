import * as readline from "readline";

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

const main = (argss: string[][]) => {
  const [N, M] = argss[0].map(Number);

  const x = generate2DArray(N, N, false);
  const y = generate2DArray(N, N, false);

  for (let m = 0; m < M; m++) {
    const [A, B] = argss[m+1].map(v => +v-1);
    x[A][B] = x[B][A] = true;
  }
  for (let m = 0; m < M; m++) {
    const [C, D] = argss[m+M+1].map(v => +v-1);
    y[C][D] = y[D][C] = true;
  }

  const p = [...Array(N)].map((_, i) => i);
  do {
    let ok = true;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (x[i][j] !== y[p[i]][p[j]]) {
          ok = false;
        }
      }
    }
    if (ok) {
      console.log('Yes');
      return;
    }
  } while (nextPermutation(p));

  console.log('No');
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
