import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const [h1, h2, h3, w1, w2, w3] = argss[0].map(Number);
  const c = generate2DArray(3, 3, 0);
  let p = 0;

  for (c[0][0] = 1; c[0][0] <= h1-2; c[0][0]++) {
    for (c[0][1] = 1; c[0][1] <= h1-c[0][0]-1; c[0][1]++) {
      c[0][2] = h1 - (c[0][0] + c[0][1]);

      for (c[1][0] = 1; c[1][0] <= h2-2; c[1][0]++) {
        for (c[1][1] = 1; c[1][1] <= h2-c[1][0]-1; c[1][1]++) {
          c[1][2] = h2 - (c[1][0] + c[1][1]);

          for (c[2][0] = 1; c[2][0] <= h3-2; c[2][0]++) {
            for (c[2][1] = 1; c[2][1] <= h3-c[2][0]-1; c[2][1]++) {
              c[2][2] = h3 - (c[2][0] + c[2][1]);

              if (w1 === c[0][0] + c[1][0] + c[2][0]
                && w2 === c[0][1] + c[1][1] + c[2][1]
                && w3 === c[0][2] + c[1][2] + c[2][2]) {
                  p++;
              }
            }
          }
        }
      }
    }
  }

  console.log(p);
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
