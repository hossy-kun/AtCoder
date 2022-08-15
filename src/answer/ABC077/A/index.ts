import * as readline from "readline";

const main = (argss: string[][]) => {
  const l1 = argss[0][0].split('');
  const l2 = argss[1][0].split('');

  const size = l1.length;
  for (let n = 0; n < size; n++) {
    if (l1.shift() !== l2.pop()) {
      console.log('NO');
      return;
    }
  }

  console.log('YES');
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
