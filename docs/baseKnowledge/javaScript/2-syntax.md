# 语句和语法

## 一、严格模式
严格模式是一种不同的 JavaScript 解析和执
行模型，ECMAScript 3 的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。
> 如何开启严格模式
脚本开头加上这行代码
```js
"use strict";
```
> 也可以只给一个函数添加严格模块
```js
function myFunc() {
 "use strict";
 // 函数体
}
```
现代浏览器都支持严格模式

## 二、`if` 语句
`if`语句是使用最频繁的语句
这里要注意的是，`if`语句虽然常用，但是有很多替代方案，因为`if else `太多了，代码就不优雅了。
> if判断的简写
```js
// 如果是单行代码，可以不写{}
if (true) console.log(1);
```
> if判断的优雅写法
```js
// 1、传统写法
function test1 (p) {
    if (p == 1) {
        console.log('执行1');
    } else if (p == 2) {
        console.log('执行2');
    }
}
console.log(test1(1)); // 执行1

// 2、对象写法
const testP = {
    1: () => console.log('执行1'),
    2: () => console.log('执行2'),
}
console.log(testP[1]); // 执行1

// 3、new Map()写法
const MF = new Map([
    ['2', () => { console.log('2') }],
    ['3', () => { console.log('3') }],
    ['4', () => { console.log('4') }],
])
console.log(MF.get('3')()); // 2

const MF = new Map()
  .set('2', ['apple', 'strawberry'])
  .set('3', ['banana', 'pineapple'])
  .set('4', ['grape', 'plum']);
console.log(MF.get('3')); // 'apple', 'strawberry'

// 4、如果判断条件不一致
使用对象的也不太合适，但是也不要写`if else`
function test1 (p, d) {
    if (p == 1) {
        console.log('执行1');
    } else if (d == 2) {
        console.log('执行2');
    }
}
改进
function test1 (p, d) {
    if (p == 1) {
        console.log('执行1');
        return;
    }
    if (d == 2) {
        console.log('执行2');
        return;
    }
}

总结：
1. 很明显对象写法和new Map写法比if 或者 switch写法更加优雅；
2. new Map() 的查询速度会比对象更快
3. 所以推荐使用new Map()方法
```

## 三、`while` 语句
```js
let i = 0;
while (i < 10) {
 i += 2;
}
```
> 注意：使用`while`循环，要注意循环条件，不然很容易造成栈溢出

## 四、`for-in` 语句
`for-in`语句是一种精准的迭代语句，可以用来枚举对象的属性。
```js
for (var propName in window) {
 document.write(propName);
}
```

## 五、`break` 和 `continue` 语句
`break` 和 `continue` 语句为执行循环代码提供了更严格的控制手段。其中，`break` 语句用于立即退
出循环，强制执行循环后的下一条语句。而 `continue` 语句也用于立即退出循环，但会再次从循环顶部
开始执行。

## 六、`with` 语法
`with` 语句的用途是将代码作用域设置为特定的对象。
在vue2源码中生成render函数时会使用到
```js
export function compileToFunctions(template) {
    parseHTML(template);
    let code = generate(root);
    let render = `with(this){return ${code}}`;
    let renderFn = new Function(render);
    return renderFn
}
```
> 注意：由于with语句影响性能并且很难调试，所以不建议在业务代码中使用，一般情况下在框架或者库代码中会用到

## 七、`switch` 语句
```js
switch (i) {
 case 25:
 console.log("25");
 break;
 case 35:
 console.log("35");
 break;
 case 45:
 console.log("45");
 break;
 default:
 console.log("Other");
}
可以改写if else，但是也不是很优雅
```
> 注意：
> 1. 为了避免不必要的条件判断，最好给每个条件后面都加上`break`语句；
> 2. `switch` 语句在比较每个条件的值时会使用全等操作符，因此不会强制转换数据类
型（比如，字符串"10"不等于数值 10）。

:::tip
总结：
1. 超过两个判断的就尽量不用`if else`，而是使用对象或者`new Map`
2. 如果判断条件不一致，使用单个`if`语句，这样看起来优雅些，不至于代码混乱
3. 循环的时候要注意循环条件，避免造成栈溢出
:::