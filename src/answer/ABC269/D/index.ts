import * as readline from "readline";

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

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
  const x = generateArray(N, 0);
  const y = generateArray(N, 0);
  const dx = [-1,-1, 0, 0, 1, 1];
  const dy = [-1, 0,-1, 1, 0, 1];

  const uf = new UnionFind(N+1);
  // range: -1000 ~ 1000
  // mergin: -5 ~ 5
  const grid = generate2DArray(2010, 2010, -1);
  for (let n = 0; n < N; n++) {
    const [sx, sy] = argss[1+n].map(Number);
    x[n] = sx + 1005;
    y[n] = sy + 1005;
    grid[x[n]][y[n]] = n;
  }
  for (let n = 0; n < N; n++) {
    for (let d = 0; d < 6; d++) {
      const fx = x[n] + dx[d];
      const fy = y[n] + dy[d];
      const square = grid[fx][fy];
      if (square !== -1) {
        uf.unite(n, square);
      }
    }
  }

  let count = 0;
  for (let n = 0; n < N; n++) {
    // 自分自身がルートの数を数える
    if (uf.find(n) === n) {
      count++;
    }
  }
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
