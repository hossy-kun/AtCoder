import * as readline from "readline";

const main = (argss: string[][]) => {
  const A = +argss[0][0];
  const B = +argss[0][1];
  const C = +argss[0][2];
  const D = +argss[0][3];

  if (A + B > C + D) {
    console.log('Left');
  } else if (A + B === C + D) {
    console.log('Balanced');
  } else {
    console.log('Right');
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
