
---
title: 回归第一篇-- iterm2 之 zsh
---

>iterm [beta](https://www.iterm2.com/downloads.html) 利器: zsh homebrew ... 其实安装起来并不费劲, 此处简明扼要, 减少安装时碰到的坑. 详情还是请资讯官方
<!--more-->

### 1 - 安装 [oh-my-zsh](http://ohmyz.sh/) 

```
# iterm2 下面一般都会有 curl , 个人比较喜欢 wget , 可以使用 homebrew 安装
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
**[可选]** 一般来说 [homebrew](http://brew.sh/) 都是必备的, 谁用谁知道
> **如果您刚刚修改了用户名, 请重启后再安装 home-brew**

### 2 - 设置为默认 shell
Make it your default shell: `chsh -s $(which zsh)` [参考](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH)

### 3 - final
做完以上两步, 在 iterm2 里面输入 `zsh` 回车就可以了

### 4 - 主题
[ohmyzsh主题](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes)有很多, 可选择自己喜欢的折腾下


### 5 - 小技巧

```
# 默认 shell 中, 切换文件夹
cd dir

# zsh 中, 切换文件夹 (test, view 等命令或者关键词除外)
dir

# zsh 列出当前文件夹中的文件和文件夹
ll

# 列出所有
l 
```

### 写在后面的一般都是废话

时隔三年, 终于返回来写博客了, 之前的两个博客暂且不用了, 感觉还是 github 写博文比较靠谱些 

> 工欲善其事必先利其器, 好传统必须要延续, 玩了下 [iterm2 beta](https://www.iterm2.com/downloads.html) 版感觉体验还是相当不错的. 话说提前体验 app 的  beta 版也是个不错习惯

# 未完, 持续更新中...