import * as readline from "readline";

const intersection = (arr1: any[], arr2: any[]): any[] => {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  const result: any[] = [];
  setA.forEach((v) => {
    if (setB.has(v)) {
      result.push(v);
    }
  });
  return result;
}

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const S = argss[1][0];

  let max = 0;
  for (let n = 1; n < N; n++) {
    const s = S.slice(0, n).split('')
    const e = S.slice(n   ).split('')

    const count = intersection(s, e).length;
    if (max < count) {
      max = count;
    }
  }

  console.log(max);
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
