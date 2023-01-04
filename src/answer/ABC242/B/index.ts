import * as readline from "readline";

const main = (argss: string[][]) => {
  const S = argss[0][0];
  const SS = S.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  return answer(SS.join(''));
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
