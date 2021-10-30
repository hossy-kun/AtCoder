import * as readline from "readline";


class Train {
  num = 0;
  front?: Train;
  back?: Train;

  constructor(num: number) {
    this.num = num;
  }
}

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const Q = +argss[0][1];

  const trains = new Array<Train>(N);
  for (let n = 0; n < N; n++) {
    trains[n] = new Train(n+1);
  }

  for (let q = 0; q < Q; q++) {
    const t = +argss[q+1][0];
    const x = +argss[q+1][1];
    const y = +argss[q+1][2];

    if (t === 1) {
      trains[x-1].back = trains[y-1];
      trains[y-1].front = trains[x-1];

    } else if (t === 2) {
      trains[x-1].back = undefined;
      trains[y-1].front = undefined;

    } else if (t === 3) {
      let train = trains[x-1];
      while (train.front !== undefined) {
        train = train.front;
      }
      const seq = [train.num];
      while (train.back !== undefined) {
        train = train.back;
        seq.push(train.num);
      }
      console.log(seq.length, seq.join(' '));
    }
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
