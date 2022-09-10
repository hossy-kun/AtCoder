import * as readline from "readline";

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

const binarySearch = <T>(list: T[], target: T, comparator: (a: T, b: T) => number) => {
  let idx = -1;
  let l = 0;
  let r = list.length - 1;
  while (0 <= r - l) {
    const mid = Math.floor((l + r) / 2);
    const comp = comparator(list[mid], target);
    if (comp === 0) {
      idx = mid;
      break;
    } else if (comp < 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return [idx, l, r]
};

const dfs = (str: string, S: string[], p: number[], cur: number, remain: number, results: string[]) => {

  if (remain < 0) {
    return;
  }

  if (cur === S.length) {
    results.push(str);
    return;
  }

  if (0 < str.length && str.charAt(str.length - 1) !== '_') {
    dfs(str + '_', S, p, cur, remain, results);

  } else {
    dfs(str + S[p[cur]], S, p, cur+1, remain, results);

    if (0 < cur) {
      // append remaining underscore
      dfs(str + '_', S, p, cur, remain-1, results);
    }
  }
};

const main = (argss: string[][]) => {
  const [N, M] = argss[0].map(Number);
  const S: string[] = [];
  const T: string[] = [];
  const p: number[] = [];
  let remain = 16;

  for (let n = 0; n < N; n++) {
    p.push(n);
    const str = argss[1+n][0];
    S.push(str);
    remain -= str.length;
  }
  remain -= N - 1;

  for (let m = 0; m < M; m++) {
    T.push(argss[1+N+m][0]);
  }
  T.sort((a, b) => a.localeCompare(b));

  do {
    const results: string[] = [];
    dfs('', S, p, 0, remain, results);
    const f = results.find((res) => {
      const result = binarySearch(T, res, (a, b) => a.localeCompare(b));
      return 3 <= res.length && result[0] === -1;
    });
    if (f) {
      console.log(f);
      return;
    }
  } while (nextPermutation(p));

  console.log(-1);
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
