import * as readline from "readline";

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
const upperBound = <T>(list: T[], value: T): number => {
  let r = list.length;
  let l = -1;
  while (1 < r - l) {
    const mid = l + Math.floor((r - l) / 2);
    if (list[mid] > value) {
      r = mid;
    } else {
      l = mid;
    }
  }
  return r;
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A = argss[1].map(Number).sort((a, b) => a - b);
  const B = argss[2].map(Number).sort((a, b) => a - b);
  const C = argss[3].map(Number).sort((a, b) => a - b);

  let sum = 0;
  for (let j = 0; j < N; j++) {
    const t = B[j];
    const aCount = lowerBound(A, t);
    const cCount = N - upperBound(C, t);
    sum += aCount * cCount;
  }

  console.log(sum);
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
