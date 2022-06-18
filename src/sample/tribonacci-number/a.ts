import * as readline from "readline";

// トリボナッチ数列
// 0,0,1,1,2,4,7,...
const tribo_ = (n: number, memo: Map<number, number>): number => {
  if (n === 0 || n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }

  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const num =  tribo_(n - 1, memo) + tribo_(n - 2, memo) + tribo_(n - 3, memo);
  memo.set(n, num);
  return num;
};
const tribo = (n: number): number => {
  return tribo_(n, new Map());
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];

  console.log(tribo(N));
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
