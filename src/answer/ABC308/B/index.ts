import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const [N, M] = argss[0].map(Number);
  const C = argss[1];
  const D = argss[2];
  const P = argss[3].map(Number);

  const price = new Map<string, number>();
  for (let m = 0; m < M; m++) {
    const c = D[m];
    const p = P[1+m];
    price.set(c, p);
  }

  let sum = 0;
  for (let n = 0; n < N; n++) {
    let p = price.get(C[n]);
    if (p === undefined) {
      p = P[0];
    }
    sum += p;
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
