# Object和new Map()的比较

## 前言
我们在编写复杂的判断条件时候，传统的做法是写一大推的`if ... else ...`，这样既不美观，也不好维护；后来我们改进了一下，使用`stitch`，但是整个函数体也很大；后来我们使用Object进行抽象，这样key会有局限性；终极办法，`new Map`就出来了。

## 一、简单尝试
```js
const MF = new Map([
    ['2', () => { console.log('2') }],
    ['3', () => { console.log('3') }],
    ['4', () => { console.log('4') }],
])
console.log(MF.get('3')()); // 2

const MF = new Map()
  .set('red', ['apple', 'strawberry'])
  .set('yellow', ['banana', 'pineapple'])
  .set('purple', ['grape', 'plum']);

function test(color) {
  return fruitColor.get(color) || [];
}
```

## 二、Object和Map的对比
|  | Object | Map |
| :----: | :----: | :----: |
| 意外的键 | 一个 `Object` 有一个原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。 | `Map` 默认情况不包含任何键。只包含显式插入的键。 |
| 键的类型 | 一个 Object 的键必须是一个 String 或是 Symbol。 | 一个 Map 的键可以是任意值，包括函数、对象或任意基本类型。 |
| 键的顺序 | 虽然 Object 的键目前是有序的，但并不总是这样，而且这个顺序是复杂的。因此，最好不要依赖属性的顺序。 | Map 中的键是有序的。因此，当迭代的时候，一个 Map 对象以插入的顺序返回键值。 |
| Size | Object 的键值对个数只能手动计算。 | Map 的键值对个数可以轻易地通过 size 属性获取。 |
| 性能 | 在频繁添加和删除键值对的场景下未作出优化。 | 在频繁增删键值对的场景下表现更好。 |
| 序列化和解析 | 原生的由 Object 到 JSON 的序列化支持，使用 JSON.stringify()。原生的由 JSON 到 Object 的解析支持，使用 JSON.parse()。 | 没有元素的序列化和解析的支持。 |
参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
## 三、对比解析
### 1. 意外的键
对于Object来说，原型上有很多的键名，比如：toString、valueOf、hasOwnProperty等等，虽然可以使用`Object.create(null)`来创建没有原型的对象，但是一般不推荐这么做。
```js
const obj = {
    toString: '我是obj自定义的toString'
}
const obj1 = {
    str: '我是obj1的自定义属性'
}
console.log(obj.toString) // '我是obj自定义的toString'
console.log(obj1.toString) // ƒ toString() { [native code] }
// 如果不清楚原型上的键名就会将其覆盖，导致bug
```
```js
const MF = new Map([
    [toString, '我是obj自定义的toString'],
])
const MF1 = new Map([
    ['str', '我是obj1的自定义属性'],
])
console.log(MF.get(toString)); // 我是obj自定义的toString
console.log(MF1.get(toString)); // undefined
// `Map` 默认情况不包含任何键。只包含显式插入的键。
```
### 2. 键的类型
**`Object`的键的类型只能是简单的数据结构，像字符串，数值等**
```js
const obj2 = {
    1: '1',
    'str': 'string',
    true: 'boolean',
}
console.log(obj2[true]);
```
**Map的键值可以是任意类型，包括任意的基本类型、对象、正则、函数**
```js
// 基本类型
const MF = new Map([
    ['2', '我是字符串'],
    [2, '我是Number'],
    [true, '我是boolean'],
    [NaN, '我是NaN'],
    [undefined, '我是Undefined'],
    [null, '我是null'],
])
console.log(MF.get(undefined));
// 可以解决大部分的数据和方法抽象
```
```js
// 对象形式
const MF5 = new Map([
    [{id: 1, type: 'dev'}, () => console.log('我是dev1')],
    [{id: 2, type: 'dev'}, () => console.log('我是dev2')],
    [{id: 1, type: 'master'}, () => console.log('我是master1')],
    [{id: 2, type: 'master'}, () => console.log('我是master2')],
])
const statusChange1 = (id,type)=>{
    let action = [...MF5].filter(([key,value])=>(key.id == id && key.type == type))
    action.forEach(([key,value])=>value.call(this))
}
statusChange1(1, 'dev') // 我是dev1
```
```js
// 正则形式
const MF = new Map([
    [/^guest_[1-4]$/, '1-4'],
    [/^guest_5$/, '5'],
])
const statusChange = (identity,status)=>{
    let action = [...MF].filter(([key,value])=> (key.test(`${identity}_${status}`)))
    const v = action.map((([key,value]) => {
        return value;
    }))
    return v[0];
}
console.log(statusChange('guest', 2)); // '1-4'
```
```js
// 函数形式
const fun = () => null;
const MF = new Map([
    [fun, '我是函数'],
])
console.log(MF.get(fun)); // '我是函数'
```
## 四、常用方法
```js
const contacts = new Map()
// 设置属性
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
// 判断是否有某个属性
contacts.has('Jessie') // true
// 返回与指定的键 key 关联的值，若不存在关联的值，则返回 undefined。
contacts.get('Hilary') // undefined
// 移除 Map 对象中指定的键值对，如果键值对存在并成功被移除，返回 true，否则返回 false。
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
// 返回 Map 对象中的键值对数量。
console.log(contacts.size) // 0 打印size
// 移除 Map 对象中所有的键值对。
contacts.clear()
```
**遍历Map**
```js
// keys()
const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.keys();

console.log(iterator1.next().value);
// Expected output: "0"
console.log(iterator1.next().value);
// Expected output: 1
```
```js
// values() 返回一个新的迭代器对象。它包含按顺序插入 Map 对象中每个元素的 value 值。
const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.values();

console.log(iterator1.next().value);
// Expected output: "foo"

console.log(iterator1.next().value);
// Expected output: "bar"
```
```js
// forEach() 按照插入顺序依次对 Map 中每个键/值对执行一次给定的函数。
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
  .forEach(logMapElements);

// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"
```
```js
// entries()
const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.entries();

console.log(iterator1.next().value);
// Expected output: Array ["0", "foo"]
console.log(iterator1.next().value);
// Expected output: Array [1, "bar"]
```
## 五、什么时候用Map
1. 想要添加的键值名和Object上默认键值名冲突，又不好想改名，用Map
2. 需要String和Symbol以外的数据类型做键值，用Map
3. 键值很多，有时需要计算数量，用Map
4. 需要频繁的增删键值对，用Map
## 六、推荐理由
1. Map的查询速度较快
2. 支持的写法更多 <br />


但是：如果只是简单的数据，可以使用Object
