# Data structure

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [데이터 저장방식](#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5%EB%B0%A9%EC%8B%9D)
  - [Int type](#int-type)
  - [char type](#char-type)
  - [list type](#list-type)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

메모리에는 크게 2가지, 하드디스크(SSD, HDD)와 RAM메모리. 코드 파일을 작성하고 저장해두면 하드디스크에 그리고 해당 파일을 실행하면 RAM메모리에 올라가게 됨. 이 RAM메모리를 낭비없이 잘 쓰기 위한 자료구조다.

RAM메모리에는 전기신호를 저장할 수 있는 트랜지스터라는 작은 부품들이 있음. ON이면 1 OFF면 0을 나타냄 이를 이용해서 이진수Binary digit을 표현할 수 있게 됨. Binary digit을 줄여서 bit라고 부름.

1bit는 2가지 표현가능 -> 2bit는 $2^2$, 4가지 표현가능 -> 4bit(1nibble)는 $2^4$ 16가지 -> 8bit는 $2^8$, 256가지를 표현가능하며 byte로 불림

1byte가 $2^{10}$개, 1024개 모이면 1KiB가 됨 -> 1KiB가 $2^{10}$개 모이면 1GiB (IEC standard)

1byte가 $10^3$개로 표현하는 것은 (SI standard) 표기도 소문자 10kB

이 넓은 데이터 공간에서 컴퓨터가 해당 데이터를 찾으려면 주소값이 필요해짐. 하나하나의 데이터마다 주소값이 있음.

## 데이터 저장방식

### Int type

c언어에서 int는 4byte를 가짐.

int형 4byte는 $4 \cdot 8 = 32$ bit,
$2^{32}$이지만 절반은 양수 절반은 음수이므로,
$-2^{31} < n < 2^{31} + 1$만큼의 크기 표현가능.

$2^{31} = 2^{(10 \cdot 10 \cdot 10 \cdot 2)} = 1024 \cdot 1024 \cdot 1024 \cdot 2 = 2,147,483,647$

```c
int price = 290000000;
```

0001 0001(0x11) / 0100 1001(0x49) / 0000 1100(0x0C) / 1000 0000(0x80)

이렇게 2진수로 바꿔서 1byte씩 만큼씩 저장함

> 왜 10진수를 안쓰고 굳이 2진수로 나눠서 저장하고 16진수로 읽느냐?

10진수는 데이터 경계를 구분할 수 없음

### char type

문자는 어떻게 저장이 될까. 컴퓨터는 숫자밖에 저장이 안되는데 ASCIIcode 128자의 문자들을 숫자와 매칭시켜둠
c언어에서 char는 1byte를 가짐.

```c
char ascii = 'A';
```

0100 0001(0x41) = 65 = A

### list type

리스트는 어떻게 저장이 될까.

```c
int array[4] = {1,2,3,4};
```

`0x4AF55`에 0000 0001을 저장하고 int는 4byte니까 4칸 뒤인 `0x4AF55 + 4*1`에 0000 0010이 저장되는 방식(연속/순차적)

linked list의 경우는 연속/순차적으로 저장되지 않고 값과 다음 값의 주소를 저장하므로 한노드가 value(4byte) + address(4byte)로 8byte의 크기를 가지게 될 것

`0x4AF55`에 0000 0001 그리고 `0x4AF59`에 다음 노드의 주소인 `0xAF6D`를 저장할 것
