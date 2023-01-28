import * as readline from 'readline';

class Ling {
  private p = 0;
  private ary: number[] = [];
  private size = 0;

  constructor(ary: number[]) {
    this.ary = ary;
    this.size = ary.length;
  }

  shift(v: number) {
    this.p = this.fix(this.p - v);
  }

  private fix(v: number) {
    if (this.size <= 0) {
      return v;
    }
    while (v < 0) {
      v += this.size;
    }
    return v % this.size;
  }

  at(idx: number) {
    return this.ary[this.fix(idx + this.p)];
  }

  swap(a: number, b: number) {
    const t = this.at(a);
    this.ary[this.fix(a + this.p)] = this.at(b);
    this.ary[this.fix(b + this.p)] = t;
  }
}

const main = (argss: string[][]): string => {
  const [N, Q] = argss[0].map(Number);
  const A = new Ling(argss[1].map(Number));

  const results: number[] = [];
  for (let q = 0; q < Q; q++) {
    let [T, x, y] = argss[2+q].map(Number);
    x--;
    y--;

    if (T === 1) {
      A.swap(x, y);

    } else if (T === 2) {
      A.shift(1);

    } else if (T === 3) {
      results.push(A.at(x));
    }
  }

  return answerl(results);
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
