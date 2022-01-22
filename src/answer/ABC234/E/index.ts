import * as readline from "readline";

const generateArithmeticProgression = (n: number): Set<bigint> => {
  const res = new Set<bigint>();
  for (let f = 1; f <= 9; f++) {
    for (let d = -9; d <= 8; d++) {
      const s: number[] = [];
      let dg = f;
      for (let i = 0; i < n; i++) {
        s.push(dg);
        res.add(BigInt(s.join('')))
        dg += d;
        if (!(0 <= dg && dg <= 9)) {
          break;
        }
      }
    }
  }
  return res;
};

const binarySearch = <T>(list: T[], cond: (val: T) => boolean) => {
  let ok = list.length;
  let ng = -1;
  while (ok - ng > 1) {
    const mid = Math.floor((ok + ng) / 2);
    if (cond(list[mid])) {
      ok = mid;
    } else {
      ng = mid;
    }
  }
  return ok;
};

const main = (argss: string[][]) => {
  const X = BigInt(argss[0][0]);

  const ap = Array.from(generateArithmeticProgression(18));
  ap.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
  const i = binarySearch(ap, (a) => X <= a)
  console.log(ap[ap.length-1].toString());

  console.log(ap[i].toString());
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
