class Node<T> {
  constructor(
    public value: T,
    public previous: Node<T> | undefined = undefined,
    public next: Node<T> | undefined = undefined,
  ) {}
}

export class DoublyLinkedList<T> {
  constructor(
    private head: Node<T> | undefined = undefined,
    private tail: Node<T> | undefined = undefined,
    private _size = 0,
  ) {}

  public get size(): number {
    return this._size;
  }

  private getNodeAtIndex(index: number): Node<T> | undefined {
    if (index < 0 || index >= this._size) {
      return;
    }

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current?.next;
      count += 1;
    }

    return current;
  }

  // O(n)
  get(index: number): T | undefined {
    const node = this.getNodeAtIndex(index);
    return node?.value;
  }

  // O(n)
  set(index: number, value: T): void {
    const currentNode = this.getNodeAtIndex(index);
    currentNode!.value = value;
  }

  // O(n)
  insert(index: number, value: T): void {
    if (index < 0 || index >= this._size || !this.head) return;
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      this._size++;
    } else {
      const prevNode = this.getNodeAtIndex(index - 1);

      newNode.next = prevNode!.next;
      prevNode!.next!.previous = newNode;

      prevNode!.next = newNode;
      newNode.previous = prevNode;
    }

    this._size += 1;
  }

  // O(1)
  insertBack(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.previous = this.tail;

      this.tail = this.tail?.next;
    }

    this._size += 1;
  }

  // O(n)
  remove(index: number): void {
    if (index < 0 || index >= this._size || !this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      delete this.head?.previous;
    } else {
      const prevNode = this.getNodeAtIndex(index - 1);

      prevNode!.next = prevNode!.next?.next;
      prevNode!.next!.previous = prevNode;
    }

    this._size -= 1;
  }

  // O(1)
  removeBack(): void {
    this.tail = this.tail?.previous;
    delete this.tail?.next;
    this._size -= 1;
  }

  // O(n)
  print: VoidFunction = () => {
    let current = this.head;
    let output = '';

    while (current) {
      output += String(current.value);
      current = current.next;
      if (current) {
        output += '>';
      }
    }

    console.log(output);
  };

  printHeadAndTail(): void {
    console.log('head:', this.head);
    console.log('tail', this.tail);
  }
}
