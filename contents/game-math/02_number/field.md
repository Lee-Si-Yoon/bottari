# 수의 구조와 표현

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [체 공리 Field Axiom](#%EC%B2%B4-%EA%B3%B5%EB%A6%AC-field-axiom)
  - [덧셈 연산에 대해](#%EB%8D%A7%EC%85%88-%EC%97%B0%EC%82%B0%EC%97%90-%EB%8C%80%ED%95%B4)
  - [곱셈 연산에 대해](#%EA%B3%B1%EC%85%88-%EC%97%B0%EC%82%B0%EC%97%90-%EB%8C%80%ED%95%B4)
  - [덧셈과 곱셈 연산에 대해](#%EB%8D%A7%EC%85%88%EA%B3%BC-%EA%B3%B1%EC%85%88-%EC%97%B0%EC%82%B0%EC%97%90-%EB%8C%80%ED%95%B4)
- [수의 표현](#%EC%88%98%EC%9D%98-%ED%91%9C%ED%98%84)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

체Field($F$)의 구조를 만족하는 수집합은 유리수($Q$)와 실수($R$)이 있다.
이들은 특별한 예외상황 없이 덧셈과 곱셈을 안전하고 자유롭게 사용할 수 있다.

여기서 안전하는 것은 덧셈과 곱셈의 결과가 닫혀있다는 것을 의미한다.

뺄셈과 나눗셈 연산은 고려하지 않아도 되는 이유는 둘 다 교환법칙을 만족하지 않기에,

$$
\begin{matrix}
a - b \neq b - a \\
a + (-b) = (-b) + a \\
\end{matrix}
$$

뺄셈은 덧셈의 역원을 사용하고

$$
\begin{matrix}
a \div b \neq b \div a \\
a \times {1 \over b} = {1 \over b} \times a \\
\end{matrix}
$$

나눗셈은 곱셈의 역원을 사용하면 된다.

그렇기에 수집합의 구조를 분석할때는 덧셈과 곱셈 두가지 연산에 대해서만 살펴보는 것으로 충분하다.

## 체 공리 Field Axiom

### 덧셈 연산에 대해

1. 닫혀있다. 집합 내 원소의 연산 결과가 다시 그 집합 내에 존재한다.
2. 덧셈 항등원 $0$이 존재한다.
3. 모든 원소에 대해 덧셈 역원이 존재한다.
4. 모든 원소에 대해 결합법칙이 성립한다.
5. 모든 원소에 대해 교환법칙이 성립한다.

$$
\begin{gather}
a + 0 = a = 0 + a \tag{2} \\
a + (-a) = 0 = (-a) + a \tag{3} \\
(a + b) + c = a + (b + c) \tag{4} \\
a + b = b + a \tag{5}
\end{gather}
$$

### 곱셈 연산에 대해

1. 닫혀있다. 집합 내 원소의 연산 결과가 다시 그 집합 내에 존재한다.
2. 곱셈 항등원 $1$이 존재한다.
3. $0$ 의외의 모든 원소에 대해 곱셈 역원이 존재한다.
4. $0$ 의외의 모든 원소에 대해 결합법칙이 성립한다.
5. $0$ 의외의 모든 원소에 대해 교환법칙이 성립한다.

$$
\begin{gather}
a \times 1 = a = 1 \times a \tag{2} \\
a \times {1 \over a} = 1 = {1 \over a} \times a \tag{3} \\
(a \times b) \times c = a \times (b \times c) \tag{4} \\
a \times b = b \times a \tag{5}
\end{gather}
$$

### 덧셈과 곱셈 연산에 대해

1. 덧셈에 대한 곱셈의 분배법칙이 성립한다.

$$
\begin{gather}
a \times (b + c) = a \times b + a \times c \\
\end{gather}
$$

덧셈과 곱셈연산에 대해 11가지 공리를 모두 만족하는 수 집합은?

덧셈에 대한 역원이 존재하지 않는 자연수($N$)과
곱셈에 대한 역원이 존재하지 않는 정수($Z$, 정수 Z의 역원은 ${1 \over Z}$이기에)는 만족하지 못한다.

유리수($Q$)와 실수($R$)은 곱셈의 역원이 존재하기 때문에 11가지 공리를 모두 만족한다.

[참조](http://www.ktword.co.kr/test/view/view.php?m_temp1=3860)

## 수의 표현

시각화할 때 실수($R$)를 사용하는 이유는 체의 구조를 지닌 것,
그리고 유리수($Q$)는 $\pi$나 $\sqrt{2}$같은 무리수를 표현할 수 없기에 직선 어느 지점에서는 빈틈이 생기기 때문이다.

실수를 대응시켜 표현한 직선을 수직선Number line이라고 부르며, 직각으로 만나는 직선인 수직선Perpendicular line과 동음이의어이다.
