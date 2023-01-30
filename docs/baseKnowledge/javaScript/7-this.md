# this
## 前言
this和闭包、原型链等一样都是JS老生常淡的问题，开发还多年了，还没有真正弄明白的`this`的人应该也不在少说(我也是其中之一)，其实this就是概念抽象，变化多端搞的有些晕头转向，平心而论，this并不是很难，今天我们就来一起重新学习this。

## 一、默认绑定
在严格模式下，`this`指向`undefined`；在非严格模式下，`this`指向全局对象。
```js
function foo() {
  console.log(this.a); // this指向全局对象
}
var a = 2;
foo(); // 2
function foo2() {
  "use strict"; // 严格模式this绑定到undefined
  console.log(this.a);
}
foo2(); // TypeError:a undefined
```
再比如函数和调用都在严格模式
```js
"use strict";
var name = 'zhangsan';
function fn() {
    console.log(this); //undefined
    console.log(this.name);// 报错
};
fn();
```
如果在严格模式下调用不在严格模式中的函数，并不会影响this指向
```js
var name = 'zhangsan';
function fn() {
    console.log(this); //window
    console.log(this.name); // zhangsan
};

(function () {
    "use strict";
    fn();
}());
```

## 二、隐式绑定
函数在调用位置，是否有上下文对象，如果有，那么this就会隐式绑定到这个对象上。
```js
function foo() {
    console.log(this.a);
}
var a = "Oops, global";
let obj2 = {
    a: 2,
    foo: foo
};
let obj1 = {
    a: 22,
    obj2: obj2
};
obj2.foo(); // 2 this指向调用函数的对象
obj1.obj2.foo(); // 2 this指向最后一层调用函数的对象

// 隐式绑定丢失
let bar = obj2.foo; // bar只是一个函数别名 是obj2.foo的一个引用
bar(); // "Oops, global" - 指向全局
```
> 隐式绑定丢失的问题：实际上就是函数调用时，并没有上下文对象，只是对函数的引用，所以会导致隐式绑定丢失。
## 三、显式绑定
我们可以通过`apply`、`call`、`bind`将函数中的`this`绑定到指定对象上。
```js
let obj1 = {
    name: 'zhangsan'
};
let obj2 = {
    name: 'lisi'
};
let obj3 = {
    name: 'wangwu'
}
var name = 'hh';

function fn() {
    console.log(this.name);
};
fn(); //hh
fn.call(obj1); //zhangsan
fn.apply(obj2); //lisi
fn.bind(obj3)(); //wangwu
```
:::tip
[call、apply、bind的区别](https://www.yuque.com/hmohvc/zqve2v/de3aex)
:::
## 四、new绑定
:::tip
new关键字都做了什么
1. 创建一个新对象
2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
3. 执行构造函数中的代码（为这个新的对象添加属性）【设置原型链，新对象的__proto__指向构造函数的prototype对象】
4. 判断：如果构造函数return的是一个对象，则返回这个新对象；如果不是对象，则默认返回原来的对象
:::
使用构造调用的时候，this会自动绑定在new期间创建的对象上。
```js
function foo(a) {
  this.a = a; // this绑定到bar上
}
let bar = new foo(2);
console.log(bar.a); // 2
```
## 五、几种绑定规则的优先级
如果在某个调用位置应用了多条规则，如何确定哪条规则生效？
```js
obj.foo.call(obj2); // this指向obj2 显式绑定比隐式绑定优先级高。
new obj.foo(); // thsi指向new新创建的对象 new绑定比隐式绑定优先级高。
```
显式绑定和new绑定无法直接比较(会报错),默认绑定是不应用其他规则之后的兜底绑定所以优先级最低，所以结论：
:::tip
<b>显式绑定 > 隐式绑定 > 默认绑定</b> <br/>
<b>new绑定 > 隐式绑定 > 默认绑定</b>
:::
## 六、特殊的箭头函数
概览的说，箭头函数中没有this。箭头函数的`this`指向取决于外层作用域中的`this`，外层作用域或函数的`this`指向谁，箭头函数中的`this`便指向谁
```js
function foo() {
  return () => {
    console.log(this.a);
  };
}
let obj1 = {
  a: 2
};
let obj2 = {
  a: 22
};
let bar = foo.call(obj1); // foo this指向obj1
bar.call(obj2); // 输出2 这里执行箭头函数 并试图绑定this指向到obj2
```
总结：
1. 箭头函数中的this继承于它外面第一个不是箭头函数的函数的this指向。
2. 箭头函数的 this 一旦绑定了上下文，就不会被任何代码改变。
## 七、this的设计缺陷和应对方案
缺陷1：嵌套函数中的`this`不会从外层函数中继承
```js
var myObj = {
    name: 'zhangsan',
    showThis: function() {
        console.log(this);
        function bar() {
            console.log(this);
        }
        bar()
    }
}
myObj.showThis()
```
函数bar中的this指向的是全局window对象，⽽函数showThis中的this指向的是myObj对象。<b>箭头函数解决</b> <br/>
缺陷2：普通函数中的`this`默认指向全局对象`window`
在严格模式下，默认执⾏⼀个函数，其函数的执⾏上下⽂中的`this`值是`undefined`
:::tip
小结一下：
1. 全局执⾏上下⽂中的`this`指向`window`对象
2. 函数执行上下文中的`this`
   1. 通过函数的`call`，`apply`，`bind`⽅法设置
   2. 通过对象调⽤⽅法设置
   3. 通过构造函数中设置`new`
:::
