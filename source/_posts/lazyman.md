---
title: lazyman
date: 2017-02-23 17:56:18
tags:
---

首次接触, 感觉还挺有意思的

```
function LazyMan(name) {
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

var p = LazyMan.prototype;

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
    return new LazyMan(name);
}
```

