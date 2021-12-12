import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const M = +argss[0][1];
  const list = new Array<Set<number>>(N);
  for (let n = 0; n < N; n++) {
    list[n] = new Set<number>();
  }

  for (let m = 0; m < M; m++) {
    const [A, B] = argss[1+m].map(Number);
    list[A-1].add(B-1);
    list[B-1].add(A-1);
  }

  const comp = new Set();
  const ng = list.find((s, i) => {
    if (2 < s.size) {
      return true;
    }
    if (2 === s.size) {
      if (comp.has(i)) {
        return false;
      }
      let prev = i;
      comp.add(i);
      let ng = false;
      const stack = [Array.from(s)[0]];
      while (0 < stack.length) {
        const n = stack.pop()!;
        comp.add(n);
        if (i === n) {
          ng = true;
          break;
        }
        if (list[n].size === 2) {
          list[n].forEach((nn) => {
            if (nn !== prev) {
              stack.push(nn);
            }
          });
        }
        prev = n;
      }
      if (ng) {
        return true;
      }
    }
    return false;
  });
  console.log(!!ng ? 'No' : 'Yes');
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
