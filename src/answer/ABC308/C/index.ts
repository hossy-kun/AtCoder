import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const N = +argss[0][0];

  const list: { i: number, A: number, B: number }[] = [];
  for (let n = 0; n < N; n++) {
    let [A, B] = argss[n+1].map(Number);
    list.push({ i: n+1, A, B });
  }

  list.sort((a, b) => {
    const av = BigInt(a.A) * BigInt(b.A + b.B);
    const bv = BigInt(b.A) * BigInt(a.A + a.B);
    if (av === bv) {
      return a.i - b.i;
    }
    if (av < bv) {
      return 1;
    } else {
      return -1;
    }
  })

  return answerl(list.map((v) => v.i), ' ');
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
