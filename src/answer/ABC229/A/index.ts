import * as readline from "readline";

const main = (argss: string[][]) => {
  const S1 = argss[0][0];
  const S2 = argss[1][0];
  if (S1 === '#.' && S2 === '.#') {
    console.log('No');
    return;
  }
  if (S1 === '.#' && S2 === '#.') {
    console.log('No');
    return;
  }
  console.log('Yes');
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
