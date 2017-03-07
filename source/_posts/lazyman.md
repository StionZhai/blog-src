---
title: lazyman
date: 2017-02-23 17:56:18
tags:
---

感觉还挺有意思的
首先这个 LazyMan 要是实现的功能，可以按照以下方式调用:
```js
LazyMan('Hank')
// Hi! This is Hank!

LazyMan('Hank').sleep(10).eat('dinner')
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~

LazyMan('Hank').eat('dinner').eat('supper')
// Hi This is Hank!
// Eat dinner~
// Eat supper~

LazyMan('Hank').sleepFirst(5).eat('supper')
// 等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
```

可能并不是最好的, 源码:

```js
function _LazyMan(name) {
    this.tasks = [];

    var self = this;
    var fn = (function (n) {
        var name = n;
        return function () {
            console.log('Hi! This is ' + name + '!');
            self.next();
        }
    })(name);

    self.tasks.push(fn);
    setTimeout(function () {
        self.next();
    }, 0);
}

var p = _LazyMan.prototype;

p.next = function () {
    var fn = this.tasks.shift();
    fn && fn();
};

p.eat = function (name) {
    var self = this;
    var fn = (function (name) {
        return function () {
            console.log('Eat ' + name + '~');
            self.next();
        }
    })(name);
    self.tasks.push(fn);
    return self;
};

p.sleep = function (time) {
    var self = this;
    var fn = (function (time) {
        return function () {
            setTimeout(function () {
                console.log('Wake up after ' + time + 's!');
                self.next();
            }, time * 1000);
        }
    })(time);
    this.tasks.push(fn);
    return this;
};

p.sleepFirst = function (time) {
    var self = this;
    var fn = (function (time) {
        return function () {
            setTimeout(function () {
                console.log('Wake up after ' + time + 's!');
                self.next();
            }, time * 1000);
        }
    })(time);
    this.tasks.unshift(fn);
    return this;
};

// 封装
function LazyMan(name) {
    return new _LazyMan(name);
}
```
原文链接(强烈谴责代码书写随意的行为): http://www.qdfuns.com/notes/24440/06b24edc89c00322ad21a47b367c9db2.html

