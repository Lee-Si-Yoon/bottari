# zsh 꾸미기

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [설치 파일들](#%EC%84%A4%EC%B9%98-%ED%8C%8C%EC%9D%BC%EB%93%A4)
- [iterm2 설정들](#iterm2-%EC%84%A4%EC%A0%95%EB%93%A4)
- [zsh 플러그인들](#zsh-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EB%93%A4)
- [Ref](#ref)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 설치 파일들

```zsh
brew install iterm2
```

[ohmyzsh.install](https://ohmyz.sh/#install)에서 oh-my-zsh 설치 후
[ohmyzsh.themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)에서 theme 확인 후 마음에 드는 theme을 다운로드

## iterm2 설정들

iterm2의 설정들을 바꿔주자

- iTerm2 > Preference > Profiles > Text > Font
- iTerm2 > Preference > Profiles > Colors > Color Presets > import -> 여기서 위 themes에서 받은 `.zsh-theme`확장자 파일 선택
- iTerm2 > Preferences > Profiles > Session > Status bar enabled -> 상태바 추가
- iTerm2 > Preferences > Appearance > Status bar location > Bottom -> 상태바 위치 설정

## zsh 플러그인들

- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
- [zsh-syntax-highlighter](https://github.com/zsh-users/zsh-syntax-highlighting)
- [web-search](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/web-search)
- [powerlevel10k](https://github.com/romkatv/powerlevel10k)

와 같은 플러그인들을 각 깃허브에서 설치방법을 참조해서 설치하면 된다

## Ref

[원본글](https://danaing.github.io/etc/2022/03/28/M1-mac-iTerm2-setting.html)
