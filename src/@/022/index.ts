import * as readline from 'readline';

const gcd = (x: bigint, y: bigint): bigint => {
  return y === 0n ? x : gcd(y, x % y);
};

const main = (argss: string[][]): string => {
  const [A, B, C] = argss[0].map(BigInt).sort((a, b) => a < b ? -1 : a === b ? 0 : 1);

  const v = gcd(gcd(A, B), C);

  return answer((A / v - 1n) + (B / v - 1n) + (C / v - 1n));
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
