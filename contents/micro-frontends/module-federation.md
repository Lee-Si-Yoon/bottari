---
title: module-federation
description: ''
date: 2024-04-28T12:59:45.508Z
preview: ''
draft: true
tags: []
categories: []
type: default
---

# Module federation

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Concept](#concept)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [nx - module federation](https://nx.dev/concepts/module-federation/module-federation-and-nx)
- [우아콘 - module federation](https://www.youtube.com/watch?v=-jYSGaPAEHE)
- [김코더 - module federation](https://www.kimcoder.io/blog/micro-frontend-module-federation)
- [maxkim - module federation](https://maxkim-j.github.io/posts/runtime-integration-micro-frontends/)

- [official module federation docs](https://module-federation.io/blog/announcement.html)

## Concept

micro-frontend의 한 방법론. 하나의 app의 배포 단위를 쪼개서 배포하는 방식을 취하려고 하는데, Webpack의 [ModuleFederationPlugin](https://webpack.js.org/plugins/module-federation-plugin/)을 사용해서 런타임에 js를 통해 통합하는 방법이다.
