import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const X = +argss[0][1];
  const A = argss[1].map(Number);

  let i = X;
  const set = new Set();
  while (true) {
    set.add(i);
    const next = A[i-1]
    if (set.has(next)) {
      break;
    }
    i = next;
  }
  console.log(set.size);
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
