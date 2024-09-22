# Linked list 문제들

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Design Browser History](#design-browser-history)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

1. linked list를 자유자재로 구현 가능해야함.
   선형 자료구조를 사용해야하고 중간에 데이터의 추가 삭제가 용이해야할 때
2. Tree OR Graph에 활용.

## Design Browser History

[link](https://leetcode.com/problems/design-browser-history/description/)

$$
\begin{matrix}
1 <= homepage.length <= 20 \\
1 <= url.length <= 20 \\
1 <= steps <= 100 \\
\text{max 5000calls of visit, back and foward}
\end{matrix}
$$

homepage.length, url.length 별로 의미 없고,
steps는 100step 뒤로 가기한다면? 해도 $O(n^3)$까지도 안전해보인다.
visit, back and foward 5000회 호출도 영향을 끼칠순 있겠지만 $5 \cdot (10^3 \cdot 10^2) \approx 10^{5.7}$ 이니까 무난하게 $O(n)$으로 잡고 가도 되겠다.

```js
class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  const newNode = new Node(homepage);
  this.current = newNode;
  this.head = newNode;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.current.next = new Node(url, null, this.current);
  this.current = this.current.next;

  return;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (steps > 0 && this.current.previous !== null) {
    steps -= 1;
    this.current = this.current.previous;
  }

  return this.current.value;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (steps > 0 && this.current.next !== null) {
    steps -= 1;
    this.current = this.current.next;
  }

  return this.current.value;
};
```
