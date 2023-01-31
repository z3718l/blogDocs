const baseConfig = {
    items: [
        { text: 'HTML', link: '/baseKnowledge/html/1-attribute' },
        { text: 'CSS', link: '/baseKnowledge/css/1-layout' },
        { text: 'JavaScript', link: '/baseKnowledge/javaScript/1-foreword' },
        { text: 'JavaScript进阶', link: '/baseKnowledge/javaScriptUtil/1-simplifyUtil' },
        { text: 'TypeScript', link: '/baseKnowledge/typeScript/1-base' },
    ],
    sidebarConfig: {
        '/baseKnowledge/html/': [
            {
                title: 'HTML',
                collapsable: false,
                children: [
                    { title: '新标签和属性', path: '/baseKnowledge/html/1-attribute' },
                    { title: 'canvas', path: '/baseKnowledge/html/2-canvas' },
                    { title: 'SVG', path: '/baseKnowledge/html/3-svg' },
                    { title: '拖拽', path: '/baseKnowledge/html/4-drag' },
                    { title: '音视频', path: '/baseKnowledge/html/5-audioVideo' },
                    { title: 'web存储', path: '/baseKnowledge/html/6-webStorage' },
                    { title: 'webSocket', path: '/baseKnowledge/html/7-webSocket' },
                    { title: 'webWorker', path: '/baseKnowledge/html/8-webWorker' },
                    { title: 'iframe', path: '/baseKnowledge/html/9-iframe' },
                    { title: '面试题', path: '/baseKnowledge/html/10-interview' },
                ]
            }
        ],
        '/baseKnowledge/css/': [
            {
                title: 'CSS',
                collapsable: false,
                children: [
                    { title: '基础布局', path: '/baseKnowledge/css/1-layout' },
                    { title: '盒模型', path: '/baseKnowledge/css/2-box' },
                    { title: 'CSS动画', path: '/baseKnowledge/css/3-animation' },
                    { title: 'CSS选择器', path: '/baseKnowledge/css/4-selector' },
                    { title: 'BFC', path: '/baseKnowledge/css/5-bfc' },
                ]
            }
        ],
        '/baseKnowledge/javaScript/': [
            {
                title: 'javaScript',
                collapsable: false,
                children: [
                    { title: '前言', path: '/baseKnowledge/javaScript/1-foreword' },
                    { title: '语句语法', path: '/baseKnowledge/javaScript/2-syntax' },
                    { title: '类型', path: '/baseKnowledge/javaScript/3-type' },
                    { title: '类型转换', path: '/baseKnowledge/javaScript/3-type1' },
                    { title: '原始值与引用值', path: '/baseKnowledge/javaScript/3-type2' },
                    { title: '浅拷贝与深拷贝', path: '/baseKnowledge/javaScript/3-type3' },
                    { title: '作用域与作用域链', path: '/baseKnowledge/javaScript/4-scope' },
                    { title: '变量', path: '/baseKnowledge/javaScript/5-variate' },
                    { title: '执行上下文', path: '/baseKnowledge/javaScript/6-context' },
                    { title: 'this', path: '/baseKnowledge/javaScript/7-this' },
                    { title: '闭包', path: '/baseKnowledge/javaScript/8-closure' },
                    { title: '内存与垃圾回收', path: '/baseKnowledge/javaScript/9-garbage' },
                    { title: '原型和原型链', path: '/baseKnowledge/javaScript/10-prototype' },
                    { title: 'Null', path: '/baseKnowledge/javaScript/11-null' },
                    { title: 'Number', path: '/baseKnowledge/javaScript/12-number' },
                    { title: 'String', path: '/baseKnowledge/javaScript/14-string' },
                    { title: 'Boolean', path: '/baseKnowledge/javaScript/15-boolean' },
                    { title: 'Array', path: '/baseKnowledge/javaScript/16-array' },
                    { title: 'Date', path: '/baseKnowledge/javaScript/17-date' },
                    { title: 'Map', path: '/baseKnowledge/javaScript/18-map' },
                    { title: 'JSON', path: '/baseKnowledge/javaScript/19-json' },
                    { title: 'RegExp', path: '/baseKnowledge/javaScript/20-regExp' },
                    { title: 'Function', path: '/baseKnowledge/javaScript/21-function' },
                    { title: '类(class)', path: '/baseKnowledge/javaScript/22-class' },
                    {
                        title: '面向对象编程(OOP)',
                        collapsable: false,
                        path: '/baseKnowledge/javaScript/23-oop',
                        children: [
                            { title: '基础', path: '/baseKnowledge/javaScript/23-oop' },
                            { title: '继承', path: '/baseKnowledge/javaScript/23-oop' },
                            { title: '封装', path: '/baseKnowledge/javaScript/23-oop' },
                            { title: '多态', path: '/baseKnowledge/javaScript/23-oop' },
                        ]
                    },
                    { title: '面向切面编程(AOP)', path: '/baseKnowledge/javaScript/24-aop' },
                    { title: '元编程', path: '/baseKnowledge/javaScript/25-yuan' },
                    { title: '函数式编程', path: '/baseKnowledge/javaScript/26-funcProgram' },
                    { title: 'BOM', path: '/baseKnowledge/javaScript/28-bom' },
                    { title: 'DOM', path: '/baseKnowledge/javaScript/29-dom' },
                    { title: '事件机制', path: '/baseKnowledge/javaScript/30-event' },
                    { title: '事件循环', path: '/baseKnowledge/javaScript/31-eventLoop' },
                ]
            }
        ],
        '/baseKnowledge/javaScriptUtil/': [
            {
                title: 'javaScript进阶',
                collapsable: false,
                children: [
                    { title: 'JS简写技巧', path: '/baseKnowledge/javaScriptUtil/1-simplifyUtil' },
                    { title: '代码重构', path: '/baseKnowledge/javaScriptUtil/2-codeRecons' },
                    { title: 'JS运行原理', path: '/baseKnowledge/javaScriptUtil/3-jsRunTime' },
                    { title: 'JS异步实现方案', path: '/baseKnowledge/javaScriptUtil/4-jsAsync' },
                    { title: 'V8如何执行一段JS代码', path: '/baseKnowledge/javaScriptUtil/5-v8ToJs' },
                    { title: 'JavaScript高级函数', path: '/baseKnowledge/javaScriptUtil/8-jsHeight' },
                    { title: 'JS常用判断类型的方法', path: '/baseKnowledge/javaScriptUtil/9-judgmentType' },
                    { title: 'JS判断对象是否为空', path: '/baseKnowledge/javaScriptUtil/10-objectIsNull' },
                    { title: 'JS实战[随机取个数字]', path: '/baseKnowledge/javaScriptUtil/6-actual-mathNum' },
                    { title: 'JS实战[取整]', path: '/baseKnowledge/javaScriptUtil/7-actual-quzheng' },
                ]
            }
        ],
        '/baseKnowledge/typeScript/': [
            {
                title: 'typeScript',
                collapsable: false,
                children: [
                    { title: '基础', path: '/baseKnowledge/typeScript/1-base' },
                ]
            }
        ],
    }
}

module.exports = {
    baseConfig
}
