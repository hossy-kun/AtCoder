import * as readline from "readline";

const list = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199];

const main = (argss: string[][]) => {
  const [A, B, C, D] = argss[0].map(Number);

  for (let t = A; t <= B; t++) {
    let prime = false;
    for (let a = C; a <= D; a++) {
      prime = prime || list.includes(t + a);
    }
    if (prime === false) {
      console.log('Takahashi');
      return;
    }
  }
  console.log('Aoki');
  return;
}

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
