---
title: npm-package
description: ''
date: 2024-05-08T15:33:51.086Z
preview: ''
draft: true
tags: []
categories: []
type: default
---

# NPM packages

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Dependencies](#dependencies)
  - [semver](#semver)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Dependencies

[npm Docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies)

### [semver](https://github.com/npm/node-semver#versions)

추가한 dependencies의 버전 범위를 나타내는데 semver의 표기법을 따른다.

간단하게 semver를 요약하면

- `[Major].[Minor].[Pach]`의 형식을 따름
- 이전 버전과 호환되지 않는 API변경은 Major 버전 증가
- 이전 버전과 호환되면서 기능의 변경, 추가의 경우 Minor 버전 증가
- 버그 수정은 Patch 버전 증가
- 각각의 버전은 자연수로 증가하고, 0이 앞에 붙어서는 안된다

위 semver의 표기법을 따르는 라이브러리 A를 가정하고, 버전이
`1.2.1`, `1.2.2`. `1.2.3`, `1.2.4`, `1.2.5`, `1.3.0`, `2.0.0`이 있을 때

- `*`: 모든 버전
- `1.2.3`: `1.2.3`
- `>1.2.3`: `1.2.4`, `1.2.5`, `1.3.0`, `2.0.0`
- `>=1.2.3` = `1.2.3`, `1.2.4`, `1.2.5`, `1.3.0`, `2.0.0`
- `<1.2.3` = `1.2.2`, `1.2.1`
- `<=1.2.3` = `1.2.3`, `1.2.2`, `1.2.1`
- `~1.2.3` = `1.2.3`, `1.2.4`, `1.2.5`
- `^1.2.3` = `1.2.3`, `1.2.4`, `1.2.5`, `1.3.0`
- `1.2.x` = `1.2.1`, `1.2.2`. `1.2.3`, `1.2.4`, `1.2.5`

여기서 `>`이나 `<`을 쓸 경우는 적고, `~`tilde나 `^`caret 혹은 정확한 버전을 사용할 때가 많으니 tilde와 caret을 더 파보면

**tilde** 범위는 현재 지정한 버전의 마지막 자리 내의 범위에서만 자동으로 업데이트한다.

- `~1.2.3` = `1.2.3`, `1.2.4`, `1.2.5`
- `~1.2` = `1.2.1`, `1.2.2`, `1.2.3`, `1.2.4`, `1.2.5`
- `~1` = `1.2.1`, `1.2.2`, `1.2.3`, `1.2.4`, `1.2.5`, `1.3.0`

**caret** 범위는 semver의 규약을 따른다는 것을 신뢰한다는 가정하에 Minor와 Patch을 업데이트한다. Major만 따르면 API 호환성이 깨질 염려가 없다고 믿는 것이다.

- `^1.2.3` = `1.2.3`, `1.2.4`, `1.2.5`, `1.3.0`
- `^1.2` = `1.2.1`, `1.2.2`, `1.2.3`, `1.2.4`, `1.2.5`, `1.3.0`
- `^1` = `1.2.1`, `1.2.2`, `1.2.3`, `1.2.4`, `1.2.5`, `1.3.0`

다만 caret 범위에서 pre-release버전에는 예외가 있다. Major가 0인 경우를 말하는 것이다. API 변경이 수시로 일어나기 때문에 tilde처럼 지정한 자리수 내에서만 업데이트한다.

- `^0.1.2` = $>=$`0.1.2` $<$`0.2.0`
- `^0.1` = $>=$`0.1.0` $<$`0.2.0`
- `^0` = $>=$`0.0.0` $<$`1.0.0`
- `^0.0.1` = $==$`0.0.1`
