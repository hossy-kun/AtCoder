import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const K = BigInt(argss[0][1]);
  const A = argss[1].map(BigInt);

  const sum = generateArray<bigint>(N+1, 0n);
  for (let n = 0; n < N; n++) {
    sum[n+1] = sum[n] + A[n];
  }
  console.log(sum);

  const map = new Map<string, bigint>();
  let count = 0n;
  for (let n = 0; n < N; n++) {
    const key = sum[n].toString();
    map.set(key, (map.get(key) || 0n) + 1n);

    const key2 = (sum[n+1] - K).toString();
    count += map.get(key2) || 0n;
  }

  console.log(count.toString());
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
