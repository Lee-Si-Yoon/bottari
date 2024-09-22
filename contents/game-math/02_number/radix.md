# 진법

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [10진수 Decimal](#10%EC%A7%84%EC%88%98-decimal)
- [2진수 Bianry](#2%EC%A7%84%EC%88%98-bianry)
- [8진수 Octal](#8%EC%A7%84%EC%88%98-octal)
- [16진수 Hexadecimal](#16%EC%A7%84%EC%88%98-hexadecimal)
- [10진수를 다른 진수로 변환하기](#10%EC%A7%84%EC%88%98%EB%A5%BC-%EB%8B%A4%EB%A5%B8-%EC%A7%84%EC%88%98%EB%A1%9C-%EB%B3%80%ED%99%98%ED%95%98%EA%B8%B0)
  - [10진수 -> 2진수](#10%EC%A7%84%EC%88%98---2%EC%A7%84%EC%88%98)
  - [10진수 -> 8진수](#10%EC%A7%84%EC%88%98---8%EC%A7%84%EC%88%98)
  - [10진수 -> 16진수](#10%EC%A7%84%EC%88%98---16%EC%A7%84%EC%88%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

base또는 N $\cdot$ radix라고 부른다. 수Digit을 표현하는 기수체계(한자리를 나타낼 수 있는 수의 개수)

## 10진수 Decimal

$$
\begin{equation}
\begin{split}
7536 &= 7 \times 10^3 + 5 \times 10 ^ 2 + 3 \times 10^1 + 6 \times 10^0 \\
&= 7 \times 1000 + 5 \times 100 + 3 \times 10 + 6 \times 1 \\
&= 7000 + 500 + 30 + 6 \\
\notag \\
\end{split}
\end{equation}
$$

## 2진수 Bianry

0과 1 두 개의 숫자만을 사용하여 수를 표현하는 진법

$$
\begin{equation}
\begin{split}
1011 &= 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 \\
&= 1 \times 8 + 0 \times 4 + 1 \times 2 + 1 \times 1 \\
&= 8 + 0 + 2 + 1 \\
&= 11 \\
\notag \\
\end{split}
\end{equation}
$$

## 8진수 Octal

0부터 7까지 총 8개의 숫자를 사용하여 수를 표현하는 진법. 컴퓨터의 기계어나 UNIX/LINUX 시스템에서는 권한 등을 표시할 때 씀.

$$
\begin{equation}
\begin{split}
1702 &= 1 \times 8^3 + 7 \times 8^2 + 0 \times 8^1 + 2 \times 8^0 \\
&= 1 \times 512 + 7 \times 64 + 0 \times 8 + 2 \times 1 \\
&= 512 + 448 + 0 + 2 \\
&= 962 \\
\notag \\
\end{split}
\end{equation}
$$

## 16진수 Hexadecimal

0부터 9까지의 숫자와 A부터 F까지의 6개의 알파벳 문자를 사용하여 수를 표현하는 진법. 컴퓨터 메모리 주소나 색상 값 등을 표현하는데 사용된다.

| 10진수 | 16진수 |
| ------ | ------ |
| ...    | ...    |
| 9      | 9      |
| 10     | A      |
| 11     | B      |
| 12     | C      |
| 13     | D      |
| 14     | E      |
| 15     | F      |
| 16     | 10     |
| ...    | ...    |

$$
\begin{equation}
\begin{split}
1A4 &= 1 \times 16^2 + A \times 16^1 + 4 \times 16^0 \\
&= 1 \times 16^2 + 10 \times 16^1 + 4 \times 16^0 \\
&= 256 + 160 + 4 \\
&= 420 \\
\notag \\
\end{split}
\end{equation}
$$

---

## 10진수를 다른 진수로 변환하기

### 10진수 -> 2진수

$$
\begin{alignat}{2}
11 = 2 \times 5 + 1 \notag \\
5 = 2 \times 2 + 1 \notag \\
2 = 2 \times 1 + 0 \notag \\
1 = 2 \times 0 + 1 \notag \\
\end{alignat}
$$

위와 같은 과정을 거쳐서 11은 1011

### 10진수 -> 8진수

$$
\begin{alignat}{2}
191 = 8 \times 23 + 7 \notag \\
23 = 8 \times 2 + 7 \notag \\
2 = 8 \times 0 + 2 \notag \\
\end{alignat}
$$

위와 같은 과정을 거쳐서 191은 277

### 10진수 -> 16진수

16으로 계속 나눠서 구해도 되지만, 8진수로 먼저 바꾼 다음 2진수로 바꾸고, 그 다음 16진수로 변환하는 것이 더 빠르다.

이때 비트bit의 개념을 더하면, 8진수를 표현할땐 $2^3$ 즉 3개의 bit이 필요해진다. 16진수를 표현할땐 $2^4$, 4개의 bit로 표현 가능하다.

= 뒤에서부터 8진수는 3자리씩, 16진수는 4자리씩 끊어본다

$$
\begin{alignat}{1}
191 = 8 \times 23 + 7 \notag \\
23 = 8 \times 2 + 7 \notag \\
2 = 8 \times 0 + 2 \notag \\
\text{191} = \text{8진수로 277} \\
\notag \\
0 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 \notag = 2 = 010 \\
7 = 111 \notag \\
7 = 111 \notag \\
\text{277(8)} = \text{2진수로 010111111} \\
\notag \\
1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 1011 = 11(B)  \notag \\
1111 = 15(F) \notag \\
\text{010111111(2)} = \text{16진수로 BF} \\
\end{alignat}
$$
