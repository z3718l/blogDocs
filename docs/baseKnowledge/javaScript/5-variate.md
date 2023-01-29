# 变量
## 前言
提到变量，首先提到的就是变量的声明，常见的声明方式`var`，ES中又新增了`let`和`const`两种声明方式。以下我们将从变量的声明和变量的提升进一步了解<font color="red">【变量】</font>

## 一、变量的声明
### `var`
[var](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 声明的变量在作用域内都会存在变量提升。

### `let`
[let](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)声明的变量，只在`let`命令所在的代码块内有效。

### `const`
[const](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)常量是块级范围的，非常类似用 let 语句定义的变量。但常量的值是无法（通过重新赋值）改变的，也不能被重新声明。

## 二、变量的提升
[变量提升的概念](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)
简单的说，变量提升是值JS代码执行过程中，JS引擎把变量声明和函数声明提升到函数顶部，变量提升后会被赋值`undefined`,而不是像在块级作用域中报错。
```js
console.log(a); // undefined
var a = 10;
因为存在变量提升，所以

=====等价于=====

var a;
console.log(a);
a = 10;
```
所以a被提升到了代码顶端，全局下都能访问

除了变量提升之外，函数也存在提升，以下是会提升的具名函数声明方式
```js
//函数声明式：
function foo () {}
//变量形式声明：
var fn = function () {}
```
```js
var a = 10; // 全局变量
function fn1() {
    // 函数的变量提升：因为在函数执行之前，先创建了函数的EC，
    // 在创建EC的时候，已经把函数里面声明的变量都已经初始化成了undefined（具体的初始化参考上面执行上下文）

    // 所以：由于hositing存在，很多人就习惯把函数内部所有的变量声明放在函数的头部
    console.log(a)  // undefined
    var a = 19
    cosnsole.log(a)  // 19
}
console.log(a) // 10 打印的是全局作用下的a
```
:::tip
<font color="red">特殊情况</font>：变量声明和函数声明 同时拥有一个名字的时候，函数优先级高（`JavaScript`中函数是一等公民）
:::
```js
console.log(b) // b=> function
var b = 9;      // 因为js是动态语言，把b重新赋值9，把之前的function覆盖
function b () {}
console.log(b) // b=>9
```

## 三、为什么会出现变量提升
变量提升和 `JS` 的编译过程密切相关：`JS` 和其他语言一样，都要经历编译和执行阶段。在这个短暂的【编译阶段】，`JS` 引擎会搜集所有的变量声明，并且提前让声明生效。而剩下的语句需要等到执行阶段、等到执行到具体的某一句时才会生效。这就是变量提升背后的机制。

> 变量提升的好处
### 1. 提高性能
在JS代码执行之前，会进行语法检查和预编译，并且这一操作只进行一次。这么做就是为了提高性能，如果没有这一步，那么每次执行代码前都必须重新解析一遍该变量（函数），这是没有必要的，因为变量（函数）的代码并不会改变，解析一遍就够了。
在解析的过程中，还会为函数生成预编译代码。在预编译时，会统计声明了哪些变量、创建了哪些函数，并对函数的代码进行压缩，去除注释、不必要的空白等。这样做的好处就是每次执行函数时都可以直接为该函数分配栈空间（不需要再解析一遍去获取代码中声明了哪些变量，创建了哪些函数），并且因为代码压缩的原因，代码执行也更快了。


### 2. 容错性好
变量提升可以在一定程度上提高JS的容错性，看下面的代码：
```js
console.log(a);
var a = 10;
```
如果没有变量提升，就会报错，有了变量提升，代码就能正常执行。

## 四、变量提升导致的问题
### 1. 变量被覆盖
```js
var name = "zhangsan"
function getName(){
  console.log(name);
  if(0){
   var name = "lisi"
  }
}
getName()
```
这里会输出`undefined`而不是`zhangsan`，这是为什么呢？？？

### 2. 变量没有被销毁
```js
function foo(){
  for (var i = 0; i < 5; i++) {
  }
  console.log(i);
}
foo()
```
使用其他的大部分语言实现类似代码时，在 for 循环结束之后，i 就已经被销毁了，但是在 JavaScript 代码中，i 的值并未被销毁，所以最后打印出来的是 5。这也是由变量提升而导致的，在创建执行上下文阶段，变量 i 就已经被提升了，所以当 for 循环结束之后，变量 i 并没有被销毁。

针对这些问题，ES6中引入了`let`和`const`，来禁止变量提升。

## 五、相关面试题
```js
var a = 18; // 全局作用域
function d() {
    console.log(a) // a=>undefined  函数作用域
    var a = {age:19};
    console.log(a) // a=>{age: 19};  a被重新赋值
}
d();
console.log(a)  // 18
```
```js
// 在浏览器中，全局对象就是window
// 在全局作用域中声明的变量和函数声明都会作为window的属性存在

// ("a" in window) 是true，因为if内声明了a，js中没有块级作用域，所以最开始的时候，a已经提升到全局了
// !("a" in window) => false
// 所以a=1就不会执行
if (!("a" in window)) {
    var a = 1
}
console.log(a) // a => undefined  所以这里打印a就是undefined
```
```js
// 变量和函数同名，函数的优先级高。
// js是动态语言，执行到a = 20的时候，又会重新赋值
console.log(a)  // a=>function(){}
var a = 20
console.log(a) // a => 20
function a() {}
```
```js
f()
// console.log(a)  // a is not defined  无法访问函数变量中的a，b c没有var，所以是全局变量
console.log(b)  // a报错 不执行
console.log(c)  // a报错 不执行
console.log(a)  // a is not defined  无法访问函数变量中的a，b c没有var，所以是全局变量
// 如果把a放在下面，就不会影响b c的执行了 b=>9  c=>9
function f() {
    var a = b = c = 9;
    // 如果是定义三个局部变量
    var a = 9, b = 9, c = 9 // 这样的话 三个都是局部变量
    console.log(a) // 9
   console.log(b) // 9
   console.log(c) // 9
}
```
```js
f()
function f() {
    for(var k = 0; k < 10; k ++) {
        console.log(k) // 0-9
    }
    console.log(k) // 10  js没有块级作用域
}
```