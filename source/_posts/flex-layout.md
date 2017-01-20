---
title: Flex Layout
date: 2016-06-28 19:21:28
tags:
---

关于 [flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool) 基础部分就不多讲了, 下面介绍一些使用中常见问题解决方案:
### flex 下, 实现文本超过之后显示 '...'

```css
.father {
    display: -webkit-flex;
    display: flex;
    white-space: nowrap;
}
.flex-child {
    overflow: hidden;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    text-overflow: ellipsis;
}
```

### flex 兼容性处理

```less
.flex-wrap {
    display: flex;
    display: -webkit-flex;
    display: -webkit-box; /* 兼容旧版 flex */
    .flex-1 {
        flex: 1;
        -webkit-flex: 1;
        -webkit-box-flex: 1; /* 兼容旧版 flex */
    }
}
```
