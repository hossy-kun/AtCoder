import * as readline from 'readline';

interface Node {
  next: Set<number>;
  step: number;
}

const main = (argss: string[][]): string => {
  const [N1, N2, M] = argss[0].map(Number);

  const graph: Node[] = [];
  for (let n = 0; n < N1+N2; n++) {
    graph.push({ next: new Set(), step: -1 });
  }

  for (let m = 0; m < M; m++) {
    const [a, b] = argss[1+m].map(Number);
    graph[a-1].next.add(b-1)
    graph[b-1].next.add(a-1)
  }

  let start = 0;
  let index = 0;
  let queue = [0];
  graph[0].step = 0;
  while (index < queue.length) {
    const node = graph[queue[index]];
    start = node.step;
    node.next.forEach((v) => {
      if (graph[v].step === -1) {
        graph[v].step = node.step + 1;
        queue.push(v);
      }
    });
    index++;
  }

  let end = 0;
  index = 0;
  queue = [N1 + N2 - 1];
  graph[N1 + N2 - 1].step = 0;
  while (index < queue.length) {
    const node = graph[queue[index]];
    end = node.step;
    node.next.forEach((v) => {
      if (graph[v].step === -1) {
        graph[v].step = node.step + 1;
        queue.push(v);
      }
    });
    index++;
  }

  return answer(start + end + 1);
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

const answer = (v: number | string | bigint): string => {
  if (v !== null && v !== undefined) {
    return v.toString();
  } else {
    return v;
  }
};
const answerl = (v: (number | string | bigint)[], separator = '\n'): string => {
  if (v !== null && v !== undefined) {
    return v.join(separator);
  } else {
    return v;
  }
};
const answerll = (v: (number | string | bigint)[][], separators: string[] = [' ', '\n']): string => {
  if (v !== null && v !== undefined) {
    return v.map(l => l.join(separators[0])).join(separators[1]);
  } else {
    return v;
  }
};
