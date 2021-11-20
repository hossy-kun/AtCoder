import * as readline from "readline";

const main = (argss: string[][]) => {
  const S = argss[0][0].padStart(2, '0');
  let T = argss[0][1].padStart(2, '0');
  let X = argss[0][2].padStart(2, '0');

  if (S > T) {
    T = (Number(T) + 24).toString();
  }
  if (S > X) {
    X = (Number(X) + 24).toString();
  }
  const s = S.concat('00');
  const t = T.concat('00');
  const x = X.concat('30');

  if (s <= x && x < t) {
    console.log('Yes');
  } else {
    console.log('No');
  }
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
