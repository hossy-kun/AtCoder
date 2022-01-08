import * as readline from "readline";

const insertSort = (list: number[], val: number) => {
  let ok = list.length;
  let ng = -1;
  while (ok - ng > 1) {
    const mid = Math.floor((ok + ng) / 2);
    if (val > list[mid]) {
      ok = mid;
    } else {
      ng = mid;
    }
  }
  list.splice(ok, 0, val);
};

const main = (argss: string[][]) => {
  const [N, K] = argss[0].map(Number);
  const P = argss[1].map(Number);

  const ans: number[] = [];
  let pp = [];
  for (let k = 0; k < K-1; k++) {
    pp.push(P[k]);
  }
  pp.sort((a, b) => b - a);

  for (let n = K-1; n < N; n++) {
    insertSort(pp, P[n]);
    ans.push(pp[K-1]);
  }

  console.log(ans.join('\n'));
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
