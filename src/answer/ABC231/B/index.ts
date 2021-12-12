import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const map = new Map<string, number>();

  for (let n = 0; n < N; n++) {
    const S = argss[1+n][0];
    if (map.has(S)) {
      map.set(S, map.get(S)! + 1);
    } else {
      map.set(S, 1);
    }
  }

  let max: [string, number] = ['', 0];
  for (let s of map.entries()) {
    if (max[1] < s[1]) {
      max = s;
    }
  }
  console.log(max[0]);
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
