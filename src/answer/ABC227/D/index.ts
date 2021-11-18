import * as readline from "readline";

const abs = (v: bigint): bigint => {
  if (0 < v) {
    return v;
  } else {
    return -v;
  }
};

const min = (a: bigint, b: bigint): bigint => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

const isOk = (K: bigint, A: bigint[], pj: bigint): boolean => {
  let count = 0n;
  A.forEach((a) => count += min(pj, a));
  return count >= pj * K;
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const K = BigInt(argss[0][1]);
  let A = argss[1].map(BigInt);

  let ok = 0n;
  let ng = 10n**18n;
  while (abs(ok - ng) > 1) {
    const mid = (ok + ng) / 2n;
    if (isOk(K, A, mid)) {
      ok = mid;
    } else {
      ng = mid;
    }
  }
  console.log(ok.toString());
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
