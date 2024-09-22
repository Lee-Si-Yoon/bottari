---
title: tree-problems
description: ''
date: 2024-04-27T08:55:09.551Z
preview: ''
draft: true
tags: []
categories: []
type: default
---

# Tree 문제들

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Lowest common ancestor of a Binary Tree](#lowest-common-ancestor-of-a-binary-tree)
- [Maximum depth of Binary Tree](#maximum-depth-of-binary-tree)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Lowest common ancestor of a Binary Tree

[link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

제약조건

$$
\begin{matrix}
2 <= Node.count <= 10^5 //
-10^9 <= Node.value <= 10^9 //
All Node.val are unique. //
p != q //
p and q will exist in the tree. //
\end{matrix}
$$

Node의 개수가 $10^5$니까 $O(n)$

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (root.val === p.val || root.val === q.val) {
    return root;
  } else if (left && right) {
    return root;
  } else {
    return left || right;
  }
};
```

DFS + post order traversal을 이용해서 풀이.
DFS는 재귀를 기본으로 깔고가니 전체 tree를 보는게 아니라 subtree 내에서 문제풀이가 가능해야함.
공통조상을 알기 위해선 양쪽 자식 노드를 접근한 이후에 판단이 가능하므로 후위순회하면서 양쪽 자식 노드와 타겟인 p와 q를 비교하는 방식.

1. 현재 노드가 q 혹은 q인 경우 이 문제에서 공통조상은 자기 자신도 포함되기에 자기자신을 반환
2. 현재 노드의 양쪽 자식이 null이 아니면 자식 모두 p 혹은 q이기에(1번 케이스) 자기자신을 반환
3. 그 외 경우엔 left 혹은 right 반환. 자식 한쪽만 p 혹은 q인 경우 그리고 모두 null인 경우에 해당

## Maximum depth of Binary Tree

[link](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

제약조건

$$
\begin{matrix}
0 <= Node.count <= 10^4 //
-100 <= Node.value <= 100 //
\end{matrix}
$$

Node.count가 1만개 일수도 있는데, Node.value는 201가지 = 값 겹침

```js
// runtime: 66ms

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let maxDepth = 0;

  if (!root) {
    return maxDepth;
  }

  const que = [];
  que.push({ currentNode: root, currentDepth: 1 });

  while (que.length > 0) {
    const { currentNode, currentDepth } = que.shift();
    maxDepth = Math.max(maxDepth, currentDepth);

    if (currentNode.left) {
      que.push({ currentNode: currentNode.left, currentDepth: currentDepth + 1 });
    }
    if (currentNode.right) {
      que.push({ currentNode: currentNode.right, currentDepth: currentDepth + 1 });
    }
  }

  return maxDepth;
};
```

level order traversal로 풀이, Array를 쓰지 않고(shift시 $O(n)$) queue 구현해서 사용 시 runtime 더 줄일 수 있음.

BFS하면서 한 레벨 깊이 들어갈 때마다 maxDepth를 업데이트 해주는 방식.

```js
// runtime: 58ms

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left); // 1
  const rightDepth = maxDepth(root.right); // 2

  return Math.max(leftDepth, rightDepth) + 1;
};
```

post order traversal로 풀이. 맨 아래 자손부터 1로 시작하고 끌고 올라오면서 조상에서 양쪽 자손이 가져온 값을 비교해서 더 높은 숫자를 반환하는 방식.
