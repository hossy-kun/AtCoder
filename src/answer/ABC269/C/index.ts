import * as readline from "readline";

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

const main = (argss: string[][]) => {
  const N = BigInt(argss[0][0]).toString(2);
  const list: number[] = [];
  for (let n = 0; n < N.length; n++) {
    if (N.charAt(N.length - 1 - n) === '1') {
      list.push(n);
    }
  }
  for (let bit = 0; bit < (1 << list.length); bit++) {
    let sum = 0n;
    for (let i = 0; i < list.length; i++) {
      if (bit & (1 << i)) {
        sum += BigMath.pow(2n, BigInt(list[i]));
      }
    }
    console.log(sum.toString());
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
  main(__lines.map(s => s.split(' ')));
});
