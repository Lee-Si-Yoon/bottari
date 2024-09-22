# Functor 펑터 조각글 모음

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [By](#by)
- [By Playframework](#by-playframework)
- [By Evan-moon](#by-evan-moon)
- [By The Man](#by-the-man)
- [By lionhairdino](#by-lionhairdino)
- [By Karl Saehun Chung](#by-karl-saehun-chung)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

함수형 프로그래밍에 입문하면서 여기만큼 각자 설명하고 있는게 조금씩 달라서
뭐가 진짜인지 알기 힘들기에, 각 글들의 중요부분을 모아보고 정리한 글입니다

## By

수학에서 a + b = c를 표현 할 때 a와 b의 관계의 결과가 c

수학도 프로그래밍처럼 f라는 함수가 0 -> 1의 대응을 하고 있을 때 이걸 재사용해서 1 -> 2로 가는
함수 g를 정의하기 위해서는 이게 재사용 가능하다는 것을 증명할 수 있어야 함
그러기 위해서 두 이항연산이 유사하다는 걸 증명하기 위한 카테고리와 펑터

모든 집합을 내포하는 집합을 표현하기 위한 카테고리

## By Playframework

[링크](https://kpug.github.io/fp-gitbook/Chapter4.html)

Functor는 보통 펑터라고 부르며, 프로그래머 세계에서는 함수자

범주론에서 함자(函子, 영어: functor 펑크터[*])는 두 범주 사이의 함수에 해당하는 구조

자료 타입에서 map 구현이 가능하고, 특정 법칙을 만족한다면 펑터다
map은 내부의 요소들만 수정하며, 타입을 변경하지는 않는다.
이를 구조의 보존(Structure-Preserving) 법칙이라 하며, 함수자를 정의하는 중요한 법칙

항등 함수를 적용한다면 자기 자신이며 아래와 같은 수식 만족한다

```js
x.map((a) => a) == x;
```

펑터는 map함수만으로도 추가적인 유용한 연산들을 정의 가능해짐

## By Evan-moon

[링크](https://evan-moon.github.io/2020/01/27/safety-function-composition/)

펑터는 값을 품고 있는 어떠한 박스의 형태, 정상적인 결과와 사이드 이펙트를 감싸서 처리할 수 있는 무언가
어떤 x라는 값을 바로 사용하는 것이 아니라 safety 같은 박스에 넣어서 사용하는 것
펑터는 값을 감싸서 안전하게 값을 사용하고 싶다라는 니즈에 부합하는 개념

```plain
    C                      F(C)

x --f--> y           F(x)--F(f)-->F(y)
  ↘️     |              ↘️          |
   g∘f  g    --F-->      F(g∘f)   g
     ↘️  |                   ↘️     |
        z                        F(z)
```

```js
const 대상x = 1;
const 대상y = 2;
const 사상f = (x) => x + 1;

사상f(대상x) === 대상y; // true

const 대상x_2 = 펑터(1);
const 대상y_2 = 펑터(2);
const 사상f_2 = 펑터((x) => x + 1);

사상f_2(대상x_2) === 대상y_2; // true
```

위와 같이 카테고리를 다른 카테고리로 바꿔주는 행위(mapping)를 할 수 있으면 펑터
펑터는 단지 새로운 카테고리를 표현하는 수단이기 때문에 기존 카테고리의 대상을 변경해서는 안된다

```ts
// Functor<number>
const array: Array<number> = [1, 2, 3];

// 트랜스폼 함수: (x: number) => string
const toString = (v) => v.toString();

// 매핑!
array.map(toString);

// 새로운 펑터 Functor<string>
// ['1', '2', '3']
```

`Functor<T> → Functor<U>`라는 변환만 수행할 수 있으면 되는 것, 위 예시에서도 Array는 깨지지 않았음

## By The Man

[링크](https://theworldaswillandidea.tistory.com/148)

펑터를 사용하면 내부 값을 변경하지 않고 외부에서 연산 적용 가능해서 불변성을 유지할 수 있음

값의 타입 변환 가능, 일반적인 함수 적용은 적용할 함수의 타입 변환을 처리 못함

```plain
범주 D : 대상: A, B, C  //  사상: f: A -> B, g: B -> C, h: A -> C (여기서 h = g ∘ f)

범주 E : 대상: X, Y, Z  //  사상: F(f): X -> Y, F(g): Y -> Z, F(h): X -> Z (여기서 F(h) = F(g) ∘ F(f))
```

펑터는 다음과 같은 조건 충족해야함

- 대상 대응: 펑터 F는 범주 D의 대상 A, B, C를 범주 E의 대상 X, Y, Z로 대응시킵니다.
  예를 들어, F(A) = X, F(B) = Y, F(C) = Z입니다
- 사상 대응: 펑터 F는 범주 D의 사상 f, g, h를 범주 E의 사상 F(f), F(g), F(h)로 대응시킵니다.
  예를 들어, F(f)는 X -> Y로 가는 사상, F(g)는 Y -> Z로 가는 사상, F(h)는 X -> Z로 가는 사상입니다
- 항등 사상 보존: 펑터 F는 범주 D의 모든 대상 A, B, C에 대해 항등 사상을 보존합니다.
  예를 들어, 범주 D의 대상 A의 항등 사상은 id_A입니다. 펑터 F는 이를 범주 E의 대상 X의 항등 사상 id_X와 같게 만듭니다. 즉, F(id_A) = id_X입니다. 이는 다른 대상 B와 C에 대해서도 동일하게 적용됩니다
- 합성 사상 보존: 펑터 F는 범주 D의 모든 사상 f, g, h에 대해 합성 사상을 보존합니다.
  예를 들어, 범주 D에서 h = g ∘ f라고 가정합니다. 이 경우, 펑터 F는 범주 D에서 F(h) = F(g) ∘ F(f)를 만족해야 합니다. 즉, 범주 D의 사상의 합성을 범주 E의 사상의 합성으로 올바르게 변환합니다

엔도펑터는 펑터의 특별한 경우, '엔도'라는 단어는 그리스어 'endo'에서 유래되었으며 '내부의'나 '내부로'라는 뜻 → 범주 내에서 작동하는 펑터
일반적인 펑터는 다른 범주로 대응시키는 것, 엔도펑터는 같은 범주 내에서 작동하는 것

## By lionhairdino

[링크](https://lionhairdino.github.io/posts/2023-03-09-functor.html)

함수도 매핑 동작을 하고 펑터도 매핑 동작을 하는데 왜 다른 이름인가?

카테고리간 매핑을 하는 연산을 펑터라 부름, 펑터는 대상 하나와 다른 대상 하나를 매핑하는데 그치는게 아니라, 모피즘도 매핑하고 모피즘의 합성도 매핑함(구조가 보존되고 functoriality도 따라야함)

functoriality

- 항등사상에 펑터를 적용한 것과, 도착할 곳의 항등사상이 같다 → Identity Law: **`F(id_X) = id_FX`**
- 합성한 것에 펑터를 적용하든, 펑터를 적용후 합성하든 같다 → Composition Law: **`f:X->Y`**, **`g:Y->Z`** 일 때 **`F(g∘f) = Fg ∘ Ff`**

값을 매핑하는 걸 함수라 하고 구조를 매핑하면 펑터라 부름

펑터는 한 시스템을, 필요한 구조는 똑같이 갖고 있고, 전체 모양은 닮은 것들로 변환할 수 있는 도구

출발지 카테고리와 도착지 카테고리가 동일한 경우의 매핑을 엔도펑터라고 부른다

## By Karl Saehun Chung

[링크](https://overthecode.io/i-am-js-developer-and-still-dont-know-monad/)

펑터란 map 인터페이스를 가지고 있는 타입이라고 한다.

일반 함수로 구현할 수도 있다.

```js
const Functor = (value) => ({
  value,
  map: (fn) => Functor(fn(v)),
});
```

그렇다면 이 코드는 어떤가?

```js
const cat = (is, awesome) => ({ ...awesome, value: is(awesome.value) });
```

value 속성을 가진 타입의 오브젝트와 cat함수는 펑터를 형성한다고 말할 수 있다.

map이란 이름은 펑터의 본질이 아니다. map이 어떤 오브젝트의 메소드로 존재해야하는 것도 아니다. 생성자가 있어야하는 것도 아니다.
타입, 카테고리 이론과 형식에 얽매이다 보면 본질을 파악하기 힘들다.

그래서 결국 무엇을 하는 것인데? 라는 의문을 품자.
펑터란 어떤 값을 들고 있는 구조와 구조를 유지한채 그 값에다 함수를 적용할 수 있는 인터페이스의 조합이다.
