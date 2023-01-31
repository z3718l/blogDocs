# JavaScript判断对象是否为空
## 一、通过JSON自带的stringify()方法来判断
```js
function isEmptyObj(obj) {
    return JSON.stringify(obj) === '{}'
}
console.log('对象是否为空：', isEmptyObj({})) // true
```
## 二、for in循环判断
```js
function isEmptyObj(obj) {
    for(let item in obj) {
        return true
    }
    return false
}
console.log('对象是否为空：', isEmptyObj({})) // true
```
## 三、使用ES6的Object.keys()方法
```js
function isEmptyObj(obj) {
    return Object.keys(obj).length === 0
}
console.log('对象是否为空：', isEmptyObj({})) // true
```
## 四、Object.getOwnPropertyNames()方法
```js
function isEmptyObj(obj) {
    return Object.getOwnPropertyNames(obj).length === 0
}
console.log('对象是否为空：', isEmptyObj({})) // true
```
## 五、将json对象转化为json字符串，再判断该字符串是否为"{}"
```js
var data = {};
var b = (JSON.stringify(data) == "{}");
alert(b);   //true 为空， false 不为空
```
## 六、hasOwnProperty
```js
// Object.hasOwnProperty.call({},'name')
function isEmptyObj(obj, oKey) {
    // return obj.hasOwnProperty(oKey)
    return Object.hasOwnProperty.call(obj,oKey)
}
console.log('对象是否为空：', isEmptyObj({}, 'name')) // true
// 如果不确定是哪个key值，可以在循环中进行判断
```