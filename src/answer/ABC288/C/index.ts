import * as readline from 'readline';

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

const main = (argss: string[][]): string => {
  const [N, M] = argss[0].map(Number);
  const uf = new UnionFind(N);

  let del = 0;
  for (let m = 0; m < M; m++) {
    let [A, B] = argss[1+m].map(Number);
    A--; B--;
    if (uf.isSame(A, B)) {
      del++;
    } else {
      uf.unite(A, B);
    }
  }
  return answer(del);
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
  const a = main(__lines.map(s => s.split(' ')));
  console.log(a);
});

const answer = (v: number | string | bigint): string => {
  if (v !== null && v !== undefined) {
    return v.toString();
  } else {
    return v;
  }
};
const answerl = (v: (number | string | bigint)[], separator = '\n'): string => {
  if (v !== null && v !== undefined) {
    return v.join(separator);
  } else {
    return v;
  }
};
const answerll = (v: (number | string | bigint)[][], separators: string[] = [' ', '\n']): string => {
  if (v !== null && v !== undefined) {
    return v.map(l => l.join(separators[0])).join(separators[1]);
  } else {
    return v;
  }
};
