import * as readline from "readline";

class PriorityQueue<T> {
  private heap: T[];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.heap = [];
    this.comparator = comparator;
  }

  push(item: T) {
    this.heap.push(item);

    let i = this.heap.length - 1;
    while (0 < i) {
      const p = this.parentIndex(i);
      if (this.comparator(this.heap[p], this.heap[i]) < 0) {
        break;
      }
      this.swap(i, p);
      i = p;
    }
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.swap(0, this.heap.length - 1);
    const item = this.heap.pop();

    let current = 0;
    while (true) {
      const left = this.leftChildIndex(current);
      const right = this.rightChildIndex(current);

      if (!this.inRange(left)) {
        break;
      }
      let lower = left;
      if (this.inRange(right)) {
        if (this.comparator(this.heap[right], this.heap[left]) < 0) {
          lower = right;
        }
      }
      if (this.comparator(this.heap[lower], this.heap[current]) > 0) {
        break;
      }

      this.swap(current, lower);
      current = lower;
    }

    return item;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  size(): number {
    return this.heap.length;
  }

  private swap(a: number, b: number) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private inRange(index: number): boolean {
    return 0 <= index && index < this.heap.length;
  }
}

class Node {
  value = -1;
  inNodeNum = 0;
  outNodeList: Node[] = [];

  constructor(value: number) {
    this.value = value;
    this.inNodeNum = 0;
    this.outNodeList = [];
  }
}

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const M = +argss[0][1];

  // 有向グラフに変換する
  const nodeList: Node[] = new Array(N+1);
  for (let n = 1; n <= N; n++) {
    nodeList[n] = new Node(n);
  }
  for (let m = 0; m < M; m++) {
    const A = +argss[m+1][0];
    const B = +argss[m+1][1];
    nodeList[A].outNodeList.push(nodeList[B]);
    nodeList[B].inNodeNum++;
  }

  const result: number[] = [];

  const queue = new PriorityQueue<Node>((a, b) => a.value - b.value);
  nodeList.filter(n => n && n.inNodeNum === 0).forEach((n) => {
    queue.push(n);
  });
  while (!queue.isEmpty()) {
    const node = queue.pop();
    if (node) {
      node.outNodeList.forEach((out) => {
        out.inNodeNum--;
        if (out.inNodeNum === 0) {
          queue.push(out);
        }
      });
      result.push(node.value)
    }
  }

  if (result.length !== N) {
    console.log(-1);
  } else {
    console.log(result.join(' '));
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
