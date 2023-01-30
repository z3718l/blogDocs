# React基础学习
[React官方文档](https://react.docschina.org/)
## 一、组件传值
### 1、父组件向子组件传值
传递规则：通过props
```js
// 父组件
import React from 'react'
import Child from "./child";
export default class Partent extends React.Component {
    render() {
        return (
            <div>
                <Child msg="我是父组件的数据"/>
            </div>
        )
    }
}
```
```js
// 子组件
import React from 'react'

export default class Partent extends React.Component {
    render() {
       return (
            <div> {this.props.msg} </div>
       )
    }
}
```
:::tip
📢注意：<br/>
- render中必须要return出来html元素
- render中的return只能有一个根元素
- 如果props传值之后，在子组件中进行了state的初始化操作，这个时候父组件的值变化之后，子组件不会变化
:::

### 2、子组件向父组件传值
```js
// 子组件
import React from 'react'

export default class Partent extends React.Component {
    handleClick = () => {
        console.log(this.props);
        this.props.getChildData('我是子组件的数据');
    }
    render() {
       return (
            <div>
                {this.props.msg}
                <button onClick={this.handleClick.bind(this)}>点击给父组件传值</button>
            </div>
       )
    }
}
```
```js
// 父组件
import React from 'react'
import Child from "./child";
export default class Partent extends React.Component {
    state = {
        mess: '111'
    }
    getChildData = (msg) => {
        console.log(msg);
        this.setState({
            mess: msg
        });
    }
    render() {
        return (
            <div>
                <Child msg="我是父组件的数据" getChildData={this.getChildData.bind(this)}/>
                { this.state.mess }
            </div>
        )
    }
}
```
:::tip
📢注意：<br/>
- 子组件通过this.props调用父组件的方法，一定要记着把父组件的这个方法传递给子组件
:::
### 3. 如何对props进行限制
## 二、组件
### 1、class组件
### 2、function组件
### 3、组件复合
### 4、简单组件和复杂组件的定义
### 5、受控组件和非受控组件

## 三、`state/setState`
## 四、生命周期
