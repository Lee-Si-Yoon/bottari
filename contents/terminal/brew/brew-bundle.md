# Brew로 개발환경 세팅하기

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Ref](#ref)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

우선적으로 할건 다운로드 받을 패키지들 명세 만들기

```zsh
touch Brewfile
open Brewfile
```

```plain
# Brewfile

brew "cask"
brew "mas"
brew "git"
brew "nvm"
brew "thefuck"
brew "fd"
cask "iterm2"
cask "github"
cask "visual-studio-code"
cask "google-chrome"
cask "figma"
cask "quip"
cask "todoist"
cask "notion"
cask "slack"
cask "drawio"
mas "KakaoTalk", id: 869223134
mas "Xcode", id: 497799835
```

root directory에 `Brewfile`이라는 파일을 생성하고 brew 명령어로 이루어진 설치 목록을 작성한다

이때 tap을 추가해서 설치할 tap을 명시해도 좋다

그 다음에 해당 `Brewfile`을 실행해줄 스크립트를 작성해준다

```zsh
touch common.sh
open common.sh # Xcode가 깔려있으면 편함
```

```sh
# bash로 실행하도록 shebang
#!/usr/bin/env bash

if ! which brew
# brew가 설치되어 있지 않으면 brew 설치
then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

read -r -s -p "[sudo] sudo password for $(whoami):" pass

brew bundle --file=./Brewfile

# 격리 속성 제거
echo "$pass" | sudo -S xattr -dr com.apple.quarantine /Applications/GitHub\ Desktop.app
echo "$pass" | sudo -S xattr -dr com.apple.quarantine /Applications/Visual\ Studio\ Code.app

printf "\n🎉 Congrat! Your mac has been set up successfully for working with $(whoami)!\n"

chmod +x ./common.sh
```

```zsh
sh common.sh
```

## Ref

[원본글](https://imch.dev/posts/lets-setup-team-development-environment-using-brewfile/)
[com.apple.quarantine](https://eclecticlight.co/2023/03/13/ventura-has-changed-app-quarantine-with-a-new-xattr/)
