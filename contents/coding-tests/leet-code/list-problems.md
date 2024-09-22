---
title: list-problems
description: ''
date: 2024-03-10T13:25:14.000Z
preview: ''
draft: true
tags: []
categories: []
type: default
---

# list 문제들

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [two-sum](#two-sum)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## two-sum

[link](https://leetcode.com/problems/two-sum/description/)

정수 배열과 target 정수를 가지고, 정수 배열에서 두개의 원소를 합해서 target 정수가 되는 경우의 indices를 반환해라

무조건 두개의 원소를 합해서 target 정수가 되는 경우가 있고, 같은 원소를 두번 사용하는건 안된다.

제약조건

$$
\begin{matrix}
2 <= nums.length <= 10^4 \\
-10^9 <= nums[i] <= 10^9 \\
-10^9 <= target <= 10^9 \\
\end{matrix}
$$

제일 중요한 n이 $10^4$이므로 최대 시간복잡도는 $O(n^2)$, 이상적인 경우 더 적게 걸려야함.

$-10^9$ 부터 $10^9$라는 것은 약 $2^{9 \times 3.33...}$ int형의 표현범위인 $2^{31}$보다 작기에 int형은 부담없이 쓸 수 있음.

```js
// 120ms
const twoSum = function (nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] + nums[i] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
};
```

시간복잡도 자체에서 걸림. 완전탐색하는 것도 문제.
하지만 정렬된 배열을 받았다면? 정렬은 $O(n \cdot log_2 \cdot n)$이 걸림.
정렬한 다음에 양쪽 끝부터 더하기 시작해서 -> 양끝이 target보다 크면 오른쪽 혹은 왼쪽을 안쪽으로 모으면서 더하면 완전탐색할 필요가 없어진다

```js
// runtime: 65ms
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = { index: i, value: nums[i] };
  }

  nums.sort((a, b) => a.value - b.value);

  let [l, r] = [0, nums.length - 1];

  while (l < r) {
    const sum = nums[l].value + nums[r].value;

    if (sum > target) {
      r--;
    }
    if (sum < target) {
      l++;
    }
    if (sum === target) {
      return [nums[l].index, nums[r].index];
    }
  }
};
```
