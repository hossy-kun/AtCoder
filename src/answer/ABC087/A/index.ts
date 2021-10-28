import * as readline from "readline";

const main = (argss: string[][]) => {
  const X = +argss[0][0];
  const A = +argss[1][0];
  const B = +argss[2][0];

  let money = X;
  money = money - (A * 1);
  money = money % B;

  console.log(money);

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
