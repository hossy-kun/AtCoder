import * as readline from "readline";

const find = (list: Array<number>, idx: number): number => {
  if (list[idx] === idx) {
    return idx;
  } else {
    list[idx] = find(list, list[idx]);
    return list[idx];
  }
};

const main = (argss: string[][]) => {
  const Q = +argss[0][0];
  const N = 2**20;
  const NN = BigInt(N);
  const A = new Array<bigint>(N).fill(-1n);
  const list = Array.from(Array<number>(N).keys());

  const results: bigint[] = [];
  for (let q = 0; q < Q; q++) {
    const t = +argss[1+q][0];
    const x = BigInt(argss[1+q][1]);
    if (t === 1) {
      const i = find(list, Number(x % NN));
      A[i] = x;
      list[i] = find(list, (i+1) % N);
    } else {
      results.push(A[Number(x % NN)]);
    }
  }

  console.log(results.join('\n'));
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
