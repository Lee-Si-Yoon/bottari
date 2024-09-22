# 1 ~ 10

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [01. 몫 구하기](#01-%EB%AA%AB-%EA%B5%AC%ED%95%98%EA%B8%B0)
  - [double tilde(bitwise NOT)](#double-tildebitwise-not)
- [01-2. 숫자 비교하기](#01-2-%EC%88%AB%EC%9E%90-%EB%B9%84%EA%B5%90%ED%95%98%EA%B8%B0)
- [02. 나이 출력](#02-%EB%82%98%EC%9D%B4-%EC%B6%9C%EB%A0%A5)
- [03. 각도기](#03-%EA%B0%81%EB%8F%84%EA%B8%B0)
- [04. 양꼬치](#04-%EC%96%91%EA%BC%AC%EC%B9%98)
- [05. 짝수의 합](#05-%EC%A7%9D%EC%88%98%EC%9D%98-%ED%95%A9)
  - [reduce에 대한 글들](#reduce%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B8%80%EB%93%A4)
- [06. 배열의 평균값](#06-%EB%B0%B0%EC%97%B4%EC%9D%98-%ED%8F%89%EA%B7%A0%EA%B0%92)
- [07. 머쓱이보다 키 큰 사람](#07-%EB%A8%B8%EC%93%B1%EC%9D%B4%EB%B3%B4%EB%8B%A4-%ED%82%A4-%ED%81%B0-%EC%82%AC%EB%9E%8C)
- [08. 중복된 숫자 개수](#08-%EC%A4%91%EB%B3%B5%EB%90%9C-%EC%88%AB%EC%9E%90-%EA%B0%9C%EC%88%98)
- [09. 피자 나눠 먹기(1)](#09-%ED%94%BC%EC%9E%90-%EB%82%98%EB%88%A0-%EB%A8%B9%EA%B8%B01)
- [10. 짝수 홀수 개수](#10-%EC%A7%9D%EC%88%98-%ED%99%80%EC%88%98-%EA%B0%9C%EC%88%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 01. 몫 구하기

```bash
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
```

| num1 | num2 | result |
| ---- | ---- | ------ |
| 10   | 5    | 2      |
| 7    | 2    | 3      |

```js
function solution(num1, num2) {
  var answer = ~~(num1 / num2);
  return answer;
}
```

### [double tilde(bitwise NOT)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)

Math.floor와 같이 반내림 처럼 사용할 수 있음
한번 하면 `-(n+1)`와 같음 이걸 두번하는 것

e.g. 5를 예시로 하면 `-(5+1) = -6` 다음에 다시 `-(-6+1) = 5`

---

## 01-2. 숫자 비교하기

```bash
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
```

| num1 | num2 | result |
| ---- | ---- | ------ |
| 2    | 3    | -1     |
| 11   | 11   | 1      |
| 7    | 99   | -1     |

```js
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}
```

---

## 02. 나이 출력

```bash
머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
```

| age | result |
| --- | ------ |
| 40  | 1983   |
| 23  | 2000   |

```js
function solution(age) {
  return 2022 - age + 1;
}
```

---

## 03. 각도기

```bash
각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
```

| angle | result |
| ----- | ------ |
| 70    | 1      |
| 91    | 3      |
| 180   | 4      |

```js
function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else {
    return 4;
  }
}
```

---

## 04. 양꼬치

```bash
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
```

| n   | k   | result  |
| --- | --- | ------- |
| 10  | 3   | 124,000 |
| 64  | 6   | 768,000 |

```js
function solution(n, k) {
  if (n >= 10) {
    k -= ~~(n / 10);
  }
  return 12000 * n + 2000 * k;
}
```

---

## 05. 짝수의 합

```bash
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
```

| n   | result |
| --- | ------ |
| 10  | 30     |
| 4   | 6      |

```js
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}
```

array를 만드는 여러 방법들

```js
Array(10)
  .fill()
  .map((_, i) => i + 1);
'0'.repeat(10).split('');
```

reduce 사용법 [mdn link](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### reduce에 대한 글들

1. [is reduce bad?](https://dev.to/jasterix/is-reduce-bad-2hhd)
2. [reduce vs for-loop](https://codeburst.io/reduce-vs-for-loop-3c1a84e63872)

---

## 06. 배열의 평균값

```bash
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
```

| numbers                                      | result |
| -------------------------------------------- | ------ |
| [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]              | 5.5    |
| [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] | 94.0   |

```js
function solution(numbers) {
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}
```

---

## 07. 머쓱이보다 키 큰 사람

```bash
머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
```

| array                | height | result |
| -------------------- | ------ | ------ |
| [149, 180, 192, 170] | 167    | 3      |
| [180, 120, 140]      | 190    | 0      |

```js
function solution(array, height) {
  return array.filter((v) => v > height).length;
}
```

---

## 08. 중복된 숫자 개수

```bash
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
```

| array              | n   | result |
| ------------------ | --- | ------ |
| [1, 1, 2, 3, 4, 5] | 1   | 2      |
| [0, 2, 3, 4]       | 1   | 0      |

```js
function solution(array, n) {
  return array.filter((v) => v === n).length;
}
```

---

## 09. 피자 나눠 먹기(1)

```bash
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
```

| n   | result |
| --- | ------ |
| 7   | 1      |
| 1   | 1      |
| 15  | 3      |

```js
function solution(n) {
  return Math.ceil(n / 7);
}
```

---

## 10. 짝수 홀수 개수

```bash
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
```

| num_list        | result |
| --------------- | ------ |
| [1, 2, 3, 4, 5] | [2, 3] |
| [1, 3, 5, 7]    | [0, 4] |

```js
function solution(num_list) {
  let answer = [0, 0];
  for (item of num_list) {
    if (item % 2 === 0) {
      answer[0] += 1;
    } else {
      answer[1] += 1;
    }
  }
  return answer;
}

function solution2(num_list) {
  let answer = [0, 0];
  for (item of num_list) {
    answer[item % 2] += 1;
  }
  return answer;
}
```
