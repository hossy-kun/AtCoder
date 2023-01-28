import * as readline from 'readline';

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const check = (a: string, b: string) => {
  if (a === '?' || b === '?') {
    return true;
  }
  return a === b;
};

const main = (argss: string[][]): string => {
  const S = argss[0][0].split('');
  const T = argss[1][0].split('');
  const sl = S.length;
  const tl = T.length;

  const results = generateArray(tl+1, true);

  let skips = false;
  for (let n = 0; n <= tl; n++) {
    if (skips) {
      results[n] = false;
      continue;
    }
    if (0 < n && !check(S[n-1], T[n-1])) {
      results[n] = false;
      skips = true;
    }
  }

  let skipe = false;
  for (let n = tl; 0 <= n; n--) {
    if (skipe) {
      results[n] = false;
      continue;
    }
    if (0 < tl - n && !check(S[sl - (tl - n)], T[tl - (tl - n)])) {
      results[n] = false;
      skipe = true;
    }
  }

  return answerl(results.map((b) => b ? 'Yes' : 'No'));
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
