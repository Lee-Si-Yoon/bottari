# 함수

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [함수](#%ED%95%A8%EC%88%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

상자 함, 이 상자를 통과하는 과정
첫번째 집합의 모든 원소가 빠짐없이 두번째 집합의 어떤 원소에 대응되는 관계

1. 첫번째 집합의 모든 원소에 대한 대응관계가 존재해야 함
2. 첫번째 집합의 원소는 두번째 집합의 한 원소에만 대응해야 함, 첫번째 집합의 원소가 두번 쏘면 그건 함수가 아님

```plain
X --f--> Y
1 -----> a
2 --↘️    b
     --> c
```

- 대응: 화살 궤적
- 정의역: 궁사, X의 원소들중 화살을 쏘는 놈
- 공역: 빈 과녁, Y의 원소들중 X의 화살을 맞지 않은 놈, 과녁은 선택권이 없다
- 치역: 맞은 과녁, Y의 원소들중 X의 화살을 맞은 놈

치역은 공역의 부분집합, 치역 ⊂ 공역

정의역이 실수 전체라면? 정의역이 무한집합이 되버림, 화살이 무한개 이건 그림으로 표현할 수 없음, 이럴때 이거는 그림으로 어떻게 나타내나? → 이럴 때 그래프를 그리게 됨

위 개념을 다시 적용해보면 그래프에서 어떤 x값 하나를 선택하더라도 y값이 하나면 그건 함수임 → 그래서 등장하는 vertical line test

그래프에 세로줄을 딱 그어봤을 때 교점이 하나만 나오면 그건 함수라고 볼 수 있다

```ts
// 원래 함수 f(x) = x^2
function originalFunction(x: number) {
  return x ** 2;
}

// 합성함수 g(x) = f(f(x))
function compositeFunction(x: number) {
  return originalFunction(originalFunction(x));
}

// 역함수
function inverseFunction(y: number) {
  return Math.sqrt(Math.sqrt(y));
}

// 테스트
console.log(originalFunction(2), 4);
// originalFunction(originalFunction(2)) = originalFunction(4) = 16;
console.log(compositeFunction(2), 16);
console.log(inverseFunction(16), 2);
// (compositeFunction(inverseFunction(16)) = compositeFunction(2) = 16)
console.log(compositeFunction(inverseFunction(16)), 16);
```
