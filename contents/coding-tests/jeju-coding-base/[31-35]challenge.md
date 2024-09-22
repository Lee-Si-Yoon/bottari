# 31 ~ 35

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [31. 등수 매기기](#31-%EB%93%B1%EC%88%98-%EB%A7%A4%EA%B8%B0%EA%B8%B0)
- [32. 저주의 숫자 3](#32-%EC%A0%80%EC%A3%BC%EC%9D%98-%EC%88%AB%EC%9E%90-3)
- [33. 다항식 더하기](#33-%EB%8B%A4%ED%95%AD%EC%8B%9D-%EB%8D%94%ED%95%98%EA%B8%B0)
- [34. 안전지대](#34-%EC%95%88%EC%A0%84%EC%A7%80%EB%8C%80)
- [35. 겹치는 선분의 길이](#35-%EA%B2%B9%EC%B9%98%EB%8A%94-%EC%84%A0%EB%B6%84%EC%9D%98-%EA%B8%B8%EC%9D%B4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 31. 등수 매기기

```bash
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
```

| score                                                                      | result                |
| -------------------------------------------------------------------------- | --------------------- |
| [[80, 70], [90, 50], [40, 70], [50, 80]]                                   | [1, 2, 4, 3]          |
| [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]] | [4, 4, 6, 2, 2, 1, 7] |

```js
function solution(score) {
  let sum = score.map((v) => v[0] + v[1]);
  let sorted = [...sum].sort((a, b) => b - a);

  return sum.map((v) => sorted.indexOf(v) + 1);
}
```

26번 문제와 마찬가지로 slice()를 하거나 전개를 해서 얕은 복사를 해야하는 문제

---

## 32. 저주의 숫자 3

```bash
3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.
```

| 10진법 | 3x 마을에서 쓰는 숫자 | 10진법 | 3x 마을에서 쓰는 숫자 |
| ------ | --------------------- | ------ | --------------------- |
| 1      | 1                     | 6      | 8                     |
| 2      | 2                     | 7      | 10                    |
| 3      | 4                     | 8      | 11                    |
| 4      | 5                     | 9      | 14                    |
| 5      | 7                     | 10     | 16                    |

| n   | result |
| --- | ------ |
| 15  | 25     |
| 40  | 76     |

```js
function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += 1;
    while (answer % 3 === 0 || answer.toString().split('').includes('3')) {
      answer += 1;
    }
  }
  return answer;
}
```

---

## 33. 다항식 더하기

```bash
한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.
```

| polynomial   | result                       |
| ------------ | ---------------------------- |
| "3x + 7 + x" | "4x + 7"                     |
| "x + x + x"  | "3x"                         |
| "3 + 7"      | "10" 임의로 추가한 edge case |

```js
function solution(polynomial) {
  const arry = polynomial.split(' + ');
  const xS = arry
    .filter((v) => v.includes('x'))
    .map((v) => +v.replace('x', '') || 1);
  const xSum = xS.length > 0 ? xS.reduce((a, c) => a + c) : 0;
  const others = arry
    .filter((v) => !v.includes('x'))
    .reduce((a, c) => a + parseInt(c), 0);

  const answer = [];

  if (xSum) {
    if (xSum === 1) {
      answer.push('x');
    } else {
      answer.push(`${xSum}x`);
    }
  }

  if (others) {
    answer.push(others);
  }

  return answer.join(' + ');
}
```

edge case를 잘 염두에 두자

---

## 34. 안전지대

```bash
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.

지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
```

| board                                                                                                                    | result |
| ------------------------------------------------------------------------------------------------------------------------ | ------ |
| [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]                                    | 16     |
| [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]                                    | 13     |
| [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]] | 0      |

```text
[0, 0, 0, 0, 0];
[0, 0, 0, 0, 0];
[0, 0, 0, 0, 0];
[0, 0, 1, 0, 0];
[0, 0, 0, 0, 0];

이게 아래처럼 되어야 함

[0, 0, 0, 0, 0];
[0, 0, 0, 0, 0];
[0, 1, 1, 1, 0];
[0, 1, 1, 1, 0];
[0, 1, 1, 1, 0];

여기서 0의 개수는 16개
```

```js
function solution(board) {
  const n = board.length;
  const d = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  let dangerZone = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 지뢰인 경우
      if (board[i][j] === 1) {
        d.forEach((v) => {
          let [col, row] = [i + v[0], j + v[1]];
          if (col >= 0 && col < n && row >= 0 && row < n) {
            // 중복을 원치 않는 경우 그냥 set에다 add 박아버리는 게 편함
            dangerZone.add(col + ' ' + row);
          }
        });
      }
    }
  }

  return n * n - dangerZone.size;
}
```

```js
d.forEach((v) => {
  let [col, row] = [i + v[0], j + v[1]];
  if (col >= 0 && col < n && row >= 0 && row < n) {
    dangerZone.add(col + ' ' + row);
  }
});

// 이 부분에 대한 설명
[0, 0, 0];
[0, 1, 0];
[0, 0, 0];

// 이렇게 중앙에서 발견하면 지뢰의 위치는 [1,1]

let [col, row] = [i + v[0], j + v[1]];

// 이걸 풀어보면

[1, 1], [1, 2], [1, 0];
[2, 2], [2, 1], [2, 0];
[0, 0], [0, 1], [0, 2];

// 이걸 정렬해보면
[0, 0], [0, 1], [0, 2];
[1, 0], [1, 1], [1, 2];
[2, 0], [2, 1], [2, 2];

/**
 * 이렇게 [1,1] 주위로 1이 되어야 하는 곳들의 좌표를 반환함
 * 그런데 edge case인 3번째를 보면
 */
[1, 1, 1, 1, 1, 1];
[1, 1, 1, 1, 1, 1];
[1, 1, 1, 1, 1, 1];
[1, 1, 1, 1, 1, 1];
[1, 1, 1, 1, 1, 1];
[1, 1, 1, 1, 1, 1];

/**
 * 와 같이 지뢰의 위치 때문에 col과 row가 음수 혹은 배열의 길이를
 * 넘어가버리는 경우가 생기기에 조건문
 */

if (col >= 0 && col < n && row >= 0 && row < n) {
}

// 를 통과하는 애들만 set으로 밀어주기
```

## 35. 겹치는 선분의 길이

[겹치는 선분의 길이](https://school.programmers.co.kr/learn/courses/30/lessons/120876)

```bash
선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.
```

| lines                     | result |
| ------------------------- | ------ |
| [[0, 1], [2, 5], [3, 9]]  | 2      |
| [[-1, 1], [1, 3], [3, 9]] | 0      |
| [[0, 5], [3, 9], [1, 10]] | 8      |

```js
function solution(lines) {
  // 200개 하는 이유는 제한사항에 -100 ≤ a < b ≤ 100
  let line = new Array(200).fill(0);
  lines.forEach(([min, max]) => {
    // for문에서 첫번째 인자 아예 생략 가능
    for (; min < max; min++) {
      line[min + 100]++;
    }
  });

  return line.filter((v) => v > 1).length;
}
```
