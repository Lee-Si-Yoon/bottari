# List

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Array list](#array-list)
  - [Static array](#static-array)
  - [Dynamic array](#dynamic-array)
  - [시간복잡도 - array](#%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84---array)
- [Linked list](#linked-list)
  - [시간복잡도 - linked list](#%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84---linked-list)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Set과 다른 것은 Set은 순서를 저장하지 않음. List는 순서도 저장함. `[1,2,3]`와 `[3,2,1]`은 서로 다른 리스트. Set은 `set([1,2,3])`과 `set([3,2,1])`은 같은 Set.

## Array list

`[1][2][3]`이 연속되게 저장되어 있는 경우. Array와 Dynamic array 두 종류가 있음.

### Static array

```c
int arr[5] =  {1, 2, 3, 4, 5}
```

int형 데이터(4byte) 5개를 저장할 20byte를 미리 할당받음.

`int array[4]`와 같은 변수의 주소는 첫번째 요소인 `0x4AF55`을 가짐

선언시에 size를 정해서 size만큼의 연속된 메모리를 할당받아 데이터를 연속/순차적으로 저장하는 자료구조
`0x4AF55`에 0000 0001을 저장하고 int는 4byte니까 4칸 뒤인 `0x4AF55 + 4*1`에 0000 0010이 저장되는 방식(연속/순차적)

그렇기에 `array[3]`에 접근하고 싶으면 `0x4AF55`부터 시작해서 $4 \cdot (n-1)$만큼 떨어진 `0x4AF55 + 4*2`에 접근하면 해당 값임. 이렇게 직접 접근 가능한 방식을 direct access 혹은 random access라고 부른다. 이렇게 첫 주소값만 알고 있다면 어떤 index에도 접근 가능하다는 것은 $O(1)$의 시간복잡도를 갖는다는 의미다.

매우 효율적인 자료구조지만, 선언을 크게해서 많이 남거나 선언을 작게해서 부족하면 문제가 발생할 수 있다. 그렇기에 이런 문제를 해결하는 것이 dynamic array.

### Dynamic array

선언 이후 size를 변경할 수 없는 정적배열과 다르게 동적배열은 size를 늘릴 수 있다.
array의 size를 조정하는 resizing하는 작업은 $O(n)$의 시간복잡도를 가진다.

resizing의 과정은 기존 배열보다 큰 배열을 선언하고(대부분 언어에서는 2배 큰 배열, Doubling) -> 기존 배열에서 하나씩 큰 배열로 옮기는 과정을 거친 뒤(해당 과정이 $O(n)$) -> 기존 배열을 삭제한다.

### 시간복잡도 - array

| operation          | Static array | Dynamic array     |
| ------------------ | ------------ | ----------------- |
| access/update      | $O(1)$       | $O(1)$            |
| insertBack         | $O(1)$       | $O(1)$            |
| deleteBack         | $O(1)$       | amoritized $O(1)$ |
| insertAt           | $O(n)$       | $O(n)$            |
| deleteAt           | $O(n)$       | $O(n)$            |
| declare/initialize | $O(n)$       | $O(n)$            |

declare/initialize과정이 $O(n)$이 걸리는 이유는 배열에 n개의 데이터를 저장해야하기 때문에.

insertAt/deleteAt이 $O(n)$ 걸리는 이유는 넣기전에 한칸씩 옮겨주는 과정이 있어야하기 때문에.

여기서 [amortized](https://en.wikipedia.org/wiki/Amortized_analysis)은 분할상환기법, 상황에 따라 성능이 크게 바뀌지만 최악의 경우에도 평균적인 이라는 의미다.

## Linked list

`[1] -> [2] -> [3]`이 연속되지 않게 저장되어 있음. 비연속/비순차적이지만 각각의 node가 다음 node의 메모리 주소값을 가리킴으로써 논리적인 연속성을 갖게 된다.

`0x4AF55`에 0000 0001을 저장하고 int는 4byte니까 4칸 뒤인 `0x4AF55 + 4*1`에 다음 node의 주소인 0x4AF7D를 저장한다. 그 다음에 `0x4AF7D`에 0000 0010를 저장하고 `0x4AF7D + 4*1`에 그 다음 node의 주소가 저장된다. 마지막 주소를 가르킬땐 0x00000 None을 지정해준다.

물리적 비연속적, 논리적 연속적. 메모리 사용 좀더 자유롭지만 데이터 하나당 차지하는 메모리가 커지게 된다.

### 시간복잡도 - linked list

array는 insertAt/deleteAt중 모든 원소를 shift하는 과정이 있어야 하기에 $O(n)$가 걸리지만, linked list는 물리적으로 shift하는 과정이 없고 next address가 가리키는 주소값만 변경하면 되기에 $O(1)$으로 삽입/삭제가 가능하다는 것.

| operation     | Linked list      | Array            |
| ------------- | ---------------- | ---------------- |
| access/update | $O(n)$           | $O(1)$           |
| insertFront   | $O(n)$           | $O(1)$           |
| insertAt      | $O(n)$           | $O(n)$           |
| insertBack    | $O(n)$ or $O(1)$ | amortized $O(1)$ |
| removeFront   | $O(1)$           | $O(n)$           |
| removeAt      | $O(n)$           | $O(n)$           |
| removeBack    | $O(n)$ or $O(1)$ | $O(1)$           |

여기서의 or 조건들은 doubly linked list로 구현되어 있을 경우.

읽거나 업데이트하는건 array보다 느리지만, 삽입/삭제가 많은 경우 linked list를 고려해보자.
