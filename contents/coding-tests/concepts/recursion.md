---
title: recursion
description: ''
date: 2024-04-21T02:06:11.100Z
preview: ''
draft: true
tags: []
categories: []
type: default
---

# Recursion

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [구성요소](#%EA%B5%AC%EC%84%B1%EC%9A%94%EC%86%8C)
- [시간복잡도](#%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

재귀함수는 자신을 정의할 때 자기 자신을 재참조하는 함수.

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function fibo(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}
```

## 구성요소

1. 점화식recurrence relation: problem과 subproblem의 관계식

   $$
   \begin{gather}
   f(n) = n \cdot f(n-1) \tag{Factorial} \\
   f(n) = f(n-1) + f(n - 2) \tag{Fibonacci sequence} \\
   f(n,m) = f(n - 1, m - 1) + f(n - 1, m) \tag{Pascal's triangle} \\
   \end{gather}
   $$

2. base case: 더 이상 재귀호출을 하지 않아도 계산값을 반환한 수 있는 조건

   모든 입력이 **최종적으로 base case을 이용해서 문제를 해결**할 수 있어야함. 무한루프 방지

## 시간복잡도

$$
\begin{matrix}
재귀함수 전체 시간복잡도 = 재귀 함수 호출 수 \times (재귀 함수 하나당) 시간복잡도
\end{matrix}
$$

- $O(n)$: **n에 비례한 호출**, $f(n) = n \cdot f(n-1)$와 같이 한번 부르는 경우
- $O(2^n)$: **2^N에 비례한 호출**, $f(n) = f(n-1) + f(n - 2)$와 같이 여러번 부르면 밑수가 달라짐
- $O(\log_2 n)$: binary search
