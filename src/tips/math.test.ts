import { gcd, lcm } from "./math";

describe('math', () => {
  it('gcd', () => {
    expect(gcd(BigInt(12), BigInt(18))).toEqual(BigInt(6));
  });
  it('lcm', () => {
    expect(lcm(BigInt(2), BigInt(3))).toEqual(BigInt(6));
  });
});
