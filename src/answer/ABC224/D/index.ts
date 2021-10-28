import * as readline from "readline";

class Node {
  value: number = -1;
  nodes: Set<number> = new Set();

  constructor(value: number) {
    this.value = value;
    this.nodes = new Set();
  }
}


const swap = (str: number[], idx1: number, idx2: number) => {
  const tmp = str[idx1];
  str[idx1] = str[idx2];
  str[idx2] = tmp;
};

const main = (argss: string[][]) => {
  const M = +argss[0][0];
  const nodeList: Node[] = new Array(9);
  for (let n = 0; n < 9; n++) {
    nodeList[n] = new Node(n+1);
  }
  for (let m = 0; m < M; m++) {
    const u = +argss[m+1][0];
    const v = +argss[m+1][1];
    nodeList[u-1].nodes.add(v);
    nodeList[v-1].nodes.add(u);
  }
  let state = [9,9,9,9,9,9,9,9,9];
  for (let n = 0; n < 8; n++) {
    const p = +argss[1+M][n];
    state[p-1] = n + 1;
  }

  const map = new Map<string, number>();
  const queue = [state];
  map.set(state.join(''), 0);

  while (0 < queue.length) {
    const ss = <number[]> queue.shift();
    const cnt = <number> map.get(ss.join('')) + 1;
    const i = ss.indexOf(9);

    nodeList[i].nodes.forEach((c) => {
      const tt = Array.from(ss);
      swap(tt, i, c-1);

      const t = tt.join('');
      if (!map.has(t)) {
        map.set(t, cnt);
        queue.push(tt);
      }
    });
  }

  if (!map.has('123456789')) {
    console.log('-1');
  } else {
    console.log(map.get('123456789'));
  }
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
