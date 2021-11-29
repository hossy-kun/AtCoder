import * as readline from "readline";

const main = (argss: string[][]) => {
  const A = argss[0][0].split('');
  const B = argss[0][1].split('');

  for (let n = 1; n <= A.length; n++) {
    const a = Number(A[A.length - n]);
    const b = Number(B[B.length - n]) || 0;
    if (10 <= a + b) {
      console.log('Hard');
      return;
    }
  }
  console.log('Easy');
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
