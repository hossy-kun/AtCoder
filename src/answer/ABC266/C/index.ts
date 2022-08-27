import * as readline from "readline";

const main = (argss: string[][]) => {
  const [Ax, Ay] = argss[0].map(Number);
  const [Bx, By] = argss[1].map(Number);
  const [Cx, Cy] = argss[2].map(Number);
  const [Dx, Dy] = argss[3].map(Number);

  // A
  const a = (Bx - Ax) * (Dy - Ay) - (By - Ay) * (Dx - Ax);
  if (a < 0) {
    console.log('No');
    return;
  }
  // B
  const b = (Cx - Bx) * (Ay - By) - (Cy - By) * (Ax - Bx);
  if (b < 0) {
    console.log('No');
    return;
  }
  // C
  const c = (Dx - Cx) * (By - Cy) - (Dy - Cy) * (Bx - Cx);
  if (c < 0) {
    console.log('No');
    return;
  }
  // D
  const d = (Ax - Dx) * (Cy - Dy) - (Ay - Dy) * (Cx - Dx);
  if (d < 0) {
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
