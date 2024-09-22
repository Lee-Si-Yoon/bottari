# Queue(Deque) & Stack

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Queue(Deque)](#queuedeque)
- [Stack](#stack)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Queue(Deque)

시간 순서상 선입선출FIFO(First In First Out)형식으로 데이터를 저장하는 자료구조. rear에 데이터를 추가하는 것을
enqueue라고 하고 front에서 데이터를 꺼내는 것을 dequeue라고 한다.

Array list based와 Linked list based 두가지 방식 가능. Array list를 쓰면 Queue의 장점을 누릴 수 없음.
Array list로 구현하면 js기준으로 push는 $O(1)$, pop은 $O(n)$이 된다(shift하는 과정이 있어야하니까).
Linked list(doubly)로 구현하면 enqueue와 dequeue 모두 $O(n)$으로 가능해진다.

Queue는 단독으로 나오는 경우가 드믐. 너비 우선 탐색BFS에서 많이 쓰인다.
순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼Buffer로서 많이 사용된다.

## Stack

시간 순서상 후입선출LIFO(Last In First Out)형식으로 데이터를 저장하는 자료구조. top에 데이터를 추가하는 것을
push라고 하고 top에서 데이터를 꺼내는 것을 pop이라고 한다.

Array list based와 Linked list based 두가지 방식 가능. Array list만 써도 push와 pop이 모두 $O(1)$으로
작동한다.

서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 사용된다.
