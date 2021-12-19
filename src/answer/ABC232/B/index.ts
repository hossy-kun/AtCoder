import * as readline from "readline";

const main = (argss: string[][]) => {
  const A = 'a'.charCodeAt(0);
  const S = argss[0][0].split('').map((v) => v.charCodeAt(0));
  const T = argss[1][0];
  for (let i = 0; i < 26; i++) {
    const s = String.fromCharCode(...S.map(v => ((v+i-A) % 26)+A));

    if (s === T) {
      console.log('Yes');
      return;
    }
  }
  console.log('No');
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
