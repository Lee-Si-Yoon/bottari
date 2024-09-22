---
title: tsconfig cheatsheet
description: ''
date: 2024-05-06T14:31:57.488Z
preview: ''
draft: true
tags: []
categories: []
type: default
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Tsconfig cheatsheet](#tsconfig-cheatsheet)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Tsconfig cheatsheet

```json
{
  "compilerOptions": {
    /* Base options */
    "esModuleInterop": true, // smooths out cjs-esm interop
    "skipLibCheck": true, // skip type checks on declaration files
    "target": "es2022",
    "verbatimModuleSyntax": true, // ensure correct cjs OR esm
    "resolveJsonModule": true, // to use json files
    "moduleDetection": "force", // treat every file as module not global script

    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true, // safe indexing

    /* If transpiling with tsc */
    "moduleResolution": "NodeNext", // ensure transplied can be used by node
    "module": "NodeNext",
    "outDir": "dist",
    "sourceMap": true,

    /* If NOT transpiling with tsc -- e.g. esbuild, vite */
    "moduleResolution": "Bundler",
    "module": "ESNext",
    "noEmit": true, // no js files created when type checking

    /* If your code runs in the DOM */
    "lib": ["es2022", "dom", "dom.iterable"],

    /* If your code doesn't runs in the DOM */
    "lib": ["es2022"],

    /* If you're building for a library -- should generate declaration files */
    "declaration": true,

    /* If you're building for a library in a monorepo */
    "composite": true, // for caching
    "declarationMap": true // targets source file not declaration file
  }
}
```
