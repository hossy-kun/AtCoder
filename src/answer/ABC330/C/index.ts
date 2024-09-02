import * as readline from 'readline';

const main = (args: Args): string => {
  const D = args.atNum(0, 0);
  const X = Math.sqrt(D);
  let ans = Number.MAX_SAFE_INTEGER;
  for (let x = 0; x < X; x++) {
    const c = x * x - D;
    if (0 <= c) {
      const y = 0;
      const a = Math.abs(x * x + y * y - D);
      ans = Math.min(ans, a);
    } else {
      const y1 = Math.floor(Math.sqrt(-c));
      const a1 = Math.abs(x * x + y1 * y1 - D);
      const y2 = Math.ceil(Math.sqrt(-c));
      const a2 = Math.abs(x * x + y2 * y2 - D);
      ans = Math.min(ans, a1, a2);
    }
  }
  return answer(ans);
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
