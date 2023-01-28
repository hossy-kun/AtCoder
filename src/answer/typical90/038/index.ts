import * as readline from 'readline';

const gcd = (x: bigint, y: bigint): bigint => {
  return y === 0n ? x : gcd(y, x % y);
};

const lcm = (x: bigint, y: bigint): bigint => {
  return (x / gcd(x, y)) * y;
};

const main = (argss: string[][]): string => {
  const [A, B] = argss[0].map(BigInt);
  const result = lcm(A, B);
  if (1000000000000000000n < result) {
    return answer('Large');
  }
  return answer(result);
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
