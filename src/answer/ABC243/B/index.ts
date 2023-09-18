import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const A = argss[1].map(Number);
  const B = argss[2].map(Number);

  const set = new Set<number>(A.concat(B));
  let r1 = 0;
  for (let n = 0; n < N; n++) {
    if (A[n] === B[n]) {
      r1++;
    }
  }
  const r2 = (2 * N) - set.size - r1

  return answerl([r1, r2]);
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
  if (v === undefined || v === null) {
    return '';
  }
  return v.toString();
};
const answerl = (v: (number | string | bigint)[], separator = '\n'): string => {
  if (v === undefined || v === null) {
    return '';
  }
  return v.join(separator);
};
const answerll = (v: (number | string | bigint)[][], separators: string[] = [' ', '\n']): string => {
  if (v === undefined || v === null) {
    return '';
  }
  return v.map(l => l.join(separators[0])).join(separators[1]);
};
