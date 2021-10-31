import * as readline from "readline";

const gcd = (x: bigint, y: bigint): bigint => {
  // @ts-ignore
  return y == 0 ? x : gcd(y, x % y);
};

const lcm = (x: bigint, y: bigint): bigint => {
  return (x / gcd(x, y)) * y;
};

const lcmArray = (...ary: bigint[]): bigint => {
  let l = ary[0];
  for (let i = 1; i < ary.length; i++) {
    l = lcm(l, ary[i]);
  }
  return l;
}

const main = (argss: string[][]) => {
  const N = +argss[0][0];

  const ary = new Array<bigint>();
  for (let n = 0; n < N; n++) {
    const T = argss[n+1][0];
    ary.push(BigInt(T));
  }
  console.log(String(lcmArray(...ary)));
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
