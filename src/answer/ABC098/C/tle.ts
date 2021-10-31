import * as readline from "readline";

const countLeft = (s: string, end: number, c: string) => {
  let count = 0;
  for (let n = 0; n < end; n++) {
    if (s.charAt(n) === c) {
      count++;
    }
  }
  return count;
};

const countRight = (s: string, start: number, c: string) => {
  let count = 0;
  const N = s.length;
  for (let n = start+1; n < N; n++) {
    if (s.charAt(n) === c) {
      count++;
    }
  }
  return count;
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const S = argss[1][0];

  let count = N;
  for (let n = 0; n < N; n++) {
    const e = countLeft(S, n, 'W');
    const w = countRight(S, n+1, 'E');
    if (count > e + w) {
      count = e + w;
    }
  }

  console.log(count);
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
