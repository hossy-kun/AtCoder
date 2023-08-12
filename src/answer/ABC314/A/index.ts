import * as readline from 'readline';

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const PI = '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  return '3.' + PI.substring(0, N);
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
  const a = main(__lines.map(s => s.split(' ')));
  console.log(a);
});
