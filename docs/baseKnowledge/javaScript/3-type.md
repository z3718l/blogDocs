# 类型与检查方式

## 一、八大数据类型
1. [Undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined)
   - 基本数据类型
   - 声明的变量没有初始化时，默认是undefined，只有一个值
2. [Null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null)
   - 基本数据类型
   - 特殊值null，表示一个空对象指针，这也是typeof null返回object的原因
   - 在定义将来要保存对象值的变量时，建议使用null来进行初始化
3. [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)
   - 基本数据类型
   - 有两个字面量，true/false
4. [String](https://developer.mozilla.org/zh-CN/docs/Glossary/String)
   - 基本数据类型
   - 字符串是不可变的，一旦创建，值就不能变，想要修改就要销毁原来的字符串
5. [Number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)
   - 基本数据类型
   - 既可以表示整型也可以表示浮点型
   - `Number.MIN_VALUE`最小值
   - `Number.MAX_VALUE`最大值
   - 如果超过最大值和最小值的范围，就会转成`Infinity`无穷大
   - `isFinite()`判断某个值是否是有限大(介于最大值和最小值之间)
   - `NaN`是一个特殊的数值
   - `isNaN()`判断某个值是否“不是数值”
6. [BigInt](https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt)
   - 基本数据类型
   - 是一种数字类型的数据，它可以表示任意精度格式的整数
7. [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
   - 确保对象属性使用唯一标识符，不会发生属性冲突的危险
8. [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
   - 一组数据和功能的集合
   - 属于复杂数据类型

> null是特殊的对象，typeof null返回的是object

## 二、类型的判断
### 2.1 `typeof`
[typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 操作符返回一个<font color=red>字符串</font>，表示未经计算的操作数的类型。
```js
let aa = '1';
typeof aa => 'string'；

let bb = 1;
typeof bb => 'number'；

let cc = {}
typeof cc => 'object'；

let dd = []
typeof dd => 'object'；

let ee = null
typeof ee => 'object'；

let ff = function(){}
typeof ff => 'function'；
```
> 缺点：不能判断对象的类型。因为{}、[]、null判断出来的都是"object";

### 2.2 constructor
[constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)属性返回一个指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身，一般判断这个变量是怎么构造出来的。
```js
function Animal(){}
var a = new Animal
a.constructor === Animal    // true
```
> 缺点：
> 1. 只能用于检测对象，而且因为`constructor`是属性，在基本数据类型上调用会抛出异常
```js
null.constructor         // TypeError
undefined.constructor    // TypeError
```
> 2. 检测数字、字符串、布尔类型，JavaScript会自动调用其构造函数来生成一个对象
```js
(1).constructor === Number // true
true.constructor === Boolean // true
'qwer'.constructor === String // true
// 相当于
(new Number(1)).constructor === Number
(new Boolean(true)).constructor === Boolean
(new String('qwer')).constructor === String
```

### 2.3 instanceof
[instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)操作符用于检查某个对象的原型链是否包含某个构造函数的`prototype`属性，返回true/false。
- 通过<font color=red>原型链</font>来检查类型的
```js
// 比如直接原型关系
function Animal(){ }
(new Animal) instanceof Animal     // true

// 原型链上的间接原型
function Cat(){}
Cat.prototype = new Animal
(new Cat) instanceof Animal         // true
```
- 可以用来检测内置兑现，比如`Array`, `RegExp`, `Object`, `Function：`等
```js
[1, 2, 3] instanceof Array // true
/abc/ instanceof RegExp // true
({}) instanceof Object // true
(function(){}) instanceof Function // true
```
> 缺点：
> 1. 不能用来判断7种基本类型值，因为基本数据类型没有原型链
```js
'str' instanceof String  //false
1 instanceof String  //false
true instanceof Boolean // false
BigInt(10) instanceof BigInt // false
Symbol() instanceof Symbol // false
undefined instanceof undefined // TypeError: Right-hand side of 'instanceof' is not an object
null instanceof null // TypeError: Right-hand side of 'instanceof' is not an object
```
> 2. 不能正确判断 Object 类型
```js
// 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。
[] instanceof Array // true
[] instanceof Object; // true

function Person(){}
new Person() instanceof Person //true
new Person() instanceof Object;// true
```

> 3. `prototype` 属性的值是可变的，所以不可靠
```js
function A(){}
let a = new A()
a instanceof A //true

//修改构造函数的prototype
A.prototype = null
a instanceof A //false

// 修改对象的原型链
b.__proto__ = null
b instanceof A //false
```

> 4. 不能用于跨窗口判断。在浏览器中，我们的脚本可能需要在多个 frame 或 window 之间的交互。多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。这可能会引发一些问题。比如：
```js
document.body.appendChild(document.createElement('iframe'))
let xArray = window.frames[0].Array
let arr = new xArray(1,2,3)

arr instanceof xArray //true
arr instanceof Array //false
```
> 针对数组的这个问题，ES5 提供了 Array.isArray() 方法 。该方法用以确认某个对象本身是否为 Array 类型，而不区分该对象在哪个环境中创建。

### 2.4 `toString`
`toString`方法是目前最为可靠的类型检测手段，它会将当前<font color=red>对象</font>转换为<font color=red>字符串</font>并输出。 `toString`属性定义在`Object.prototype`上，因而所有对象都拥有`toString`方法。 但`Array`, `Date`等对象会重写从`Object.prototype`继承来的`toString`， 所以最好用`Object.prototype.toString`来检测类型。
```js
Object.prototype.toString.call(variable)
```
> 缺点
> 1. 无法检测用户自定义类型。\
> toString也不是完美的，它无法检测用户自定义类型。 因为Object.prototype是不知道用户会创造什么类型的， 它只能检测ECMA标准中的那些内置类型。
```js
function A( ){}
let a = new A()

Object.prototype.toString.call(a) //[object Object]
```
> 优点
> 1. 避免了跨窗口问题 \
> 因为返回值是字符串，也避免了跨窗口问题。当然IE弹窗中还是有Bug，不必管它了。

:::tip
总结：
1. `typeof`只适用于基本数据类型，对于`null`还有`Bug`
2. `instanceof`适用于构造函数创建的对象，它是基于原型链运作的
3. `constructor`适用于`ECMA`内置`JavaScript`类型和构造函数创建的对象，无法判断`null`、`undefined`
4. `toString`适用于`ECMA`内置`JavaScript`类型（包括基本数据类型和内置对象）的类型判断
5. `instanceof`和`constructor`是不安全的，且都有跨窗口问题
:::
**总而言之，如果要判断的是基本数据类型或JavaScript内置对象，使用toString； 如果要判断的是自定义类型，请使用instanceof或constructor。**
<!-- <font color=red>想变成红色的内容</font> -->
