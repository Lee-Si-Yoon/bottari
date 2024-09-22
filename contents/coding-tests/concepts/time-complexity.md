# 시간 복잡도

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [코테를 위한 시간 복잡도](#%EC%BD%94%ED%85%8C%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84)
  - [문제 이해하기](#%EB%AC%B8%EC%A0%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
- [시간 복잡도를 위한 지수와 로그](#%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%A7%80%EC%88%98%EC%99%80-%EB%A1%9C%EA%B7%B8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

알고리즘 = 문제해결 방법

하지만 내가 고안한 문제해결방법이 얼마나 걸릴까? 그 방법은 그대로 둔채 문제상황을 늘리면(e.g. 공 5개 정렬을 500개 정렬로) 내 방법이 너무 오래 걸리진 않을까

실행시간Runnning time을 구할 수 있어야 한다. 컴퓨터가 코드 한줄 한줄을 실행시켜서 모든 코드가 실행되는 시간.

$$
\begin{matrix}
T(n) = 5n^2 + 3n + 20 \\
T(n) = 5n + 30 \\
T(n) = 5030 \\
\end{matrix}
$$

와 같이 시간과 입력값 n의 관계를 시간 복잡도라고 한다. 그 관계 중 최고차수만으로 표현하는 간단한 점근 표기법이 빅오 표기법

$$
\begin{gather}
T(n) = 5n^2 + 3n + 20  \tag{$O(n^2)$} \\
T(n) = 5n + 30 \tag{$O(n)$} \\
T(n) = 5030 \tag{$O(1)$} \\
\end{gather}
$$

이 표기법에는 best, average, worst case가 있다. 왜냐하면 입력값의 형태에 따라 연산횟수가 달라지기 때문이다(오름차순을 하는데 이미 정렬된 값들을 넣어주면 연산을 덜하고, 역순으로 넣으면 제일 오래 걸림). average case와 worst case가 같은 경우가 많다.

[bigO cheatsheet](https://www.bigocheatsheet.com/)

| bigO            | description                                                                           | n이 10일 때 |
| --------------- | ------------------------------------------------------------------------------------- | ----------- |
| $O(1)$          | 상수 시간, 문제를 해결하는데 한 단계만 처리함                                         | 1           |
| $O(\log_2 n)$   | 로그 시간, 문제를 해결하는데 필요한 단계들이 연산마다 특정 요인에 의해 줄어듬         | 3.32...     |
| $O(n)$          | 직선시간, 문제를 해결하기 위한 단계의 수와 입력값이 1:1 관계를 가짐                   | 10          |
| $O(n \log_2 n)$ | 문제를 해결하기 위한 단계의 수가 $ n \cdot \log_2 \cdot n $번만큼의 수행시간을 가진다 | 33.2...     |
| $O(n^2)$        | 2차시간, 문제를 해결하기 위한 단계의 수는 입력값의 제곱만큼 걸린다                    | 100         |
| $O(2^n)$        | 지수시간, 문제를 해결하기 위한 단계의 수는 주어진 상수값의 n제곱                      | 1024        |
| $O(n!)$         | 팩토리얼                                                                              | 3628800     |

## 코테를 위한 시간 복잡도

문제 이해하기 -> 접근 방법 -> 코드 설계 -> 코드 구현

### 문제 이해하기

제약조건들이 항상 걸려 있음

$$
\begin{matrix}
1 <= n <= 10^5 \\
1 <= n <= 7
\end{matrix}
$$

이 제약조건들의 의미부터 파악해야 한다.
문제해결 방법들은 수없이 많을테지만 효율적인 코드를 떠올릴 수 있는가

대부분의 코테들에서 100,000,000($10 ^ 8$)이 넘으면 시간 제한 초과할 가능성이 있다는 것을 염두에 두었을 때,

$1 <= n <= 10^5$을 $O(n^2)$으로 풀면 $10^{10}$이 된다. 그러니까 이 문제는 $O(n^2)$로 풀지 말고 더 빠른 방법을 사용해야 한다는 뜻이다.

```plain
예시 문제

정수가 저장된 배열 nums이 주어졌을 때,
nums의 원소 중 두 숫자를 더해서 target이 될 수 있으면 true, 없다면 false를 반환하세요.
같은 원소를 두번 사용할 수 없습니다.

제약조건

2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
```

여기서 중요한 제약조건은 nums.length밖에 없음. 봐야할 것은 nums.length, nums[i], target 중에서 늘어나면 실행시간이 같이 늘어자는 것이 무엇인지를 판별해야 함.

## 시간 복잡도를 위한 지수와 로그

$$
\begin{matrix}
2^{10} = 1024 \approx 10^3 \\
10^3 = 1024 \approx 2^{10} \\
\notag \\
2^{20} = 1024 \cdot 1024 \approx 10^3 \cdot 10^3 = 10^6 \\
\end{matrix}
$$

간단히 10은 $2^{3.33...}$, 2는 $10^{0.33...}$라고 때려맞춰 계산해보면

$$
\begin{matrix}
\log_2 \cdot 10^3 \approx \log_2 \cdot 1024 = \log_2 \cdot 2^{10} = 10  \\
\end{matrix}
$$

즉 $n = 10^8$일 때

$$
\begin{gather}
O(10^8) = 10^8 \tag{시간초과} \\
O(log_2 \cdot 10^8) \approx O(log_2 \cdot 2^{26.64}) = 27 \tag{엄청여유} \\
\end{gather}
$$

$n = 10^6$일 때는

$$
\begin{gather}
O(10^{6 \cdot 2}) = 10^{6 \cdot 2} \tag{시간초과} \\
O(10^6 \cdot log_2 \cdot 10^6) \approx O(10^6 \cdot log_2 \cdot 2^{19.98}) = 10^6 \cdot 20 \tag{통과} \\
O(10^6) = 10^6 \tag{통과} \\
O(log_2 \cdot 10^6) \approx O(log_2 \cdot 2^{19.98})  = 20 \tag{엄청여유}
\end{gather}
$$

[지수법칙](https://blog.naver.com/galaxyenergy/222525576510)
