import * as readline from "readline";

/**
 * BigInt用のMathオブジェクト
 */
const BigMath = {
  abs(x: bigint): bigint {
    if (x < 0n) {
      return -1n * x;
    }
    return x;
  },
  min(base: bigint, ...values: bigint[]): bigint {
    for (const value of values) {
      if (value < base) {
        base = value;
      }
    }
    return base;
  },
  max(base: bigint, ...values: bigint[]): bigint {
    for (const value of values) {
      if (value > base) {
        base = value;
      }
    }
    return base;
  },
  pow(base: bigint, ex: bigint): bigint {
    return base ** ex;
  },
  sign(x: bigint): bigint {
    if (x === 0n) {
      return 0n;
    }
    return x < 0n ? -1n : 1n;
  },
};

const sum = (x: bigint): bigint => {
  return x * (x + 1n) / 2n;
};

const f = (x: bigint): bigint => {
  const s = x.toString();
  const digit = s.length;
  const min = BigInt(BigMath.pow(10n, BigInt(digit-1)));
  return x - min + 1n;
};

const main = (argss: string[][]) => {
  const N = BigInt(argss[0][0]);
  const len = N.toString().length;

  let result = 0n;
  for (let d = 1; d < len; d++) {
    const digMax = BigInt(BigMath.pow(10n, BigInt(d)) - 1n);
    result += sum(f(digMax)) % 998244353n;
  }
  result += sum(f(N)) % 998244353n;

  console.log((result % 998244353n).toString());
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
  main(__lines.map(s => s.split(' ')));
});
