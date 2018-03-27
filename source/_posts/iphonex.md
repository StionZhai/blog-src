---
title: 前端判断 iPhone X 机型
date: 2017-11-08 01:29:35
tags:
---

> 关于 iPhone X 的前端适配这里不再赘述, 只讲前端如何识别 iPhone X

<!-- more -->

iPhone X 的前端适配技巧已经很详细了, 具体可参考:

- [剖析 iOS 11 网页适配问题](https://objcer.com/2017/09/21/Understanding-the-WebView-Viewport-in-iOS-11-iPhone-X/)

找了好久如何判断是否为 iPhone X 的方法, 并没有发现, 甚至 [webkit.org](https://webkit.org/blog/7929/designing-websites-for-iphone-x/) 的 blog 和 Apple 爸爸的官网都没发现

等静下心来好好补充一下, 先贴上自己的实现:

```
isIphoneX: function () {
    return /iphone/i.test(navigator.userAgent)
        && window.screen.width === 375
        && window.devicePixelRatio === 3;
}
```
