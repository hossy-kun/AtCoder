import * as readline from "readline";

const main = (argss: string[][]) => {
  const [A, B, C, X] = argss[0].map(Number);

  if (X <= A) {
    return answer(1.0);
  }
  if (X <= B) {
    const p = Math.min(C / (B - (A+1) + 1), 1.0);
    return answer(p);
  }

  return answer(0.0);
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

const answer = (v: number | string | bigint) => {
  if (v !== null && v !== undefined) {
    console.log(v.toString());
  } else {
    console.log(v);
  }
};
