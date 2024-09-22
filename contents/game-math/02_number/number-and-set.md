# 수와 집합

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [이항연산](#%EC%9D%B4%ED%95%AD%EC%97%B0%EC%82%B0)
  - [닫혀있음 Clousre](#%EB%8B%AB%ED%98%80%EC%9E%88%EC%9D%8C-clousre)
  - [교환, 결합, 분배 법칙](#%EA%B5%90%ED%99%98-%EA%B2%B0%ED%95%A9-%EB%B6%84%EB%B0%B0-%EB%B2%95%EC%B9%99)
    - [교환법칙 communtative law](#%EA%B5%90%ED%99%98%EB%B2%95%EC%B9%99-communtative-law)
    - [결합법칙 associative law](#%EA%B2%B0%ED%95%A9%EB%B2%95%EC%B9%99-associative-law)
    - [분배법칙 distributive law](#%EB%B6%84%EB%B0%B0%EB%B2%95%EC%B9%99-distributive-law)
  - [항등원 Identity](#%ED%95%AD%EB%93%B1%EC%9B%90-identity)
  - [역원 Inverse](#%EC%97%AD%EC%9B%90-inverse)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

집합Set이라는 개념으로 수를 이해하는 것, 집합은 서로 구분되는 원소로 구성된 묶음을 의미하고 이러한 집합론을 소박한 집합론Naive set theory라고 한다

| 분류                     | 정의                                                                                                                                   | 기호 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 자연수 natural number    | 물건을 세거나 순서를 지정하기 위한 수의 집합                                                                                           | $N$  |
| 정수 integer             | 자연수와 음수, $0$을 포함하는 집합                                                                                                     | $Z$  |
| 유리수 rational number   | 분모가 $0$이 아닌 두 정수의 비율 혹은 분수로 나타낼 수 있는 수의 집합                                                                  | $Q$  |
| 무리수 irrational number | 두 정수 비 혹은 분수로 나타낼 수 없는 수의 집합                                                                                        | $I$  |
| 실수 float               | 유리수 + 무리수                                                                                                                        | $R$  |
| 복소수 complex number    | 실수와 제곱하면 $-1$이 되는 허수 단위 $i$를 조합해 $a + b \cdot i$ (a, b는 실수) 형태로 표현하는 수의 집합                             | $C$  |
| 사원수 quaternion        | 실수와 제곱하면 $-1$이되는 세 허수 단위를 조합해 $a + b \cdot i + c \cdot j + d \cdot k$ (a, b, c, d는 실수) 형태로 표현하는 수의 집합 | $H$  |

집합의 성질을 참과 거짓으로 명확하게 구분해줄 수 있는 명제, 증명할 필요가 없는 명제는 공리Axiom라고 부르며, 공리를 기반으로 대상을 구분하는 집합론을 공리적 집합론Axiomatic set theory이라고 한다.
공리적 집합론에서는 수가 가지는 연산에 대한 공리를 기반으로 수를 분류한다.

수 집합은 원소Element를 이용해 연산을 한다. 사칙연산(더하기 빼기, 곱하기, 나누기)은 두개의 원소를 이용해 새로운 원소를 만들어내기에 이항연산Binary operation이라고 한다.

## 이항연산

| 성질     | 정의                                                                                                                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 닫혀있음 | 어떤 집합에서 두 원소를 이용한 이항연산의 결과가가 항상 그 집합에 속함                                                             |
| 교환법칙 | 두 원소의 좌우 순서를 바꿔도 결과가 동일한 성질                                                                                    |
| 결합법칙 | 세 원소의 연산 순서를 바꿔도 결과가 동일한 성질                                                                                    |
| 분배법칙 | 두 이항연산에 대해 $a \cdot (b + c) = a \cdot b + a \cdot c$ 그리고 $(b + c) \cdot a = b \cdot a + c \cdot a$의 결과가 나오는 성질 |
| 항등원   | 이항연산의 결과가 자기 자신이 되는 특별한 원소 ($a \circ b = a$)                                                                   |
| 역원     | 이항연산의 결과가 항등원이 되는 특별한 원소                                                                                        |

### 닫혀있음 Clousre

같은 집합에 속한 2개의 수를 투입한 이항연산의 결과가 항상 투입한 집합에 속한다면 그 이항연산은 해당 집합에 대해 닫혀있다라고 표현한다.(e.g. 정수+정수=정수)

### 교환, 결합, 분배 법칙

이항연산은 교환법칙, 결합법칙, 분배법칙이라는 3가지 성질을 지닌다.

#### 교환법칙 communtative law

순서에 관계없이 동일한 결과가 나온다.

$$
\begin{matrix}
a + b = b + a \\
a \times b = b \times a
\end{matrix}
$$

#### 결합법칙 associative law

연산이 두 번 이상 연속될 때, 앞의 연산을 먼저 계산한 결과와 뒤의 연산을 계산한 결과가 같다.

$$
\begin{matrix}
(a + b) + c = a + (b + c) \\
(a \times b) \times c = a \times (b \times c)
\end{matrix}
$$

#### 분배법칙 distributive law

서로 다른 2가지 연산에 대해 다음의 규칙(좌분배, 우분배법칙)이 성립하는 것.

$$
\begin{gather}
a \times (b + c) = a \times b + a \times c \tag{좌분배법칙} \\
(b + c) \times a = b \times a + c \times a \tag{우분배법칙}
\end{gather}
$$

### 항등원 Identity

임의의 수와의 연산 결과를 항상 동일한 수로 만들어주는 특별한 수, 아래 수식에선 $b$가 항등원이다.
실수 집합($R$)을 예시로 덧셈의 항등원은 0이고 곱셈의 항등원은 $1$이다.

$$
\begin{gather}
a \times b = a \tag{*} \\
a + 0 = a \tag{덧셈의 항등원} \\
a \times 1 = a \tag{곱셈의 항등원}
\end{gather}
$$

### 역원 Inverse

임의의 수와 연산결과를 항상 항등원으로 만들어주는 특별한 수, 아래 수식에선 $c$가 역원이다.
마찬가지로 실수 집합($R$)을 예시로 덧셈의 역원은 $-a$고 곱셈의 역원은 ${1 \over a}$이다.

역원은 연산에 따라 일정한 패턴을 보인다.

덧셈 역원은 주어진 수에서 부호가 반대인 수가 되므로 반대수Opposite number라고 부른다.

곱셈 역원은 분자가 $1$이고 분모는 주어진 수가 되므로 역수Reciprocal이라고 한다.
단 분모가 $0$이 되는 분수는 존재하지 않으므로 $0$의 곱셈 역원은 없다.

$$
\begin{gather}
a \circ c = b \tag{*} \\
a + (-a) = 0 \tag{덧셈의 역원} \\
a \times {1 \over a} = 1 \tag{곱셈의 역원} \\
\end{gather}
$$
