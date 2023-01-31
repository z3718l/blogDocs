# 重构方案
## 1. 变量
1. 使用有意义并且可读性好的变量名
```js
// bad
var yyyymmdstr = moment().format('YYYY/MM/DD');

// good
var yearMonthDay = moment().format('YYYY/MM/DD');

// bast 帮你起变量名字
// http://codeif.xinke.org.cn/
```
2. 当使⽤了很多相似的变量的时候 将他们合并到⼀块
```js
//bad
getUserInfo();
getClientData();
getCustomerRecord();

//good
getUser();
```
3. 使⽤可检索的变量名
```js
//bad 525600 是个啥？
for (var i = 0; i < 525600; i++) {
    runCronJob();
}

//good
const MINUTES_IN_A_YEAR = 525600;
for (let i = 0; i < MINUTES_IN_A_YEAR; i++) {
    runCronJob();
}
```
4. 使⽤⽅便理解的中间变量
```js
//bad
const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
saveCityState(cityStateRegex.match(cityStateRegex)[1],
cityStateRegex.match(cityStateRegex)[2]);

//good
const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
const match = cityStateRegex.match(cityStateRegex)
const city = match[1];
const state = match[2];
saveCityState(city, state);

//best
const [city,state] = match;
```
5. 不要绕太多的弯子
显式优于隐式。
```js
// bad
var locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((l) => {
  doStuff();
  doSomeOtherStuff();
  ...
  ...
  ...
  // l是什么？
  dispatch(l);
});

// good
var locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  ...
  ...
  ...
  dispatch(location);
});
```
6. 不要添加没必要的上下⽂
如果你的类名称/对象名称已经说明了它们是什么，不要在(属性)变量名⾥重复。
```js
//bad
var Car = {
    carMake: 'Honda',
    carModel: 'Accord',
    carColor: 'Blue'
};
function paintCar(car) {
    car.carColor = 'Red';
}

// good
var Car = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
};
function paintCar(car) {
    Car.color = car.color;
}
paintCar({color:'Red'});

// best
const Car = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
};
function paintCar({color}) {
    Car.color = color;
}
```
7. 短路语法⽐条件语句更清晰
```js
//bad
function createMicrobrewery(name) {
    var breweryName;
    if (name) {
        breweryName = name;
    } else {
        breweryName = 'Hipster';
    }
}
//good
function createMicrobrewery(name) {
var breweryName = name || 'Hipster'
var breweryName = name ?? 'Hipster'
//var breweryName = name.x?.a ??
}
```
:::tip
- 使用 ?? 时，只有`name`为 `null` 或者 `undefined` 时才会返回 `Hipster`;
- 使用 || 时，`name`会先转化为布尔值判断，为`true`时返回`name` , false 返回`Hipster`
:::
8. 对象尽量静态化，⼀旦定义，就不得随意添加新的属性。
```js
// bad
const a = {};
a.x = 3;
// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });
// good
const a = { x: null };
a.x = 3;
```
9. 使用 ES6 的 const 定义常量
在声明一个常量时，该常量在整个程序中都应该是不可变的。
```js
// bad
var FIRST_US_PRESIDENT = "George Washington";

// good
const FIRST_US_PRESIDENT = "George Washington";
```
## 2. 函数
1. 函数参数 (理论上小于等于 2 个)
```js
function createMenu(title, body, buttonText, cancellable) {
...
}
var menuConfig = {
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
}
function createMenu(menuConfig) {
    ...
}
```
2. 一个函数只做一件事(单一原则)
功能不单一的函数将导致难以重构、测试和理解。功能单一的函数易于重构，并使代码更加干净。
```js
// bad
function emailClients(clients) {
  clients.forEach(client => {
    let clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// good
function emailClients(clients) {
  clients.forEach(client => {
    emailClientIfNeeded(client);
  });
}

function emailClientIfNeeded(client) {
  if (isClientActive(client)) {
    email(client);
  }
}

function isClientActive(client) {
  let clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```
