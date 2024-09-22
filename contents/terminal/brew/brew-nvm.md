# brew로 nvm설치 후 해줄 일들

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [brew로 nvm설치 후 해줄 일들](#brew%EB%A1%9C-nvm%EC%84%A4%EC%B9%98-%ED%9B%84-%ED%95%B4%EC%A4%84-%EC%9D%BC%EB%93%A4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

```zsh
brew install nvm

# 폴더 생성 - 이미 되어 있을 수도 있음
mkdir ~/.nvm

# zsh 기본설정 변경
open ~/.zshrc
```

환경 변수 설정을 해준다(여기 있는 그대로 하기보다는 nvm 설치 할때 cli상에서 안내문을 띄어줄 것이다)

```zsh
# .zshrc
export PATH=/opt/homebrew/bin:$PATH
export PATH="$PATH:$HOME/.rvm/bin"

# This loads nvm bash_completion
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

```zsh
# 명령어 인식 확인 후
nvm -v

# 마지막 lts버전 설치 후 사용
nvm install --lts
```
