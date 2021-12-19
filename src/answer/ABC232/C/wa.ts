import * as readline from "readline";

const main = (argss: string[][]) => {
  const [N, M] = argss[0].map(Number);

  const ropeX = new Array<number>(N).fill(0);
  const ropeY = new Array<number>(N).fill(0);

  for (let m = 0; m < M; m++) {
    const [A, B] = argss[m+1].map(Number);
    ropeX[A-1]++;
    ropeX[B-1]++;
  }
  for (let m = 0; m < M; m++) {
    const [C, D] = argss[m+M+1].map(Number);
    ropeY[C-1]++;
    ropeY[D-1]++;
  }

  ropeX.sort((a, b) => a - b);
  ropeY.sort((a, b) => a - b);

  for (let n = 0; n < N; n++) {
    if (ropeX[n] !== ropeY[n]) {
      console.log('No');
      return;
    }
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
