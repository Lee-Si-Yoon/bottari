# Integrated VS package based repos

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [용어정리](#%EC%9A%A9%EC%96%B4%EC%A0%95%EB%A6%AC)
- [Package-Based](#package-based)
- [Integrated](#integrated)
- [Pros & Cons](#pros--cons)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

[Nx - integrated-vs-package-based](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos-vs-packagebased-repos-vs-standalone-apps)
[Nx Conf](https://www.youtube.com/watch?v=nVYprf3-5GM)

## 용어정리

- Independently Maintained Dependencies - 각 project들 마다 각자 의존성을 가지고 있고(각자의 package.json에), 각 project의 build 커맨드가 빌드 결과물을 만들 때 책임이 있는 경우. project1이 리액트 16을 쓰고 project2가 리액트 17을 쓰는데 project2가 project1에 의존하고 있을 경우 빌드 결과에 어떤 영향이 있을지 미지수일 단점이 있다.
- Single Version Policy - root에 있는 package.json이 모든 의존성의 버전관리를 하는 경우. 이 경우 project1이 리액트를 project2가 뷰를 사용하고 있고 둘이 서로 의존하고 있지 않을 때도 빌드 결과물에 리액트와 뷰가 모두 포함될 가능성이 있다. Nx와 같은 툴을 쓰면 해결 가능.

- Package-Based - 모노레포인데, project들 끼리 package.json을 통해서 서로 의존하는 경우 + Independently Maintained Dependencies을 택할 가능성 높음
- Integrated - 모노레포인데, project들 끼리 typescript imports를 통해서 서로 의존하는 경우 + Single Version Policy을 택할 가능성 높음

## Package-Based

각 project들이 각자 독립적인 repo처럼 작동하는 것이 기대되기에, 이미 개발된 package를 해당 스타일의 모노레포에 추가하기에는 가장 쉽다. 하지만 단점으로는 해당 스타일의 모노레포에서 새로운 package를 만들기 위해서는 빌드 방식이나 커맨드들을 새롭게 만들어주어야 하기에 셋업에 시간이 더 걸린다.

Lerna, Yarn workspace, Lage, Turborepo, Nx가 해당 스타일의 모노레포를 지원한다.

## Integrated

root에 있는 package.json이 모든 것을 책임지는 구조로, 돌려쓰는 커맨드가 있다고 가정하기에 각 project들에서 빌드 커맨드를 수정해줘야 할 가능성이 있다. 이런 이유로 이미 개발된 package를 해당 스타일의 모노레포에 추가하기 어려울 수도 있다. 다만 새로운 package를 만들 때는 더 빠를 수도 있다.

Bazel, Nx가 해당 스타일의 모노레포를 지원한다. 아니 사실 이러한 툴들이 없으면 모노레포로서 성립하지 않고 거대한 하나의 repo라고 보면 될 듯하다.

## Pros & Cons

Nx의 글을 보면 두 스타일을 JSDoc과 Typescript에 비교하는데, 전자는 더 쉽고 빠르고 후자는 더 리소스가 들지만 더 많은 장점들을 가진다는 것이다.
틀린 말은 아닌게 Typescript도 하나의 의존성이며 선택사항이다. Integrated 스타일의 장점은 Nx나 Bazel이 제공하는 API만 충실히 따른다면 code-generation의 도움을 많이 받을 수 있고, 해당 code-generation 덕분에 일관된 구조를 유지하기에 비대해진 모노레포에서는 유지보수에 대한 많은 고민들을 줄일 수 있다. 하지만 Nx가 갑자기 마음에 안들거나 유료화 된다면 그땐 Package-Based 스타일이 다른 툴로 넘어가기 훨씬 쉬울 것이다.
