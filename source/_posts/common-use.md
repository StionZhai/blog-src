---
title: 常用解决方案
date: 2016-05-13 22:04:28
tags:
---
> 积累一些常用方法, 方便查阅
<!--more-->

### 移动端一像素问题
> 移动端一像素问题特别恶心, 不知道现在有什么好的解决方案, 比如: 0.5px 之类的(兼容性问题), 反正对于年少无知的我来说, 只能用一些伪方法了, 其他[参考](http://jinlong.github.io/2015/05/24/css-retina-hairlines/)

```less
// less 写法
// 横向 1px ~
.one-px-h (@color: #cacaca) {
    position: absolute;
    bottom: 0;
    left: -50%;
    display: block;
    content: '';
    height: 1px;
    width: 200%;
    background-color: @color;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    pointer-events: none;
}

// 纵向 1px ~
.one-px-v (@color: #cacaca) {
    position: absolute;
    right: 0;
    top: -50%;
    display: block;
    content: '';
    height: 200%;
    width: 1px;
    background-color: @color;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    pointer-events: none;
}

// 使用 demo ==> 单边使用
.demo-h {
    &:before {
        .one-px-h(#da8677);
    }
}

.demo-v {
    position: relative;
    &:after {
        .one-px-h(#da8677);
        position: absolute;
        right: 0;
    }
}

// 其他: 实现全边框
// 在 iphone 6 / plus 中如果元素是无缝挨着的存在问题
// 有些边框莫名其妙的变得粗或更细, 建议使用单线解决
.all-border(@color: #cacaca) {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid @color;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
    pointer-events: none;
}

/* 修改 select 样式 */
select {
    /* Chrome和Firefox里面的边框是不一样的，所以复写了一下 */
    border: solid 1px #000;

    /* 很关键：将默认的select选择框样式清除 */
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;

    /* 在选择框的最右侧中间显示小箭头图片 */
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;


    /* 为下拉小箭头留出一点位置，避免被文字覆盖 */
    padding-right: 14px;
}


/* 清除ie的默认选择框样式清除，隐藏下拉箭头 */
select::-ms-expand {
    display: none;
}
```
### 移动端 - 常用方法

```js
// 移动端禁止屏幕滚动, 适用于出现浮层的场景
function stopScroll() {
    $(window).on('touchmove', preventScroll);
}
function recoverScroll() {
    $(window).off('touchmove', preventScroll);
}
function preventScroll(e) {
    e.preventDefault();
}

// 阻止滚动
stopScroll();

// 恢复滚动
recoverScroll();

// 获取系统类型
function getPlatform() {
    var ua = navigator.userAgent;
    if (ua.match(/iphone|ipad/i)) {
        return 'ios';
    }
    return 'android';
}

// 获取 ios 版本号
function getIOSV() {
    var IOS_VERSION_RE = /OS\s+(\d)_/;
    var userAgent = window.navigator.userAgent;
    var isIOS = function () {
        return /(?:i(?:Phone|P(?:o|a)d))/.test(userAgent);
    };

    // return isIOS() ? parseInt(userAgent.match(IOS_VERSION_RE)[1], 10) : 0;
    return isIOS() ? +userAgent.match(IOS_VERSION_RE)[1] : 0;
}

/**
 * 根据不同的端来处理不同的事
 *
 * @param {Object} opt 属性: wxCb || iosCb() || androidCb 都是回调
 * @example
 *     osDo({wxCb: function () {}});
 */
function osDo(opt) {
    var ua = navigator.userAgent;
    if (ua.match(/Micromessenger/i)) {
        opt.wxCb && opt.wxCb();
    }
    else if (ua.match(/iphone|ipad/i)) {
        opt.iosCb && opt.iosCb();
    }
    else {
        opt.androidCb && opt.androidCb();
    }
}
```

```html
<!-- 吊起数字键盘 -->
<input type="tel">
```

#### 点击 hover 模拟

采用 `active` 而不是 `hover` 如:

```css
a:active {
    background: #efefef;
}
```

使其生效:

```javascript
$(document).bind('touchstart', function (e) {});
```

#### hammer & zepto tap 事件冲突
```javascript
var gesture = e.gesture;
if (!gesture) {
    // hammer 触发的事件会有 gesture 这个属性， 可以以此来判断
    return;
}
```

> 直接写上 `active` 伪类是不生效的, 需给 `document` 绑定一个空 (也可以不空) 的 `touch` 事件, 引入`hammer` 可以不用添加此事件, `hammer`中已经绑定了此事件
>
> 不要用: `-webkit-tap-highlight-color: 颜色` 有些库会默认给 dom 设置为内联 `rgba(0, 0, 0, 0)`

####


### 表单相关

```js
// zepto || jquery 快速获取表单的两种方式
$('#form').serializeArray();
$('selector').find(':input').serializeArray();

/**
 * 格式化 $.serializeArray 数据
 *
 * @example serialize2obj($('#form').serializeArray())
 * @param  {Array} arr 表单数组
 * @return {Object}    表单数据组成的对象
 */
function serialize2obj(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        result[arr[i].name] = arr[i].value;
    }
    return result;
}

// checkbox 获取是否选中
$('selector')[0].checked;

```

### 其他小工具

```js
/**
 * 获取 url 中的参数
 *
 * @param  {string} name 参数名称
 * @return {string}      查询结果 str || null
 * @example
 *     getQueryString('bookid');
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

// 复制对象 防止引用导致的意外情况
function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// ================= 下面是烧脑积累 ====================
// get 'a.b.c.[2]'
var getModule = function (name, opt_obj) {
    var parts = name.split('.');
    var cur = opt_obj || window;
    var part;
    for (; part = parts.shift();) {
        if (/\[\d+\]/.test(part)) {
            var key = part.match(/^(\w+)\[(\d+)\]$/);
            if (key.length === 3 && cur[key[1]] && cur[key[1]][key[2]]) {
                cur = cur[key[1]][key[2]];
            }
            else {
                return null;
            }
        }
        else {
            if (cur[part] != null) {
                cur = cur[part];

            }
            else {
                return null;
            }
        }
    }
    return cur;
};
```

```css
/* 消除元素间空格问题 */
font-size: 0;
letter-spacing: 0;

/* 文本溢出展示 '...' */
display: block;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

/* 多行文本溢出展示 '...' */
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;

/* 水平垂直居中 (定位) */
.vh-center {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
}
```

### 前端模板使用技巧

以 underscore 或者 lodash 为例:

```html
<div id="app"></div>

<!-- 数据模板 -->
<script type="text/template" id="temp">
    <% for (var i = 0, j = data.length; i < j; i++) { %>
        <div class="show-group">
            <span>id: <%= data[i].id %></span>    
            <span>city: <%= data[i].city %></span>    
            <span>score: <%= data[i].score %></span>    
            <span>money: <%= data[i].money %></span>    
            <span>content: <%= data[i].content %></span>    
            <span>place: <%= data[i].place %></span>    
        </div>
    <% } %>
</script>

<script>
    var data = [{
        "id": "123456",
        "city": "京都",
        "score": 3,
        "money": 200,
        "content": "京都style",
        "place": "haha"
    },
    {
        "id": "234567",
        "city": "天津",
        "score": 6,
        "money": 400,
        "content": "天津style",
        "place": "skjsksjk"
    }];

    // 获取数据模板
    console.log($('#temp').html());
    var template = _.template($('#temp').html());

    // 渲染数据
    $('#app').html(template(data));
</script>
```
### 浏览器兼容

[检测浏览器版本](http://www.cnblogs.com/rubylouvre/archive/2009/10/14/1583362.html)

```js

/**
 * 修复 ie8 以下 placeholder 兼容性问题
 * @param  {Object} css 忽略, 待完善...
 * @return undefined
 */
function fixPlaceholder(css) {
    var ieVersion = eval("''+/*@cc_on"+" @_jscript_version@*/-0") * 1;
    var ie8 = ieVersion === 5.8;
    var ie7 = ieVersion === 5.7;
    var ie6 = ieVersion === 5.6;

    if (ie8 || ie7 || ie6) {
        $('.fixplaceholder').each(function (index, element) {
            var placeText = $(element).attr('placeholder');
            $(element).val(placeText)
                .click(function (e) {
                    if ($(this).val() === placeText) {
                        $(this).val('');
                    }
                })
                .blur(function (e) {
                    var val = $(this).val();
                    if (!$.trim(val)) {
                        $(this).val(placeText);
                    }
                });

        });
    }
}

```

### 移动端开发经验总结

1. icon 小标志记得留buffer (比如一个 icon 3x3, 实际大约要是 3.2x3.2)
2. 能加 line-height 的地方尽量添加 line-height
3. 需要对其的元素, 设计时需要放到一起, 不然错行问题够恶心
4. 页面最底部不要用 margin-bottom 去撑开, 用 padding-bottom
5. 容错处理放到第一位
