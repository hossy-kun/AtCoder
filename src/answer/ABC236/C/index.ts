import * as readline from "readline";

const main = (argss: string[][]) => {
  const [N, M] = argss[0].map(Number);
  const S = argss[1];
  const T = argss[2];

  const map = new Map<string, boolean>();
  T.forEach((v) => {
    map.set(v, true);
  });
  S.forEach((v) => {
    if (map.has(v)) {
      console.log('Yes');
    } else {
      console.log('No');
    }
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
