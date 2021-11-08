import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  let cost = 0;
  const stack: number[] = [N];
  const list = new Set<number>();
  while (0 < stack.length) {
    const idx = <number> stack.pop();
    const T = +argss[idx][0];
    cost += T;
    const K = +argss[idx][1];
    for (let k = 0; k < K; k++) {
      const A = +argss[idx][k+2];
      if (!list.has(A)) {
        stack.push(A);
        list.add(A);
      }
    }
  }
  console.log(cost);
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
