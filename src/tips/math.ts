
/**
 * 最大公約数
 * @param x
 * @param y
 * @returns
 */
const gcd = (x: bigint, y: bigint): bigint => {
  // @ts-ignore
  return y == 0 ? x : gcd(y, x % y);
};

/**
 * 最小公倍数
 * @param x
 * @param y
 * @returns
 */
const lcm = (x: bigint, y: bigint): bigint => {
  return (x / gcd(x, y)) * y;
};

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

export { gcd, lcm, BigMath };
