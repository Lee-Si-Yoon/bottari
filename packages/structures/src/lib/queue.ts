export class Queue<T> {
  constructor(
    private storage: Record<string, T> = {},
    private front = 0,
    private rear = 0,
  ) {}

  public get size(): number {
    return this.rear - this.front;
  }

  // O(1)
  enqueue(data: T): void {
    this.storage[this.rear] = data;
    this.rear += 1;
  }

  // O(1)
  dequeue(): T | undefined {
    const removeTarget = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    if (this.rear === this.front) {
      this.front = 0;
      this.rear = 0;
    }

    return removeTarget;
  }
}
