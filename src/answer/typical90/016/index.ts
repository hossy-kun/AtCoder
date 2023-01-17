import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const [A, B, C] = argss[1].map(Number);

  let count = Number.MAX_SAFE_INTEGER;
  for (let a = 0; a < 10000; a++) {
    for (let b = 0; b < 10000 - a; b++) {
      const r = N - (A*a + B*b);
      if (0 <= r && r % C === 0) {
        const c = r / C;
        count = Math.min(count, a + b + c);
      }
    }
  }

  return answer(count);
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
