import * as readline from 'readline';

const main = (args: Args): string => {
  const [N, S, M, L] = args.nextLineNum();
  const count = (s: number, m: number, l: number) => {
    return s * 6 + m * 8 + l * 12;
  };
  const value = (s: number, m: number, l: number) => {
    return s * S + m * M + l * L;
  };

  let min = Number.MAX_SAFE_INTEGER;
  for (let s = 0; ;s++) {
    if (N <= count(s, 0, 0)) {
      min = Math.min(value(s, 0, 0), min);
      break;
    }
    for (let m = 0; ;m++) {
      if (N <= count(s, m, 0)) {
        min = Math.min(value(s, m, 0), min);
        break;
      }

      const rest = N - count(s, m, 0);
      const l = Math.ceil(rest / 12);
      min = Math.min(value(s, m, l), min);
    }
  }

  return answer(min);
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