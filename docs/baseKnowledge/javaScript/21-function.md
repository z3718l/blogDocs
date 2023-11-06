# 函数（Function）

## 前言
【函数】在计算机中表示一个固定的代码片段。函数在前端中是最重要的，正所谓“函数是一等公民”。

## 一、函数的几要素
### 1.1 函数名
函数名就是指向函数的指针。跟其他对象的指针一样，存在栈内存中，我们写的函数体存在堆内存中。
### 1.2 函数参数
函数的参数包括形参和实参
### 1.3 函数体
函数体就是`{}`包含的部分，就是函数执行的主体，我们写的逻辑都是放在这里的。
### 1.4 函数的返回值
- 每个函数只有一个返回值
- 函数的返回值就是`return`出去的东西
- 如果函数没有写`return`，默认是`undefined`
- 使用return的时候，函数就会停止执行，并返回结果
```js
var fun = function () {
    return 1;
}
console.log(fun()); // 1

// ====> 改版
var fun = function () {}
console.log(fun()); // undefined
```

## 二、箭头函数
:::tip
1. 箭头函数没有this
2. 箭头函数没有原型
3. 不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。
4. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
5. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
:::
### ES6 允许使用“箭头”（=>）定义函数。
```js
var f = v => v;
// 等同于
var f = function (v) {
  return v;
};
```
### 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
```js
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```
### 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
```js
var sum = (num1, num2) => { return num1 + num2; }
```
### 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
```js
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
```
### 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
```js
let fn = () => void doesNotReturn();
```
### 箭头函数的一个用处是简化回调函数。
```js
// 普通函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);
```

## 三、函数如何声明

## 四、函数的属性与方法

## 五、递归

## 六、函数重载
