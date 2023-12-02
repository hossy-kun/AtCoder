import * as readline from 'readline';

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (args: Args): string => {
  const [N, Q] = args.nextLineNum();
  const tile = generate2DArray(N, N, 0);
  for (let y = 0; y < N; y++) {
    const [line] = args.nextLine();
    for (let x = 0; x < N; x++) {
      tile[y][x] = line.charAt(x) === 'B' ? 1 : 0;
    }
  }

  const area = generate2DArray(N+1, N+1, 0);
  for (let y = 1; y <= N; y++) {
    for (let x = 1; x <= N; x++) {
      area[y][x] += tile[y-1][x-1];
      area[y][x] += area[y-1][x];
      area[y][x] += area[y][x-1];
      area[y][x] -= area[y-1][x-1];
    }
  }

  const g = (H: number, W: number): bigint => {
    if (H <= N && W <= N) {
      return BigInt(area[H][W]);
    }
    const hq = BigInt(Math.floor(H / N)), hr = H % N;
    const wq = BigInt(Math.floor(W / N)), wr = W % N;

    let sum = 0n;
    sum += g(N, N) * hq * wq;
    sum += g(hr, N) * wq;
    sum += g(N, wr) * hq;
    sum += g(hr, wr);
    return sum;
  };

  const f = (A: number, B: number, C: number, D: number): bigint => {
    return g(C, D) - g(C, B) - g(A, D) + g(A, B);
  };

  const a: bigint[] = [];
  for (let q = 0; q < Q; q++) {
    const [A, B, C, D] = args.nextLineNum();
    a.push(f(A, B, C+1, D+1));
  }
  return answerl(a);
};

// ----------------------------------------------------------------------------
// Template

const __lines: string[] = [];
const __reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

__reader.on('line', (line) => {
  __lines.push(line.trim());
});
__reader.on('close', () => {
  const a = main(new Args(__lines.map(s => s.split(' '))));
  console.log(a);
});

class Args {
  private line = -1;
  constructor(private args: string[][]) {}

  at(i: number, j: number): string {
    return this.args[i][j];
  }
  atLine(i: number): string[] {
    return this.args[i];
  }
  atLineNum(i: number, map: (v: number) => number = v => v): number[] {
    return this.atLine(i).map(v => map(Number(v)));
  }
  atLineBig(i: number, map: (v: bigint) => bigint = v => v): bigint[] {
    return this.atLine(i).map(v => map(BigInt(v)));
  }
  atLineStr(i: number, map: (v: string) => string = v => v): string[] {
    return this.atLine(i).map(v => map(v));
  }

  nextLine(): string[] {
    this.line++;
    return this.atLine(this.line);
  }
  nextLineNum(map: (v: number) => number = v => v): number[] {
    this.line++;
    return this.atLineNum(this.line, map);
  }
  nextLineBig(map: (v: bigint) => bigint = v => v): bigint[] {
    this.line++;
    return this.atLineBig(this.line, map);
  }
  nextLineStr(map: (v: string) => string = v => v): string[] {
    this.line++;
    return this.atLineStr(this.line, map);
  }
}

const answer = (v: number | string | bigint): string => {
  if (v === undefined || v === null) {
    return '';
  }
  return v.toString();
};
const answerl = (v: (number | string | bigint)[], separator = '\n'): string => {
  if (v === undefined || v === null) {
    return '';
  }
  return v.join(separator);
};
const answerll = (v: (number | string | bigint)[][], separators: string[] = [' ', '\n']): string => {
  if (v === undefined || v === null) {
    return '';
  }
  return v.map(l => l.join(separators[0])).join(separators[1]);
};
