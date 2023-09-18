import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const X = BigInt(argss[0][1]);
  const S = argss[1][0];

  const T = new Array<string>();
  for (let n = 0; n < N; n++) {
    const last = 0 < T.length ? T[T.length-1] : undefined;
    if (S[n] === 'U' && (last === 'L' || last === 'R')) {
      T.pop();
    } else {
      T.push(S[n]);
    }
  }

  let ans = X;
  for (let c of T) {
    if (c === 'U') {
      ans /= 2n;
    } else if (c === 'L') {
      ans *= 2n;
    } else if (c === 'R') {
      ans = ans * 2n + 1n;
    }
  }

  return answer(ans);
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
