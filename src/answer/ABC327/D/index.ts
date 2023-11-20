import * as readline from 'readline';

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};


const main = (args: Args): string => {
  const [N, M] = args.nextLineNum();
  const A = args.nextLineNum(v => v - 1);
  const B = args.nextLineNum(v => v - 1);

  const G: number[][] = [];
  for (let n = 0; n < N; n++) {
    G[n] = [];
  }
  for (let m = 0; m < M; m++) {
    G[A[m]].push(B[m]);
    G[B[m]].push(A[m]);
  }

  const X = generateArray(N, -1);
  let ans = true;
  const dfs = (n: number, v: number) => {
    X[n] = v;
    G[n].forEach((cn) => {
      if (X[cn] === -1) {
        dfs(cn, 1-v);
      } else if (X[cn] === v) {
        ans = false;
      }
    });
  };

  for (let n = 0; n < N; n++) {
    if (X[n] === -1) {
      dfs(n, 0);
    }
  }

  return answer(ans ? 'Yes' : 'No');
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
