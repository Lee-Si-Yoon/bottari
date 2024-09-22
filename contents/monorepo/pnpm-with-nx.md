# PNPM with Nx

작성일 2024.04.11

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Steps - PNPM monorepo](#steps---pnpm-monorepo)
- [Steps - adding Nx](#steps---adding-nx)
- [Nx affected](#nx-affected)
- [Nx 18 버전 이후의 업데이트](#nx-18-%EB%B2%84%EC%A0%84-%EC%9D%B4%ED%9B%84%EC%9D%98-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

[Setup a monorepo with PNPM workspaces and add Nx for speed - Youtube](https://www.youtube.com/watch?v=ngdoUQBvAjo)

nx의 다양한 generator에 의존하지 않고 nx의 장점을 골라먹을 수 있는 방법론이다.

특히나 마음에 들었던 부분은 dependency 관리 전략 중 각 패키지가 각자의 package.json을 가지고 작업할 수 있다는 것이다. 기존의 nx의 generator들을 쓰다보면 [single version policy](https://nx.dev/concepts/more-concepts/dependency-management#single-version-policy)로 인해서 예로 들어 각앱에서 다른 버전의 리액트를 쓴다는 등의 방법론은 어려웠기 때문이다.

## Steps - PNPM monorepo

1. 풀더를 만들고 pnpm init해서 package.json 생성
2. gitignore나 editorconfig 등 설정
3. app-centric혹은 package-centric 선택

   ```yaml
   # 앱을 여러개 관리하기 위한 모노레포 구조
   app-centric:
     - apps
     - packages

   # 앱보다는 오픈소스 라이브러리 등이 사용하는 구조
   package-centric:
     - packages
   ```

4. app-centric 선택, apps, packages 폴더 생성
5. pnpm-workspace.yaml을 root에 생성

   ```yaml
   packages:
     - 'apps/*'
     - 'packages/*'
   ```

6. apps 폴더에서 pnpx create-remix@latest
7. apps에 생성한 remix app의 package.json에 name 프로퍼티 추가(e.g. name: 'playground')
   - 이때 apps/playground에서 `pnpm run dev` 커맨드로 앱 실행 가능 체크
   - cd 해서 모든 각 앱에 들어가서 실행하기 하기보다 root에서 각 앱을 실행하기 위해서는 다음 스텝들이 필요함
8. `pnpm --filter <packageName>`으로 root에서 실행 가능. `pnpm --filter playground dev`로 앱 실행 가능 체크.
   - 이때 --filter는 package.json의 name을 사용하게 됨
9. playground 앱에서 사용할 라이브러리를 생성하기 위해서 packages에 packages/shared-ui 폴더 생성
10. packages/shared-ui로 cd해서 옮겨간 다음에 pnpm init으로 package.json 생성
    - 마찬가지로 name 프로퍼티를 써준다
11. `pnpm add --filter shared-ui react` 커맨드 실행으로 shared-ui에 react 설치, `pnpm add --filter shared-ui typescript -D`로 타입스크립트 dev로 추가
12. packages/shared-ui/src/Button.tsx 생성, 예시로 간단하게 버튼 컴포넌트 생성 후 export
13. tsc로 빌드하기 위해서 tsconfig 생성
    - 이때 outDir 속성을 ./dist으로 설정
    - package.json의 main 속성을 빌드된 entry point로 지정(e.g. dist/index.js)
    - package.json의 script에 빌드 커맨드 추가 `rm -rf dist && tsc`로 이전 빌드 지우고 tsc 빌드 커맨드 추가
14. `pnpm --filter shared-ui build` 커맨드 실행으로 제대로 빌드가 되는지 체크
15. `pnpm add shared-ui --filter playground --workspace` 이때 --workspace 플래그 필수, 커맨드 실행으로 playground 앱에 shared-ui 빌드된 패키지 설치
    - playground의 package.json을 보면 dependencies에 `"shared-ui" : "workspace:^1.0.0"`가 추가된 것을 볼 수 있다. 버전관리 안할 거면 `workspace:*`으로 변경
    - playground의 node_modules들 중 shared-ui가 있는지 체크
16. playground에서 shared-ui의 컴포넌트를 실제 사용해보고 되는지 체크
17. pnpm run -r build로 root에서 등록된 패키지들의 build 커맨드를 실행시킬 수 있음. 이때 의존성에서 확인해봐야 하는 것이 위 예시 같은 경우, shared-ui가 먼저 빌드되어야 함
    - pnpm run --parallel -r build와 같이 병렬로도 커맨드 실행가능

## Steps - adding Nx

1. `pnpm add nx -D -w` 커맨드로 nx 패키지 추가
   - 이때 -w 플래그 필수, 각 패키지에 추가하는게 아닌 전체 모노레포에서 사용할 것이기 때문에
2. `npx nx build shared-ui` 커맨드 실행해보면 nx가 알아서 shared-ui 패키지를 찾아서 실행해주는 것을 확인 가능
   - 이때 pnpm이 아닌 npx로 실행하는 이유는 로컬 node_modules에 있는 nx를 실행하기 위함
3. nx를 사용하는 주된 이유는 캐싱, 인풋 소스가 바뀐게 아니라면 다시 실행할 필요가 없는 것
   - 어떤 잠재적인 사이드이펙트가 있을지 모르기에 nx는 기본적으로 아무런 operation도 캐싱 안함.
4. root에 `nx.json`파일 생성

   ```json
   {
     "tasksRunnerOptions": {
       "default": {
         "runner": "nx/tasks-runner/default",
         "options": {
           "cacheableOperations": ["build"]
         }
       }
     }
   }
   ```

   위 json에서 cacheableOperations 속성이 중요함. 일단 build를 추가하고

5. 다시 `npx nx build shared-ui`를 두번 실행하면, 두번째 빌드는 바로 끝나는 것을 확인할 수 있음
   - root의 node_modules/nx/에 캐시 내역 확인 가능
   - 빌드된 packages/shared-ui/dist를 삭제하고 다시 build를 돌려봐도 바로 반환하는 것을 보면 결과가 아닌 인풋 소스를 기준으로 캐싱하는 것을 확인 할 수 있다
6. nx가 인풋 소스를 기준으로 캐싱하는 것을 확인했지만 지금 상태에선 빌드 결과에 영향을 안주는 코드 추가로도 캐시가 초기화 됨
   - 예로 들어 README.md를 추가하는 등
7. 이를 해결하기 위해서는 nx.json을 수정

   ```json
   {
     "tasksRunnerOptions": {
       "default": {
         "runner": "nx/tasks-runner/default",
         "options": {
           "cacheableOperations": ["build"]
         }
       }
     },
     "targetDefaults": {
       "build": {
         "inputs": ["!{projectRoot}/**/*.md"]
       }
     }
   }
   ```

   위 json에서 targetDefaults.build.inputs에 각 패키지의 md파일들을 인풋 소스에서 제외시켰다. `targetDefaults.<operationName>.inputs` 구조

8. 다시 build를 두번 돌려보면 md파일을 얼마나 수정하더라도 캐시를 초기화시키지 않는 것 확인 가능
9. 하지만 이런 구조라면 모든 operation 마다 파일 형식을 지정해야 하니 이를 namedInputs로 탬플릿화 시킬 수 있다.

   ```json
   {
     "tasksRunnerOptions": {
       "default": {
         "runner": "nx/tasks-runner/default",
         "options": {
           "cacheableOperations": ["build"]
         }
       }
     },
     "namedInputs": {
       "noMarkdown": ["!{projectRoot}/**/*.md"]
     },
     "targetDefaults": {
       "build": {
         "inputs": ["noMarkdown", "^noMarkdown"]
       },
       "test": {
         "inputs": ["noMarkdown"]
       }
     }
   }
   ```

   namedInputs.noMarkdown을 build와 test 오퍼레이션 각각에 추가한 것을 볼 수 있다.

   targetDefaults.build.inputs의 `^noMarkdown`의 의미는 해당하는 프로젝트 뿐만 아니라 해당 프로젝트가 의존하고 있는 다른 프로젝트들에도 적용시킨다는 의미

10. [Steps - PNPM monorepo](#steps---pnpm-monorepo)의 마지막 17번을 보면 playground 앱이 shared-ui 라이브러리를 사용하고 있기 때문에 shared-ui가 먼저 빌드되어야 playground를 사용할 수 있다고 했는데, nx에서 이 세팅을 자동화 시킬 수 있다

    ```json
    {
      "tasksRunnerOptions": {
        "default": {
          "runner": "nx/tasks-runner/default",
          "options": {
            "cacheableOperations": ["build"]
          }
        }
      },
      "namedInputs": {
        "noMarkdown": ["!{projectRoot}/**/*.md"]
      },
      "targetDefaults": {
        "build": {
          "inputs": ["noMarkdown", "^noMarkdown"],
          "dependsOn": ["^build"]
        },
        "dev": {
          "dependsOn": ["^build"]
        },
        "test": {
          "inputs": ["noMarkdown"]
        }
      }
    }
    ```

    targetDefaults.build.dependsOn의 `^build`는 `^noMarkdown`과 마찬가지로 특정 프로젝트의 build 커맨드와 의존관계에 있는 모든 build 커맨드들을 먼저 실행시켜주는 옵션이다

## Nx affected

1. nx의 강력한 기능 중 하나인 affected. 위 Step에서 캐싱의 기준이 되는 인풋 소스 조정 및 의존 관계 설정 외에도 다양한 operation의 시간을 절약시켜 주는 방법이다.
2. shared-ui와 playground와 전혀 상관없는 패키지를 하나 생성한다. packages/noop 폴더를 만들고 안에 들어가서 pnpm init으로 package.json을 만들어준다.
3. npx nx graph를 실행하면 noop 패키지는 shared-ui와 playground와는 의존관계가 없음을 확인 할 수 있다.
4. 브랜치를 하나 파서 packages/shared-ui/Button.tsx에 변화를 준다.
5. npx nx affected:graph를 실행시켜서 dependency tree를 확인해보면 master와 달라진 프로젝트들을 보여준다. 이 상태로 npx nx affected:build를 실행해보면 shared-ui는 playground에서 사용되고 있었기에 shared-ui와 playground만 build하는 것을 확인 할 수 있다.
   - HEAD와 master간 차이나는 부분을 알아서 찾아준다고 생각하면 된다
6. 기존의 `pnpm run --parallel -r build`을 실행해보면 shared-ui, playground, noop 모두를 빌드하는 것과 대조적이다.

---

## Nx 18 버전 이후의 업데이트

작성일 2024.04.12

Nx에서 플러그인 사용자들을 늘리기 위해서인지는 모르겠지만... 플러그인을 사용하면 인풋 소스, 아웃풋, 의존성 등을 추론해서 사용자가 직접 nx.json을 열심히 작성하지 않아도 알아서 작성해주는 하는 project crystal이라는 기능을 출시했다. 그러면서 API가 바뀌었고 npm/yarn/pnpm workspace을 사용하는 경우 추가적으로 더 작성해줘야 할 것들이 늘어나게 되었다.

1. nx를 18버전 이상으로 migrate 해준다.
2. 예전엔 `pnpm add nx -D -w`으로 nx만 설치하면 됐지만, 이젠 `npx nx@latest init`을 해주면 각 패키지의 package.json이 업데이트 된다.

   ```json
   {
    "name": "playground",
    ...
    "scripts" : {
      ...
    },
    ...
   }
   ```

   와 같은 형태로 되어 있었는데 nx init을 해주면 아래처럼 변한다

   ```json
   {
    "name": "playground",
    ...
    "scripts" : {
      ...
    },
    ...
    "nx": {
      "includedScripts": []
    }
   }
   ```

3. [`nx show`](https://nx.dev/nx-api/nx/documents/show#show)라는 커맨드가 추가되었는데 이를 통해서 해당 패키지에서 nx가 실행가능한 커맨드들과 부가정보들을 알려준다.
   - `nx show project playground --web`을 실행해보면 [Steps - adding Nx](#steps---adding-nx)에선 가능했던 모든 커맨드들(build, dev)이 뜨지 않는 것을 확인할 수 있다.
4. [`nx exec --`](https://nx.dev/recipes/running-tasks/root-level-scripts#keep-using-npm-to-run-scripts-rather-than-nx)라는 스크립트 명령어를 추가해주고 nx.includedScripts에 해당 명령어를 입력하면 nx를 통해서 실행이 가능해진다.

   ```json
   {
    "name": "playground",
    ...
    "scripts" : {
      "dev": "remix dev",
      "build": "remix build",
      ...
    },
    "nx": {
      "includedScripts": []
    }
   }
   ```

   위를 아래와 같이 업데이트해주면 된다.

   ```json
   {
    "name": "playground",
    ...
    "scripts" : {
      "dev": "nx exec -- remix dev",
      "build": "nx exec -- remix build",
      ...
    },
    "nx": {
      "includedScripts": ["dev", "build"]
    }
   }
   ```

5. 캐시 기준이 되는 인풋 소스는 [nx.json에서 전역으로 설정하거나 패키지 단위로 입력](https://nx.dev/recipes/running-tasks/configure-inputs)해주면 된다. 이 부분은 업데이트가 없다.
