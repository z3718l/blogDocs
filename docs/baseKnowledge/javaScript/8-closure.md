# 闭包
## 一、概念
当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包。
> 闭包的核心就是词法作用域
## 二、什么是闭包
```js
function foo() {
    var a = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}
var baz = foo();
baz(); // 2 这就是闭包的效果
```
根据词法作用域的规则，内部函数bar总是可以访问外包函数foo中的变量，所以当返回bar时，foo函数其实已经执行结束，但是bar函数依然可以使用foo函数中的变量a。

foo函数执行完成之后，其执行上下文从栈顶弹出，但是由于bar函数内部存在foo作用域下的变量，所以这个a变量依然保存在内存中。这就像极了bar方法背的一个专属背包，无论哪里调用，他们都会背着这个foo函数的专属背包。这个背包就称为foo函数的闭包。

## 三、闭包的作用
1. 提供私有的全局变量
2. 在函数调用之间保存变量(状态)

## 四、闭包的缺点
1. 变量无法销毁，容易造成内存泄露