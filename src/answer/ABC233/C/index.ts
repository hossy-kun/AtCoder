import * as readline from "readline";

const select = (a: bigint[][], idx: number, setList: bigint[][], set: bigint[]) => {
  if (a.length === idx) {
    setList.push(set);
    set = [];
    return;
  }
  a[idx].forEach((v) => {
    const s = set.slice()
    s.push(v);
    select(a, idx+1, setList, s);
  });
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const X = BigInt(argss[0][1]);
  const a: bigint[][] = [];

  for (let n = 0; n < N; n++) {
    const [L, ...aa] = argss[n+1].map(BigInt);
    a.push(aa);
  }

  const setList: bigint[][] = [];
  select(a, 0, setList, []);

  let count = 0;
  setList.forEach((set) => {
    let seki = 1n;
    for (let l = 0; l < set.length; l++) {
      seki *= set[l];
      if (X < seki) {
        break;
      }
    }
    if (seki === X) {
      count++;
    }
  });
  console.log(count);

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
