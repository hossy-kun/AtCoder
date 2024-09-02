import * as readline from 'readline';

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), (_) => new Array<T>(m).fill(v));
};

const main = (args: Args): string => {
  const [N, Q] = args.atLineNum(0);
  const [S] = args.atLine(1);

  const mem = generate2DArray(N + 1, N + 1, 0);

  for (let l = 0; l < N; l++) {
    let count = 0;
    for (let r = l + 1; r < N; r++) {
      if (S[r - 1] === S[r]) {
        count++;
      }
      mem[l][r] = count;
    }
  }

  const results: number[] = [];
  for (let q = 0; q < Q; q++) {
    const [l, r] = args.atLineNum(2 + q);
    results.push(mem[l - 1][r - 1] - mem[0][l - 1]);
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
  __lines.push(line.trim());
});
__reader.on('close', () => {
  const a = main(new Args(__lines.map((s) => s.split(' '))));
  console.log(a);
});

class Args {
  private line = -1;
  constructor(private args: string[][]) {}

  at(i: number, j: number): string {
    return this.args[i][j];
  }
  atNum(i: number, j: number): number {
    return Number(this.at(i, j));
  }
  atBig(i: number, j: number): bigint {
    return BigInt(this.at(i, j));
  }
  atStr(i: number, j: number): string {
    return this.at(i, j);
  }
  atLine(i: number): string[] {
    return this.args[i];
  }
  atLineNum(i: number, map: (v: number) => number = (v) => v): number[] {
    return this.atLine(i).map((v) => map(Number(v)));
  }
  atLineBig(i: number, map: (v: bigint) => bigint = (v) => v): bigint[] {
    return this.atLine(i).map((v) => map(BigInt(v)));
  }
  atLineStr(i: number, map: (v: string) => string = (v) => v): string[] {
    return this.atLine(i).map((v) => map(v));
  }

  nextLine(): string[] {
    this.line++;
    return this.atLine(this.line);
  }
  nextLineNum(map: (v: number) => number = (v) => v): number[] {
    this.line++;
    return this.atLineNum(this.line, map);
  }
  nextLineBig(map: (v: bigint) => bigint = (v) => v): bigint[] {
    this.line++;
    return this.atLineBig(this.line, map);
  }
  nextLineStr(map: (v: string) => string = (v) => v): string[] {
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
const answert = (v: (number | string | bigint)[][], separators: string[] = [' ', '\n']): string => {
  if (v === undefined || v === null) {
    return '';
  }
  return v.map((l) => l.join(separators[0])).join(separators[1]);
};
