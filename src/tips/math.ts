
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

export { gcd, lcm };
