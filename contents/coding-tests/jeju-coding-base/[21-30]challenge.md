# 21 ~ 30

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [21. 팩토리얼](#21-%ED%8C%A9%ED%86%A0%EB%A6%AC%EC%96%BC)
- [22. k의 개수](#22-k%EC%9D%98-%EA%B0%9C%EC%88%98)
- [23. 가까운 수](#23-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EC%88%98)
- [24. 한 번만 등장한 문자](#24-%ED%95%9C-%EB%B2%88%EB%A7%8C-%EB%93%B1%EC%9E%A5%ED%95%9C-%EB%AC%B8%EC%9E%90)
- [25. 잘라서 배열로 저장하기](#25-%EC%9E%98%EB%9D%BC%EC%84%9C-%EB%B0%B0%EC%97%B4%EB%A1%9C-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0)
  - [Regex Quantifiers](#regex-quantifiers)
- [26. 진료순서 정하기](#26-%EC%A7%84%EB%A3%8C%EC%88%9C%EC%84%9C-%EC%A0%95%ED%95%98%EA%B8%B0)
- [27. 영어가 싫어요](#27-%EC%98%81%EC%96%B4%EA%B0%80-%EC%8B%AB%EC%96%B4%EC%9A%94)
- [28. 외계어 사전](#28-%EC%99%B8%EA%B3%84%EC%96%B4-%EC%82%AC%EC%A0%84)
- [29. 문자열 밀기](#29-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%B0%80%EA%B8%B0)
- [30. 컨트롤 제트](#30-%EC%BB%A8%ED%8A%B8%EB%A1%A4-%EC%A0%9C%ED%8A%B8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 21. 팩토리얼

```bash
`i`팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
* i! ≤ n
```

| n       | result |
| ------- | ------ |
| 3628800 | 10     |
| 7       | 3      |

```js
function solution(n) {
  let i = 1;
  let factorial = 1;
  while (factorial <= n) {
    i += 1;
    factorial *= i;
  }
  return i - 1;
}
```

e.g.
| i | f | f <= 120 |
| --- | --- | ---------- |
| 1 | 1 | 1 <= 120 |
| 2 | 2 | 2 <= 120 |
| 3 | 6 | 6 <= 120 |
| 4 | 24 | 24 <= 120 |
| 5 | 120 | 120 <= 120 |

---

## 22. k의 개수

```bash
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
```

| i   | j   | k   | result |
| --- | --- | --- | ------ |
| 1   | 13  | 1   | 6      |
| 10  | 50  | 5   | 5      |
| 3   | 10  | 2   | 0      |

```js
// method chaining vs for of
function solution(i, j, k) {
  return (
    Array(j - i + 1)
      .fill(i)
      .map((v, index) => v + index)
      .join('')
      .split(k).length - 1
  );
}

function solution2(i, j, k) {
  let s = '';
  for (i; i <= j; i++) {
    s += i;
  }
  return s.split(k).length - 1;
}
```

어떤 변수를 기준으로 split하면 그 기준이 되었던 변수 + 1 개의 value를 가진 array가 되는 것을 이용

```js
'hotdog and pizza'.split('h');
// ['', 'otdog and pizza'].length = 2
// 하지만 h는 한개였으므로 -1 추가하기
```

유사한 문제 [google 입사 문제](https://codingdojang.com/scode/393)

---

## 23. 가까운 수

```bash
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
```

| array        | n   | result |
| ------------ | --- | ------ |
| [3, 10, 28]  | 20  | 28     |
| [10, 11, 12] | 13  | 12     |

```js
function solution(array, n) {
  array.sort((a, b) => a - b);

  let diff = Infinity;
  let result = 0;

  for (let i of array) {
    if (Math.abs(n - i) < diff) {
      diff = Math.abs(n - i);
      result = i;
    }
  }

  return result;
}

function solution2(array, n) {
  array.sort((a, b) => a - b);

  const index = Math.min(...array.map((a) => Math.abs(n - a)));
  return array.find((a) => Math.abs(n - a) === index);
}
```

sorting을 안하면 틀리는 함정 문제 조건 중 **가장 가까운 수가 여러 개일 경우 더 작은 수를 return**이기에 작은 수부터 순회를 해야함

---

## 24. 한 번만 등장한 문자

```bash
문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
```

| s           | result |
| ----------- | ------ |
| "abcabcadc" | "d"    |
| "abdc"      | "abcd" |
| "hello"     | "eho"  |

```js
function solution(s) {
  return (
    Array.from(s)
      // split 했을때 한번만 나누면 length는 무조건 2
      .filter((v) => s.split(v).length == 2)
      .sort()
      .join('')
  );
}

function solution2(s) {
  return Array.from(s)
    .filter((v) => s.match(new RegExp(v, 'g')).length == 1)
    .sort()
    .join('');
}
```

---

## 25. 잘라서 배열로 저장하기

```bash
문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
```

| my_str             | n   | result                       |
| ------------------ | --- | ---------------------------- |
| "abc1Addfggg4556b" | 6   | ["abc1Ad", "dfggg4", "556b"] |
| "abcdef123"        | 3   | ["abc", "def", "123"]        |

```js
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'));
}

function solution2(my_str, n) {
  let result = [];
  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }
  return result;
}
```

### [Regex Quantifiers](https://javascript.info/regexp-quantifiers)

---

## 26. 진료순서 정하기

```bash
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
```

| emergency             | result                |
| --------------------- | --------------------- |
| [3, 76, 24]           | [3, 1, 2]             |
| [1, 2, 3, 4, 5, 6, 7] | [7, 6, 5, 4, 3, 2, 1] |
| [30, 10, 23, 6, 100]  | [2, 4, 3, 5, 1]       |

```js
function solution(emergency) {
  let order = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => order.indexOf(v) + 1);
}

function solution2(emergency) {
  let order = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => order.indexOf(v) + 1);
}
```

점수순으로 정렬할때 slice()를 통해서 얕은 복사를 한번 해서 emergency 자체를 update하는 게 아니라 참조형으로 만들 수 있는가를 물어보는 함정 문제

---

## 27. 영어가 싫어요

```bash
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
```

| numbers                                | result    |
| -------------------------------------- | --------- |
| "onetwothreefourfivesixseveneightnine" | 123456789 |
| "onefourzerosixseven"                  | 14067     |

```js
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return +numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => obj[v],
  );
}

function solution2(numbers) {
  numbers = numbers
    .replaceAll('one', '1')
    .replaceAll('two', '2')
    .replaceAll('three', '3')
    .replaceAll('four', '4')
    .replaceAll('five', '5')
    .replaceAll('six', '6')
    .replaceAll('seven', '7')
    .replaceAll('eight', '8')
    .replaceAll('nine', '9')
    .replaceAll('zero', '0');
  return +numbers;
}
```

[regex replacer](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter)를 함수로도 지정 할 수 있음

---

## 28. 외계어 사전

```bash
PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
```

| spell                | dic                                     | result |
| -------------------- | --------------------------------------- | ------ |
| ["p", "o", "s"]      | ["sod", "eocd", "qixm", "adio", "soo"]  | 2      |
| ["z", "d", "x"]      | ["def", "dww", "dzx", "loveaw"]         | 1      |
| ["s", "o", "m", "d"] | ["moos", "dzx", "smm", "sunmmo", "som"] | 2      |

```js
function solution(spell, dic) {
  return dic.some(
    (v) => [...v].sort().toString() === [...spell].sort().toString(),
  )
    ? 1
    : 2;
}
```

배열이 같은지를 비교할 때

```js
[1, 2, 3] === [1, 2, 3]; // false
[(1, 2, 3)].toString() === [1, 2, 3].toString(); // true
// 주소값을 참조하기 때문임
```

---

## 29. 문자열 밀기

```bash
문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
```

| A       | B       | result |
| ------- | ------- | ------ |
| "hello" | "ohell" | 1      |
| "apple" | "elppa" | -1     |
| "atat"  | "tata"  | 1      |
| "abc"   | "abc"   | 0      |

```js
function solution(A, B) {
  return (B + B).indexOf(A);
}
```

A를 두번 반복시켜서 hellohello를 해보고 거기서 B가 어디있는지 index를 찾아보면
| A | B | result |
| ---------- | ------------------------ | ------ |
| "hello" | "ohell" | 1 |
| "hellohello" | -| ohell가 index 5 - 4 = 1 |
| "hello" | "llohe" | 3 |
| "hellohello" | -| llohe가 index 5 - 2 = 3 |
| "hello" | "hello" | 5 |
| "hellohello" |- | hello가 index 5 - 5 = 0 |

반대로 B를 두번 반복시켜서 index를 찾아보면

| A       | B            | result          |
| ------- | ------------ | --------------- |
| "hello" | "ohell"      | 1               |
| -       | "ohellohell" | hello가 index 1 |
| "hello" | "lohel"      | 2               |
| -       | "lohellohel" | hello가 index 2 |
| "hello" | "elloh"      | 4               |
| -       | "ellohelloh" | hello가 index 4 |

---

## 30. 컨트롤 제트

```bash
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
```

| s             | result |
| ------------- | ------ |
| "1 2 Z 3"     | 4      |
| "10 20 30 40" | 100    |
| "10 Z 20 Z 1" | 1      |
| "10 Z 20 Z"   | 0      |
| "-1 -2 -3 Z"  | -3     |

```js
function solution(s) {
  s = s.split(' ');
  let result = [];
  for (let i of s) {
    if (i === 'Z') {
      result.pop();
    } else {
      result.push(+i);
    }
  }
  return result.reduce((a, c) => a + c, 0);
}
```
