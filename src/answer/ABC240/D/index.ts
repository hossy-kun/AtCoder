import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const A = argss[1].map(Number);

  const stack: number[][] = [];
  let ary: number[] = [];
  let count = 0;

  A.forEach((a) => {
    if (0 < ary.length && ary[0] !== a) {
      stack.push(ary);
      ary = [];
    }

    ary.push(a);
    count++;

    if (ary.length === a) {
      ary = [];
      if (0 < stack.length) {
        ary = stack.pop()!;
      }
      count -= a;
    }
    console.log(count);
  });
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
