# 前言

## 一、寄语
本次JavaScript知识总结，主要是回顾基础知识并且深入底层知识，主要包含原型、作用域、闭包、this等重难点。
如有错误或者不足之处，烦请个位大佬指出，非常感谢。

## 二、HTML中的JavaScript
### 2.1 `<script>标签</script>`
> 目的：让`JavaScript`可以与注入到`HTML`页面。

常用属性:

1. `async(可选) `:
    **关键词：`异步执行 不保证执行顺序 外部文件`**

    当标签中包含这个属性时会立即下载脚本（外部文件），`只对外部脚本文件有效`，下载的同时可以进行页面的其他操作，下载完成后停止解析并执行，执行后继续进行解析，`但不能保证执行顺序`。

2. `defer（可选）`:
    **关键词：`立即下载 延迟执行 外部文件`**

    当标签中包含这个属性时，脚本可以再等到页面完全被解析或显示之后执行，`只对外部文件有效`，如果同时存在两个带有defer的脚本，由于延迟的原因，前者将会优先于后者执行。
3. `charset（可选）`:
    **关键词：`字符集`**

    大多数浏览器已经忽略它的值了，所以很少有人使用。

4.  `src（可选）`:
    **关键词：`外部引用`**

    指明要引用的外部脚本文件的地址。

5. `type（可选）`:
    **关键词：`MIME（脚本语言的内容类型）`**

    为保证最大限度的浏览器兼容，type的属性值主要时候用的依旧是text/javascript，如果没有写这个属性，其默认值仍然为text/javascript。

### 2.2 执行顺序
浏览器都会按照`<script>`在页面中出现的顺序依次解释它们，前提是它
们没有使用 `defer 和 async` 属性。第二个`<script>`元素的代码必须在第一个`<script>`元素的代码解
释完毕才能开始解释，第三个则必须等第二个解释完，以此类推。

过去的做法，`<script>`元素都应该放在页面的`<head>`元素中，如下
```html
<!DOCTYPE html>
<html>
 <head>
 <title>Example HTML Page</title>
 <script src="example1.js"></script>
 <script src="example2.js"></script>
 </head>
 <body>
 <!-- 这里是页面内容 -->
 </body>
</html>
```
这种做法的主要目的是把外部的`CSS和JavaScript` 文件都集中放到一起。不过，把所有`JavaScript`
文件都放在`<head>`里，也就意味着必须把所有 `JavaScript`代码都下载、解析和解释完成后，才能开始渲
染页面（页面在浏览器解析到`<body>`的起始标签时开始渲染）。对于需要很多`JavaScript`的页面，这会
导致页面渲染的明显延迟，在此期间浏览器窗口完全空白。
为解决这个问题，现代`Web`应用程序通常
将所有`JavaScript`引用放在`<body>`元素中的页面内容后面，如下
```html
<!DOCTYPE html>
<html>
 <head>
 <title>Example HTML Page</title>
 </head>
 <body>
 <!-- 这里是页面内容 -->
<script src="example1.js"></script>
<script src="example2.js"></script>
 </body>
</html>
```
这样一来，页面会在处理`JavaScript`代码之前完全渲染页面。用户会感觉页面加载更快了，因为浏
览器显示空白页面的时间短了。

### 2.3 `<noscript>`元素
针对早期浏览器不支持 `JavaScript` 的问题，需要一个页面优雅降级的处理方案。最终，`<noscript>`
元素出现，被用于给不支持 `JavaScript` 的浏览器提供替代内容。虽然如今的浏览器已经 100%支 持
`JavaScript`，但对于禁用 `JavaScript` 的浏览器来说，这个元素仍然有它的用处。
