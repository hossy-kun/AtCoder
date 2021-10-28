/**
 * 優先度付きキュー
 *
 * ## 特徴
 * - ヒープ実装
 *
 * |method|Order|
 * |---|---|
 * |push|log n|
 * |pop|log n|
 * |size|1|
 * |isEmpty|1|
 *
 * ## 参考
 *
 * https://itnext.io/priority-queue-in-typescript-6ef23116901
 * https://zenn.dev/riku/articles/e1c0ea46af0348
 */
export class PriorityQueue<T> {
  private heap: T[];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.heap = [];
    this.comparator = comparator;
  }

  push(item: T) {
    this.heap.push(item);

    let i = this.heap.length - 1;
    while (0 < i) {
      const p = this.parentIndex(i);
      if (this.comparator(this.heap[p], this.heap[i]) < 0) {
        break;
      }
      this.swap(i, p);
      i = p;
    }
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    // ツリー構造を保つため、先頭と末尾を入れ替え先頭だった要素を取り除く
    this.swap(0, this.heap.length - 1);
    const item = this.heap.pop();

    // ツリーを優先度に基づいて再構築する
    let current = 0;
    while (true) {
      const left = this.leftChildIndex(current);
      const right = this.rightChildIndex(current);

      // 左の子がいなければ、子はいないので完了
      if (!this.inRange(left)) {
        break;
      }
      // 優先度がより低い子を取得する
      let lower = left;
      if (this.inRange(right)) {
        if (this.comparator(this.heap[right], this.heap[left]) < 0) {
          lower = right;
        }
      }
      // 親の方が優先度が高くなったら完了
      if (this.comparator(this.heap[lower], this.heap[current]) > 0) {
        break;
      }

      this.swap(current, lower);
      current = lower;
    }

    return item;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  size(): number {
    return this.heap.length;
  }

  private swap(a: number, b: number) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private inRange(index: number): boolean {
    return 0 <= index && index < this.heap.length;
  }
}
