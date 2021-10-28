import { PriorityQueue } from "./priority-queue";

describe('PriorityQueue', () => {
  it('sort asc', () => {
    // -5 ~ 5
    const testData = [-1, 1, 0,-2,-3,-4, 2,-5, 5, 3, 4];
    const actual = [];
    const expected = [-5,-4,-3,-2,-1, 0, 1, 2, 3, 4, 5];

    const queue = new PriorityQueue<number>((a, b) => a - b);
    testData.forEach((a) => {
      queue.push(a);
    });

    while (!queue.isEmpty()) {
      actual.push(queue.pop());
    }

    expect(actual).toEqual(expected);
  });
  it('sort desc', () => {
    // -5 ~ 5
    const testData = [-1, 1, 0,-2,-3,-4, 2,-5, 5, 3, 4];
    const actual = [];
    const expected = [ 5, 4, 3, 2, 1, 0,-1,-2,-3,-4,-5];

    const queue = new PriorityQueue<number>((a, b) => b - a);
    testData.forEach((a) => {
      queue.push(a);
    });

    while (!queue.isEmpty()) {
      actual.push(queue.pop());
    }

    expect(actual).toEqual(expected);
  });
  it('isEmpty', () => {
    const queue = new PriorityQueue<number>((a, b) => b - a);
    expect(queue.isEmpty()).toEqual(true);

    queue.push(1);
    expect(queue.isEmpty()).toEqual(false);

    queue.pop();
    expect(queue.isEmpty()).toEqual(true);
  });
  it('size', () => {
    const queue = new PriorityQueue<number>((a, b) => b - a);
    expect(queue.size()).toEqual(0);

    queue.push(1);
    expect(queue.size()).toEqual(1);
    queue.push(2);
    queue.push(3);
    expect(queue.size()).toEqual(3);

    queue.pop();
    expect(queue.size()).toEqual(2);
    queue.pop();
    queue.pop();
    expect(queue.size()).toEqual(0);
  });
});
