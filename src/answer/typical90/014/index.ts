import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const A = argss[1].map(Number).sort((a, b) => a - b);
  const B = argss[2].map(Number).sort((a, b) => a - b);

  let sum = 0n;
  for (let n = 0; n < N; n++) {
    sum += BigInt(Math.abs(A[n] - B[n]));
  }

  return answer(sum);
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
