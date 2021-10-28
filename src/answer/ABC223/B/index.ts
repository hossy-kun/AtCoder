import * as readline from "readline";

const main = (argss: string[][]) => {
  let S = argss[0][0];
  const len = S.length;
  let list = [S];
  for (let n = 1; n < len; n++) {
    const word = S.charAt(S.length - 1) + S.substr(0, S.length - 1);
    list.push(word);
    S = word;
  }
  list = list.sort();
  console.log(list[0]);
  console.log(list[S.length - 1]);
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
