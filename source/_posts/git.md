---
title: Git 相关
date: 2016-04-25 23:22:54
tags:
---

关于 git 的一些分享~
<!--more-->

## 资料分享
* 一本不错的[教科书](http://git.oschina.net/progit/)必看!
* 快速[参考](http://static.open-open.com/lib/uploadImg/20140730/20140730150425_610.jpg)

## 主干开发
1 . 将远程代码库拉到本地 
>包括分支, 默认是在 master 分支下 

```bash
# => dirname 你拉下来的模块对应的文件夹名称, 随便起, 默认为项目名称
git clone source_url <dirname> && cd dirname

# 如果本地已经有代码库, 可以忽略此步骤
```
2 . **修改代码**并添加至提交队列 
>没有新增文件 => 可略过 

```bash
git add .
```

3 . 提交到本地仓库

```bash
# => 参数: a -> add 添加所有的已经在监控的文件; m -> message 提交信息, 必填
git commit -am “msg”
```
4 . 将 master 代码推送到远程库

```bash
git push origin master
```
ps: 更新本地代码仓库
```bash
git pull
```

### 分支开发 (单人)
1 . 将远程代码库拉到本地
```bash
git clone source_url <dirname>

```
2 . 建立分支并切换到分支
```bash
# 如果要新建分支, 请加上 -b , 不加会自动转换到代码库已有的分支中
git checkout <-b> <branch>

```
3 . **修改代码**并添加至提交队列
```bash
git add .
```
4 . 提交代码到本地仓库
```bash
git commit -am “msg"
```
5 . 将 branch 提交至远程仓库
```bash
git push origin <branch>
```
**[合并主干]**

```bash
# 1. 切换到 master
git checkout master

# 2.更新主干代码 <必须干的事, 不然容易毁掉远程已经迭代好的 master>
git pull origin master

# 3.将分支合并到主干
git merge <branch>

# 4.将主干推送到远程仓库
git push origin master
```

## 小技巧 (不断更新中)
```bash
# 文件恢复
# 要查看删除的文件： 
git ls-files --deleted

# 使用命令checkout来恢复：
git checkout -- file_name

# 如果要恢复多个被删除的文件，可以使用批处理命令：
git ls-files -d | xargs git checkout --

# 如果要恢复被修改的文件，命令：
git ls-files -m | xargs git checkout --

# 创建别名
git config --global alias.br branch
```
