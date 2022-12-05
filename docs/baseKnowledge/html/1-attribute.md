# 新标签和属性

## 一、常用标签
1. header：头部、页眉
2. footer：脚部、底部
3. nav：标记导航
4. section：web页面中的一块区域
5. article：独立的文章内容
6. aside：定义侧栏标签
7. audio：定义音频
8. video：定义视频
9. canvas：画布
10. time：定义时间

## 二、重要属性
1. alt：定义元素的替换文本
2. title：定义元素的提示文本
3. lang：定义元素的语言代码或编码
4. src：定义引入文件
5. contentEditable：允许用户爱现编辑元素中的内容
6. hidden：通知浏览器不渲染该元素，使元素处于不可见状态

## 三、Href和Src有什么区别
Href(hyperReference): 超文本引用，当浏览器遇到href时，会并行的地下载资源，不会阻塞页面解析，例如我们使用引入CSS，浏览器会并行地下载CSS而不阻塞页面解析. 因此我们在引入CSS时建议使用而不是@import
```js
<link href="style.css" rel="stylesheet" />
```
src(resource): 资源，当浏览器遇到src时，会暂停页面解析，直到该资源下载或执行完毕，这也是script标签之所以放底部的原因
```js
<script src="script.js"></script>
```

## 四、Meta有哪些属性，作用是什么
meta标签用于描述网页的元信息，如网站作者、描述、关键词，meta通过name=xxx和content=xxx的形式来定义信息，常用设置如下：

1. charset: 定义html文档的字符集
2. http-equiv：可用于模拟http请求头，可设置过期时间、缓存、刷新
3. viewport：视口，用于控制页面宽高及缩放比例

## 五、Viewport有哪些参数，作用是什么