3. 函数名应明确表明其功能
```js
// bad
function dateAdd(date, month) {
  // ...
}
let date = new Date();
// 很难理解dateAdd(date, 1)是什么意思

// good
function dateAddMonth(date, month) {
  // ...
}
let date = new Date();
dateAddMonth(date, 1);
```
4. 默认函数可以使⽤ES6写法让函数参数更清晰
```js
//bad
function writeForumComment(subject, body) {
    subject = subject || 'No Subject';
    body = body || 'No text';
}

//good
function writeForumComment(subject = 'No subject', body = 'No text') {
    ...
}

//best
//所有配置项都应该集中在⼀个对象，放在最后⼀个参数，布尔值不可以直接作为参数。
function divide(a, b, { option = false } = {}) {
    ...
}
```
5. 不要把标记用作函数传参
```js
//bad
function createFile(name, temp) {
    if (temp) {
        fs.create('./temp/' + name);
        } else {
        fs.create(name);
        }
    }
}

//good
function createTempFile(name) {
    fs.create('./temp/' + name);
}

// best
function createFile(name) {
  fs.create(name);
}
```
6. 使用函数式编程，把函数编程纯函数
函数式的编程具有更干净且便于测试的特点。尽可能的使用这种风格吧。
```js
// bad
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

var totalOutput = 0;

for (var i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}

// good
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

var totalOutput = programmerOutput
  .map((programmer) => programmer.linesOfCode)
  .reduce((acc, linesOfCode) => acc + linesOfCode, 0);
```
7. 不要写入全局函数，避免污染造成内存泄漏
8. 告别命令式编程的逻辑 使用声明式编程
9. 封装调用避免否定条件
```js
//bad
class Airplane {
//...
    getCruisingAltitude() {
        switch (this.type) {
            case '777':return getMaxAltitude() - getPassengerCount();
            case 'Air Force One':
            return getMaxAltitude();
            case 'Cessna':
            return getMaxAltitude() - getFuelExpenditure();
        }
    }
}

//good
class Airplane {
//...
}
class Boeing777 extends Airplane {
	//...
	getCruisingAltitude() {
  	return getMaxAltitude() - getPassengerCount();
  }
}
class AirForceOne extends Airplane {
  //...
  getCruisingAltitude() {
    return getMaxAltitude();
  }
}
class Cessna extends Airplane {
  //...
  getCruisingAltitude() {
    return getMaxAltitude() - getFuelExpenditure();
  }
}

//---或者使⽤字典 否定条件避免使⽤感叹号规则---
const obj = {
  a:()=>{},
  b:()=>{}
}
const result = "a";
if(result == "a"){
	...
}else if(result == "b"){
	...
}else{
  273654
	...
}
const fn = obj[result];
if(!fn){
	fn();
}

// bug
//if([]){
// console.log([] == true)
//}
```
10. 丰富运用函数式编程的组成子 redux源码
11. 使用TypeScript或者flow.js进行类型检测
12. 不要过度的优化你的代码，看文章要看比较新的文章，阅读量多的文章
```js
for(var i=0;len = list.length;i<len;i++){}
for(const item of ){}
```
13. 多使用箭头函数
```js
[1, 2, 3].map(x => x * x);
```
14. 函数参数校验
```js
// bad
let findStudentByAge = (arr, age) => {
    if (!age) throw new Error('参数不能为空')
    return arr.filter(num => num === age)
}

// good
let checkoutType = () => {
    throw new Error('参数不能为空')
}
let findStudentByAge = (arr, age = checkoutType()) =>
    arr.filter(num => num === age)
```
15. 正确的使用map、filter、forEach等循环方法
- 如果需要返回值得话，就用map、filter
- 如果不需要有返回值的话，就用forEach
- 尽量不要随意的使用，使用每个方法就要尽可能的时候他的所有功能
  - 如果使用不了那么多功能就思考使用功能较少的方法
## 3. if判断
1. 通过条件判断给变量赋值布尔值
```js
// bad
if (a === 'a') {
    b = true
} else {
    b = false
}

// good
b = a === 'a'
```
2. 在if判断中判断数组长度不为0
```js
// bad
if (arr.length !== 0) {
    // todo
}

// good
if (arr.length) {
    // todo
}
```
3. 使用includes简化if判断
```js
// bad
if (a === 1 || a === 2 || a === 3 || a === 4) {
    // todo
}

// good
let arr = [1, 2, 3, 4]
if (arr.includes(a)) {
    // todo
}

// 巧用数组方法，尽量避免用for循环
```
4. 使用some方法判断是否有满足条件的元素
```js
// bad
let arr = [1, 3, 5, 7]
function isHasNum (n) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === n) {
            return true
        }
    }
    return false
}

// good
let arr = [1, 3, 5, 7]
let isHasNum = n => arr.some(num => num === n)

// best
let arr = [1, 3, 5, 7]
let isHasNum = (n, arr) => arr.some(num => num === n)
```
5. 尽量少的使用if-else或者是switch
```js
<script>
export default = {
	created(){
  	// 1、将方法枚举定义成一个对象或者数组
    this.methodsObj = {
    	func1: this.func1,
      func2: this.func2
    }
  },
  methods: {
  	// 2、将被调用的方法定义一下，
    //（函数尽量写纯函数，因为纯函数才能方便维护，尽量少的依赖外部变量,尽量的进行解耦）
    func1 () {
    	// ajax请求，处理对应的业务逻辑
    },
    func2 () {
    	// ajax请求，处理的该方法的业务逻辑
    },
    // 3、统一处理方法
    handleFunc(type, parms){
    	this.methodsObj[type](parms);
    },
  },
  render(){
  	return (
    	<div>
  			<button on-click={ this.handleFunc.bind('func1', '1') }>点击触发func1</button>
      	<button on-click={ this.handleFunc.bind('func2', '2') }>点击触发func2</button>
  	  </div>
    )
  },
  mounted() {}
}
</scriipt>


使用new Map()
优势：new Map()的查询速度快些
const MF = new Map([
    ['2', () => { console.log('2') }],
    ['3', () => { console.log('3') }],
    ['4', () => { console.log('4') }],
])
console.log(MF.get('3')());

const MF = new Map()
  .set('red', ['apple', 'strawberry'])
  .set('yellow', ['banana', 'pineapple'])
  .set('purple', ['grape', 'plum']);

function test(color) {
  return fruitColor.get(color) || [];
}
```
## 4. 对象和数据结构

## 5. 类
