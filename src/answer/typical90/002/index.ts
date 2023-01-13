import * as readline from 'readline';

const isPair = (a: string[]): boolean => {
  let count = 0;
  for (let n = 0; n < a.length; n++) {
    const c = a[n];
    if (c === '(') {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
};

const main = (argss: string[][]): string => {
  const N = +argss[0][0];

  if (N % 2 === 0) {
    const ary: string[] = [];
    for (let bit = 0; bit < (1 << N); bit++) {
      const a: string[] = [];
      for (let i = 0; i < N; i++) {
        if (bit & (1 << i)) {
          a.push('(');
        } else {
          a.push(')');
        }
      }
      if (isPair(a)) {
        ary.push(a.join(''));
      }
    }

    return answer(ary.sort((a, b) => a.localeCompare(b)).join('\n'));
  } else {
    return answer('');
  }
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
