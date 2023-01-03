# 浅拷贝与深拷贝

## 一、前言
在 `JavaScript` 中，拷贝就是创建一个新的对象，并将原来的对象的值复制进去。这样就有了两个对象，但是这两个对象在内存中是不同的。

## 二、区别
:::tip
<font color="red">浅拷贝</font>
将原来的对象的值复制到新的对象中，但是如果值是一个对象，那么实际上是复制了这个对象的内存地址，而不是对象本身。这意味着，如果你修改了新的对象中的这个值，实际上也会修改原来的对象。\
__总之一句话：浅拷贝就是将原对象或原数组的引用直接赋给新对象，新数组，新对象／数组只是原对象的一个引用。__
:::

:::tip
<font color="red">深拷贝</font>
是完全复制原来的对象，包括它的所有值，包括对象中的对象。这意味着，如果你修改了新的对象中的值，不会对原来的对象产生任何影响。\
__总之一句话：创建一个新的对象和数组，将原对象的各项属性的“值”（数组的所有元素）拷贝过来，是“值”而不是“引用”。__
:::

## 三、浅拷贝
### 3.1 `Object.assign`
```js
var obj = {
    age: 18,
    names: {
        name1: '张三',
        name2: '李四'
    },
    love: function () {
        console.log('我喜欢你')
    }
}
var newObj = Object.assign({}, obj);
newObj.names = {
    name1: '张三1',
    name2: '李四1'
}
console.log(obj)
```

### 3.2 `Array.prototype.slice()`
> 复制数组是`slice()`的基本能力，没有参数的数组复制原始数组。有时，可能想要更新数组中的某些元素。但是，可能需要保护原始数组中的元素，可以使用 slice()创建原始数组的浅复制。
```js
const data1 = [1, 2, 3]
// const data2 = data1.slice(0)
const data2 = data1.slice()
data2[1] = 4;
console.log(data1) // [1, 2, 3]
console.log(data2) // [1, 4, 3]
```

### 3.3 `Array.prototype.concat()`
> `concat()`方法本来是连接两个数组的，如果连接的数组是空，那就是复制数组了。
```js
const data1 = [1, 2, 3]
const data2 = data1.concat()
data2[1] = 5;
console.log(data1) // [1, 2, 3]
console.log(data2) // [1, 5, 3]
```

### 3.4 使用拓展运算符实现的复制
```js
const data1 = [1, 2, 3]
const data2 = [...data1]
data2[1] = 6;
console.log(data1) // [1, 2, 3]
console.log(data2) // [1, 6, 3]
```

## 四、深拷贝

### 4.1 `lodash`的`_.cloneDeep()`
```js
const _ = require('lodash');
const obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
const obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f); // false
```

### 4.2 `jQuery.extend()`

### 4.3 `JSON.stringify()`

### 4.5 手写递归

### 4.6 手写循环