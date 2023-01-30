# JavaScript简写技巧
## 一、变量声明
```js
let a = 1;
let b = 2;

// 简写 ==》
let a=1,b=2;
```
## 二、给多个变量赋值
```js
let a, b, c;
a = 5;
b = 8;
c = 12;

// 简写 ==》
let [a, b, c] = [5, 8, 12];
```
## 三、三元运算符
```js
let marks = 26;
let result;
if(marks >= 30){
 result = 'Pass';
}else{
 result = 'Fail';
}

//简写 ==》
let result = marks >= 30 ? 'Pass' : 'Fail';
```
## 四、默认赋值
### 1. ||（属性的值如果为空字符串或false或0，默认值也会生效）
我们可以使用 OR(||) 短路运算来给一个变量赋默认值，如果预期值不正确的情况下。
```js
let imagePath;
let path = getImagePath();
if(path !== null && path !== undefined && path !== '') {
  imagePath = path;
} else {
  imagePath = 'default.jpg';
}

// 简写==》
let imagePath = getImagePath() || 'default.jpg';
```
### 2. ??（只有当属性值为null或者undefined才会生效）
```js
let obj = {
  a: 1,
  b: 0
}
let a = obj.a ?? '--';
let b = obj.b ?? '--';
console.log(a, b) // 1 0
```
## 五、与（&&）短路运算
```js
let isLoggedin = true;
if (isLoggedin){
	goToHomepage();
}
// 简写==》
isLoggedin && goToHomepage();
```
当你在 React 中想要有条件地渲染某个组件时，这个与 (&&)短路写法比较有用。
```js
<div> { this.state.isLoading && <Loading /> } </div>
```
## 六、对象内某个值不为空判断
链判断运算符 ?.
```js
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';

// 简写 ==》
const firstName = message?.body?.user?.firstName || 'default';
```
上面代码使用了?.运算符，直接在链式调用的时候判断，左侧的对象是否为null或undefined。如果是的，就不再往下运算，而是返回undefined。
## 七、重复一个字符串多次
```js
let str = '';
for(let i = 0; i < 5; i ++) {
  str += 'Hello ';
}
console.log(str);

// 简写 ==》
let str = 'Hello '.repeat(5);
console.log(str);
```
## 八、对象属性的简写
如果变量名和对象的属性名相同，那么我们只需要在对象语句中声明变量名，而不是同时声明键和值。JavaScript 会自动将键作为变量的名，将值作为变量的值。
```js
let firstname = 'Amitav';
let lastname = 'Mishra';
let obj = {firstname: firstname, lastname: lastname};

// 简写==》
let obj = {firstname, lastname};
```
## 九、合并数组
```js
let arr1 = [20, 30];
let arr2 = arr1.concat([60, 80]);
// [20, 30, 60, 80]

// 简写==》
let arr2 = [...arr1, 60, 80];
// [20, 30, 60, 80]
```
## 十、箭头函数
```js
function add(num1, num2) {
   return num1 + num2;
}
// 简写==》
const add = (num1, num2) => num1 + num2;
```
## 十一、模板字符串
```js
console.log('You got a missed call from ' + number + ' at ' + time);

// 简写==》
console.log(`You got a missed call from ${number} at ${time}`);
```
## 十二、多条件查询
对于多个值匹配，我们可以将所有的值放到数组中，然后使用indexOf()或includes()方法。
```js
//Longhand
if (value === 1 || value === 'one' || value === 2 || value === 'two') {
     // Execute some code
}

// 简写==》
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) {
    // Execute some code
}
if ([1, 'one', 2, 'two'].includes(value)) {
    // Execute some code
}
```
## 十三、解构赋值
```js
let obj = {
	a:10,
  b:2
}
// const { a } = obj;
const { a = 0, b } = obj;
console.log(a,b); // 10 2
```
一般在接口请求中，拿到接口返回的数据很常用
## 十四、对象的合并
1. Object.assign
2. 扩展运算符(...)
```js
let aWithDefaults = Object.assign({}, { x: 1, y: 2 }, a);

let aWithDefaults = { x: 1, y: 2, ...a };
```
## 十五、Promise
## 十六、async...await
## 十七、大括号里面可以直接写方法
```js
const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};
```
## 十八、对象扩展运算符中添加判断条件
```js
const config = {c: 3};
let configs = {
	...config,
  ...(true ? {a:1} : {b:3})
}

console.log(configs) // {c: 3, a: 1}

react/vue组件传参
可以控制p2参数是不是要往下面传
<Ac
  p1={1}
	{...(true && {p2: 1})}
/>
```
## 十九、返回值简写
```js
(a) => {
	return a+1
}

==>
/*
1、只有一个参数可以去掉括号
2、只有一行返回值可以去掉return和{}
*/
a => a+1
```
## 二十、颜色RGB转十六进制
```js
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255);
// Result: #0033ff
```
## 二十一、过滤空值
```js
const groceries = ['apple', null, 'milk', undefined, 'bread', ''];

const cleanList = groceries.filter(Boolean);

console.log(cleanList);

// 'apple', 'milk', 'bread';
```
## 二十二、数字分割
对大数字使用分隔符号，将极大的提高可读性；这是 ES12 的新特性；
```js
const bigNumber = 1_000_000;
console.log(bigNumber);
// 1000000
```
