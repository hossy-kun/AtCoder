
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

export {
  UnionFind,
};
