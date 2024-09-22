---
title: eslint-cli
description: useful commands with eslint
date: 2024-03-11T14:47:33.000Z
---

# eslint-cli

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [유용한 커맨드들](#%EC%9C%A0%EC%9A%A9%ED%95%9C-%EC%BB%A4%EB%A7%A8%EB%93%9C%EB%93%A4)
- [저장할때 마다 eslint 돌리기](#%EC%A0%80%EC%9E%A5%ED%95%A0%EB%95%8C-%EB%A7%88%EB%8B%A4-eslint-%EB%8F%8C%EB%A6%AC%EA%B8%B0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 유용한 커맨드들

```bash
npx eslint --print-config <target to know>
#특정 파일을 어떤 eslinctrc로 돌리고 있는지 알아내기

TIMING=1 npx eslint <directory>
# https://eslint.org/docs/latest/extend/custom-rules#per-rule-performance

DEBUG=eslint:cli-engine npx eslint <directory> #eslint 돌리면 어떤 파일들이 돌려지고 있는지 알기

npx eslint <directory> --debug #verbose 모드로 돌려지는 과정 보기
```

## 저장할때 마다 eslint 돌리기

```json
// .vscode/settings.json

"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
