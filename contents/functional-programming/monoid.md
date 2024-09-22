# Monoid 모노이드 조각글 모음

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [By Playframework](#by-playframework)
- [By The Man](#by-the-man)
- [By lionhairdino](#by-lionhairdino)
  - [반군semigroup과 차이](#%EB%B0%98%EA%B5%B0semigroup%EA%B3%BC-%EC%B0%A8%EC%9D%B4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

함수형 프로그래밍에 입문하면서 여기만큼 각자 설명하고 있는게 조금씩 달라서
뭐가 진짜인지 알기 힘들기에, 각 글들의 중요부분을 모아보고 정리한 글입니다

## By Playframework

[링크](https://kpug.github.io/fp-gitbook/Chapter3.html)

- 집합(Set): e.g. 정수집합
- 마그마(Magma): 집합에 이항 연산자를 추가한 것
- 반군(Semigroup): 마그마가 결합법칙을 만족한 것

결합 법칙은 연산의 결과가 연산의 순서에 영향을 받거나 받지 않는 것을 말한다.
정수의 덧셈을 보면, 5+2+4 의 연산에 대해 (5+2)+4 와 5+(2+4)의 결과는 항상 같다.

모노이드: 모노이드는 항등원을 갖는, 결합 법칙을 따르는 이항 연산을 갖춘 대수 구조

즉 반군이 항등원을 가지면 모노이드라고 할 수 있다

그런데 왜 모노이드에 대해 알아야 하는 걸까? 모노이드는 Foldable을 지원하는 자료 구조에 대해 접기 연산을 할 수 있다는 것과, 그러한 연산을 병렬로 처리할 수 있다는 말과 같기 때문이다.

```js
// 결합 법칙을 만족해서 아래 두 연산 동일 결과 반환
op(op(op(1, 2), 3), 4); // foldLeft
op(1, op(2, op(3, 4))); // foldRight

// 아래 연산도 같은 결과, 병렬처리 가능
op(op(1, 2), op(3, 4));
```

## By The Man

[링크](https://theworldaswillandidea.tistory.com/147)

범주란, 대상과 사상의 모음이다.

모노이드는 함수형 프로그래밍에서 다음의 몇 가지 주요 원칙과 잘 어울립니다.

- 합성 가능성(Composability): 모노이드는 결합법칙이 성립하기 때문에, 순서에 상관없이 작은 단위의 연산을 조합하여 더 큰 연산을 구성할 수 있습니다.
- 불변성(Immutability): 모노이드는 불변성과 관련이 깊습니다. 모노이드 연산은 새로운 값을 생성하기 때문에 기존의 값을 변경하지 않습니다.
- 추상화(Abstraction): 모노이드는 다양한 자료구조와 알고리즘에 일반화될 수 있는 추상적인 개념입니다.
- 병렬 처리(Parallelism): 모노이드는 결합법칙을 만족하므로, 병렬 처리에 유리합니다. 연산 순서가 중요하지 않기 때문에, 여러 서브태스크로 쪼개어 동시에 실행하고 그 결과를 다시 결합할 수 있습니다.

모노이드는 하나의 집합에 이항 연산이 정의되어 있고, 그 연산이 결합법칙을 만족하며 항등원이 존재하는 대수 구조로, 함수형 프로그래밍에서 합성 가능성, 불변성, 추상화 및 병렬 처리와 같은 특성을 지원합니다.

```ts
// 모노이드 인터페이스를 정의합니다.
interface Monoid<T> {
  // 항등원: 이항 연산에서 어떤 값과 연산했을 때 그대로 반환되는 값을 의미합니다.
  empty: () => T;

  // 이항 연산: 두 개의 값을 결합하는 함수입니다. 결합법칙이 성립해야 합니다.
  // (a ⊕ b) ⊕ c = a ⊕ (b ⊕ c)
  concat: (a: T, b: T) => T;
}

// 숫자 합 모노이드.
const sumMonoid: Monoid<number> = {
  empty: () => 0, // 항등원: 0
  concat: (a: number, b: number) => a + b, // 이항 연산: 숫자 합산
};

// fold 함수를 이용하여 주어진 배열을 모노이드 연산으로 축약합니다.
// 이 함수는 재사용 가능하며, 다양한 모노이드 인스턴스를 사용할 수 있습니다.
function fold<T>(monoid: Monoid<T>, values: T[]): T {
  return values.reduce((acc, val) => monoid.concat(acc, val), monoid.empty());
}

// 숫자 합 모노이드를 이용하여 숫자 배열의 합을 구합니다.
const numbers = [1, 2, 3, 4, 5];
const sum = fold(sumMonoid, numbers);
console.log(sum); // 출력: 15
```

## By lionhairdino

[링크](https://lionhairdino.github.io/posts/2023-02-16-monoid.html)

“왜 마그마magma, 반군semigroup, 모노이드monoid, 군group 등 많은 추상 대수 구조가 있는데, 이 들 중 모노이드가 왜 특별한 대우를 받고 있을까?”

“항등원이, 아무 일도 안하는 구성원이 왜 필요할까?”

**“한 가지 모양으로 보자”**
제가 생각하는 모노이드는 바로 위 문장에 관한 얘기입니다.

두 가지 정보를 하나로 합치거나, 적어도 하나의 이름으로 부를 수 있게 해주는 연산으로 보고 있습니다.

**모노이드monoid 단어**
어미에 ~oid가 붙으면, “딱 그 건 아닌데, 그 것 같은 것들”을 뜻합니다. humanoid, android, roboid 주로 인간을 흉내 내는 인간 같은 로봇에 붙는 말등으로 만났던 말입니다. 뭔가 mono는 아닌데, mono같은, mono로 볼 수 있는 무언가로 봅니다.

0이 없는 자연수 시스템이 있습니다. 1,2,3...

2는 1과 1을 더한 것으로 표현할 수 있습니다. 2 = 1 + 1일때 1을 더하기를 쓴 모양으로 표현하려면 어떻게 할까요? → 표현할 방법이 없습니다.

0을 여기에 추가하게 되면,

1은 0과 1을 더한 것으로 표현할 수 있습니다. 1 = 1 + 0
0은 0과 0을 더한 것으로 표현할 수 있습니다. 0 = 0 + 0

시스템에 0을 추가하면서, 0을 포함한 모든 구성 요소를 a + a 꼴로 표현할 수 있게 되었습니다. 0이 있어, 모든 구성 요소를 하나의 모양으로 추상화할 수 있게 되었습니다.

### 반군semigroup과 차이

모노이드에서 항등원을 빼면 반군이 됩니다. 반군도 역시 이항 연산은 닫혀 있기에, 어떤 구성원 둘의 연산 결과도 다시 반군의 구성원이 됩니다. 자연수 1,2,3,4,5...있을 때 어떤 두 구성원을 골라도, 결과도 자연수가 됩니다.

여기에 항등원이 있으면 무슨 일이 생길까요? → “자기 자신도 연산이 들어간 모양으로 표현할 수 있습니다.”

1과 1 + 0의 차이는 무엇일까요?

TODO WIP

---

[By 전인건](https://dev.to/ingun37/monad-monoid-40if)
