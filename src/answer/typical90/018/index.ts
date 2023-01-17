import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const T = +argss[0][0];
  const [L, X, Y] = argss[1].map(Number);
  const Q = +argss[2][0];

  const results: number[] = [];
  for (let q = 0; q < Q; q++) {
    const e = +argss[2+1+q][0];
    const cx = 0;
    const cy = -(L/2) * Math.sin(e/T * 2 * Math.PI);
    const cz = -(L/2) * Math.cos(e/T * 2 * Math.PI) + (L/2);
    const d1 = Math.sqrt((cx - X) * (cx - X) + (cy - Y) * (cy - Y));
    const d2 = cz;
    const r = Math.atan2(d2, d1) * 180 / Math.PI;
    results.push(r);
  }

  return answerl(results);
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
