import * as readline from "readline";

const main = (argss: string[][]) => {
  const [N, Q] = argss[0].map(Number);
  const a = argss[1].map(Number);
  const map = new Map<number, Array<number>>();

  a.forEach((v, i) => {
    if (map.has(v)) {
      const ary = map.get(v)!;
      ary.push(i+1);
    } else {
      map.set(v, [i+1]);
    }
  });

  for (let q = 0; q < Q; q++) {
    const [x, k] = argss[q+2].map(Number);
    if (map.has(x)) {
      const ary = map.get(x)!;
      const v = ary[k-1];
      if (v !== undefined) {
        console.log(v);
      } else {
        console.log(-1);
      }
    } else {
      console.log(-1);
    }
  }
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
