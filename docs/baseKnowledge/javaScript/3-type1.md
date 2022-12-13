# 类型转换

## 一、在if条件判断中，会将类型转换为Boolean
一般只有<b>`true/false`</b>
:::tip
<b>为false的值：</b>
1. false
2. undefined
3. null
4. ''
5. 0
6. NaN
:::

:::tip
<b>为true的值：</b>
1. true
2. 1
:::

> ! ==> 可以把这个值转化成boolean类型
```js
console.log(!0) // true
console.log(!'') // true
console.log(!1) // false
console.log(!null) // false
...
```

## 二、在运算的时候
### 2.1 加
<b>加特殊一些，会有字符串拼接的含义。</b>
1. 数字和数字相加
```js
console.log(1+1) // 2
```
2. 数字和非字符串相加\
如果有一方是字符串，就会认为是字符串拼接
```js
console.log(1+true); // 2
// 因为true可以转化成数字 是1

console.log(1+null); // 1
// 因为null=>''=>0

console.log(1+undefined); // NaN
// undefined不能转化成数字类型，所以相加是NaN

console.log(1+{}) // '1[object Object]'
```

3. 非数字相加
```js
console.log(true+true); // 2
```
> 对象中有两个方法，`valueOf`、`toString`\
> 会先调`Symbol.toPrimitive`，如果返回对象，然后`valueOf`方法，如果`valueOf`方法是对象，则调用`toString`方法
```js
let obj = {
  valueOf(){
    return 100
  },
  toString(){
    return 200
  }
}
console.log(true+obj); // 101

===================================

let obj = {
  valueOf(){
    return {}
  },
  toString(){
    return 200
  }
}
console.log(true+obj); // 201

===================================

let obj = {
  valueOf(){
    return {}
  },
  toString(){
    return {}
  }
}
console.log(true+obj); // 报错

================================

let obj = {
  [Symbol.toPrimitive]() {
    return 500
  },
  valueOf(){
    return {}
  },
  toString(){
    return 200
  }
}
console.log(true+obj); // 501
```

```js
console.log(1 + +'123');
// 先运算左边，将'123'转化成数字123 然后再相加 结果就是：124
```

### 2.2 减、乘、除
<b>会转化成数字</b>
```js
console.log(1/true) // 1
// 因为true可以转化成数字1
```
```js
console.log(1/'a') // NaN
// 因为'a'不能转化成数字，1除以一个不是数字的东西，得出的就是NaN
```

## 三、比较运算（> = <）
### 3.1 字符串之间的比较
```js
console.log('a' > 'b'); // false

// 字符串之间的比较会转换成ASCII码进行比较
// 如果是较多个字符串，默认对比第一个字符串的ASCII码
```

### 3.1 数字和字符串之间比较
```js
console.log(1 < '12'); // true

// 如果字符串可以转换成数字，就转换成数字在进行比较
```
```js
console.log(1 < 'aa'); // false
console.log(1 > 'aa'); // false

// 如果不能转换成数字，就返回false
```

### 3.3 ==
```js
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(undefined == 0); // false

// null、undefined 和其他类型相比较，都不相等
```
```js
console.log({} == {}) // false

// 因为比较的是引用空间

console.log(NaN == NaN); // false
console.log(NaN == 0); // false
// NaN和任何类型相比较都不相等
```

```js
console.log(1 == '1') // true
// 数字和字符串相比，会把字符串转换成数字

console.log(1 == true); // true
// 数字和布尔相比，会把布尔转换成数字类型
```

```js
// 对象和字符串 数字 symbol比较的时候，会把对象转换成原始数据类型
// 通过valueOf、toString
```

### 3.4 ===
全等运算符

:::tip
<b>总结</b>
1. if判断中会被转换成Boolean类型，注意0是false
2. 【加】操作符有两个意思：数值相加、字符串拼接
3.  【减】【乘】【除】都是会将变量转换成数值类型
4. == 不会强制进行类型判断
5. === 会强制进行类型判断
:::
```js
console.log(1 == '1') // true
console.log(1 === '1') // false
```
