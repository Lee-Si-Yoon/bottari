import { Queue } from './queue';

export class Node<T> {
  constructor(
    public value: T,
    public left: Node<T> | undefined = undefined,
    public right: Node<T> | undefined = undefined
  ) {}
}

export class SimpleBinaryTree<T> {
  constructor(private _root: Node<T> | undefined = undefined) {}

  public get root(): Node<T> | undefined {
    return this._root;
  }

  public set root(node: Node<T>) {
    this._root = node;
  }
}

export const BFS = <T>(tree: SimpleBinaryTree<T>) => {
  const visited = [];

  if (!tree.root) {
    return;
  }

  const que = new Queue<Node<T>>();
  que.enqueue(tree.root);

  while (que.size > 0) {
    const currentNode = que.dequeue();
    // preorder traversal
    visited.push(currentNode!.value);

    // approach left first
    if (currentNode!.left) {
      que.enqueue(currentNode!.left);
    }
    if (currentNode!.right) {
      que.enqueue(currentNode!.right);
    }
  }

  return visited;
};

export const DFS = <T>(currentNode: Node<T> | undefined) => {
  if (!currentNode) {
    return;
  }

  // preorder
  console.log(currentNode.value);

  // approach left first
  DFS(currentNode.left);

  // inorder
  // console.log(currentNode.value);

  DFS(currentNode.right);

  // postorder
  // console.log(currentNode.value);
};

const bt = new SimpleBinaryTree();

bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);

const bfs = BFS(bt);

console.log(bfs); // [1, 2, 3, 4]

const dfs = DFS(bt.root);

console.log(dfs);
// preorder: 1 -> 2 -> 4 -> 3
// inorder: 4 -> 2 -> 1 -> 3
// postorder: 4 -> 2 -> 3 -> 1
