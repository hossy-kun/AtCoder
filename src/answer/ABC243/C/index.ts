import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const PR = new Map<number, number>();
  const PL = new Map<number, number>();
  const S = argss[1+N][0];
  for (let n = 0; n < N; n++) {
    const [x, y] = argss[1+n].map(Number);
    if (S.charAt(n) === 'R') {
      const v = PR.has(y) ? Math.min(PR.get(y)!, x) : x;
      PR.set(y, v);
    } else {
      const v = PL.has(y) ? Math.max(PL.get(y)!, x) : x;
      PL.set(y, v);
    }
  }

  for (let [k, r] of PR) {
    if (PL.has(k)) {
      const l = PL.get(k)!;
      if (r < l) {
        return answer('Yes');
      }
    }
  }

  return answer('No');
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
