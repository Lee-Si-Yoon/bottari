---
title: hash-table-problems
description: ''
date: 2024-04-20T13:22:02.105Z
preview: ''
draft: true
tags: []
categories: []
type: default
---

# hash table 문제들

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [two-sum](#two-sum)
- [longest-consecutive-sequence](#longest-consecutive-sequence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

[개념](../concepts/hash-table.md)

## two-sum

[list 방식 풀이](./list-problems.md)
[link](https://leetcode.com/problems/two-sum/description/)

list처럼 완전탐색하지 않고,
hash table의 각 key값에 저장함,
그리고 그 key값은 $O(1)$으로 가져올 수 있음.

문제 자체가 합이 되는 숫자의 인덱스를 물어봤으니, key값으로는 숫자 value로는 인덱스를 저장해두고 답을 찾는 방식

```js
const twoSum = (nums, target) => {
  const map = {};
  let result = [-1, -1];

  nums.forEach((num, i) => {
    const needed = target - num;

    if (needed in map) {
      result = [map[needed], i];

      return;
    }

    map[num] = i;
  });

  return result;
};
```

## longest-consecutive-sequence

[link](https://leetcode.com/problems/longest-consecutive-sequence/description/)

제약조건

$$
\begin{matrix}
0 <= nums.length <= 10^5 //
-10^9 <= nums[i] <= 10^9
\end{matrix}
$$

nums.length가 길어지면 오래 걸리니까, 최대 $O(n \log_2 n)$으로 잡고,
length가 0일 수도 있는걸 염두에 둬야함.

순차적인 값이라면 지금 값보다 1 작은 값이 있다면 해당 값은 연산할 필요가 없다
없다면 이제 순회를 돌면서 1 더 큰 값이 있는지를 찾아본다.
이 연산을 수행한 count 값 중 가장 큰 값을 반환시키면 된다.

```js
// runtime: 217ms

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = {};
  let longest = 0;

  nums.forEach((num) => {
    map[num] = true;
  });

  Object.keys(map).forEach((key) => {
    if (!(+key - 1 in map)) {
      let count = 1;
      let target = +key + 1;

      while (target in map) {
        target += 1;
        count += 1;
      }

      longest = Math.max(longest, count);
    }
  });

  return longest;
};
```

확실하게 중복을 제거하고 가는 Set 자료구조를 사용하는 방식

```js
// runtime: 93ms

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  set.forEach((num) => {
    if (!set.has(num - 1)) {
      let count = 1;
      let target = +num + 1;

      while (set.has(target)) {
        target += 1;
        count += 1;
      }

      longest = Math.max(longest, count);
    }
  });

  return longest;
};
```
