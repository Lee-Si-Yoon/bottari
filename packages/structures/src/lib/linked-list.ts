class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | undefined = undefined,
  ) {}
}

export class LinkedList<T> {
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
  get: (index: number) => T | undefined = (index: number) => {
    const node = this.getNodeAtIndex(index);
    if (node) return node.value;
  };

  // O(n)
  set(index: number, value: T): void {
    const currentNode = this.getNodeAtIndex(index);
    currentNode!.value = value;
  }

  // O(n)
  insert(index: number, value: T): void {
    if (index < 0 || index >= this._size) return;
    const newNode = new Node(value);

    if (index === 0) {
      this.head = newNode;
    } else {
      const prevNode = this.getNodeAtIndex(index - 1);
      newNode.next = prevNode?.next;
      prevNode!.next = newNode;
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
      this.tail = this.tail?.next;
    }

    this._size += 1;
  }

  // O(n)
  remove: (index: number) => void = (index: number) => {
    if (this._size === 0) {
      return;
    }

    if (index === 0) {
      this.head = this.head?.next;
    } else {
      const prevNode = this.getNodeAtIndex(index - 1);

      prevNode!.next = prevNode!.next!.next;
    }

    this._size -= 1;
  };

  // O(n)
  removeBack(): void {
    if (this._size === 0) {
      return;
    }

    const prevTolastNode = this.getNodeAtIndex(this._size - 2);
    prevTolastNode!.next = prevTolastNode!.next?.next;
    this.tail = prevTolastNode;

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
