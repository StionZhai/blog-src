---
title: sweet-log
date: 2016-06-24 11:41:44
tags:
---
想要让自己的控制台输出更加人性化么, 可以看看这个, 貌似现在不能输出图片了哦~
<!--more-->

```js
var args = [
    '\n %c %c %c beautiful console.log 0.0.1 - ✰  %c ' + ' %c ' + '参考 http://jinzhe.net/post/97.html  %c %c ♥%c♥%c♥ \n\n',
    'background: #ff66a5; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'color: #ff66a5; background: #030307; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'background: #ffc3dc; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'color: #ff2424; background: #fff; padding:5px 0;',
    'color: #ff2424; background: #fff; padding:5px 0;',
    'color: #ff2424; background: #fff; padding:5px 0;'
];
console.log.apply(console, args);
```

另附:
- 不错的实用工具 Console.log with [style](https://github.com/adamschwartz/log) (感觉还不够太强大, 还有很大进步空间, 有空研究下)
- console 其他实用[方法](http://javascript.ruanyifeng.com/tool/console.html)

不断更新中...
