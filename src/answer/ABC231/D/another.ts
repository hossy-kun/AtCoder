import * as readline from "readline";

class UnionFind {
  private list: number[];

  constructor(n: number) {
    this.list = new Array<number>(n).fill(-1);
  }

  find(n: number): number {
    const path = [];
    while (true) {
      if (this.list[n] < 0) {
        break;
      }
      path.push(n);
      n = this.list[n];
    }
    path.forEach((node) => {
      this.list[node] = n;
    });
    return n;
  }

  isSame(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }

  unite(a: number, b: number) {
    a = this.find(a);
    b = this.find(b);
    if (a === b) {
      return;
    }
    if (a > b) {
      [a, b] = [b, a];
    }
    this.list[a] += this.list[b];
    this.list[b] = a;
  }

  unionSize(n: number): number {
    return -this.list[this.find(n)];
  }
}

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const M = +argss[0][1];
  const list = new Array<number>(N).fill(0);

  const uf = new UnionFind(N);
  for (let m = 0; m < M; m++) {
    let [A, B] = argss[1+m].map((v) => +v - 1);

    if (uf.isSame(A, B)) {
      console.log('No');
      return;
    }

    uf.unite(A, B);
    list[A]++;
    list[B]++;
  }

  const ng = list.find((n) => 2 < n);
  console.log(!!ng ? 'No' : 'Yes');
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
