import * as readline from "readline";

const main = (argss: string[][]) => {
  const [N, K] = argss[0].map(Number);
  const P = argss[1].map(Number);
  const ans: number[] = [];

  const q = new PriorityQueue<number>((a, b) => a - b);
  for (let k = 0; k < K; k++) {
    q.push(P[k]);
  }
  ans.push(q.top()!);

  for (let n = K; n < N; n++) {
    if (q.top()! < P[n]) {
      q.pop();
      q.push(P[n]);
    }
    ans.push(q.top()!);
  }
  console.log(ans.join('\n'));
};

export class PriorityQueue<T> {
  public heap: T[];
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

  top(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.heap[0];
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    // ツリー構造を保つため、先頭と末尾を入れ替え先頭だった要素を取り除く
    this.swap(0, this.heap.length - 1);
    const item = this.heap.pop();

    // ツリーを優先度に基づいて再構築する
    let current = 0;
    while (true) {
      const left = this.leftChildIndex(current);
      const right = this.rightChildIndex(current);

      // 左の子がいなければ、子はいないので完了
      if (!this.inRange(left)) {
        break;
      }
      // 優先度がより低い子を取得する
      let lower = left;
      if (this.inRange(right)) {
        if (this.comparator(this.heap[right], this.heap[left]) < 0) {
          lower = right;
        }
      }
      // 親の方が優先度が高くなったら完了
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
