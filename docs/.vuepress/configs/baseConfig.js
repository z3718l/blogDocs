const baseConfig = {
    items: [
        { text: 'HTML', link: '/baseKnowledge/html/1-attribute' },
        { text: 'CSS', link: '/baseKnowledge/css/1-layout' },
        { text: 'JavaScript', link: '/baseKnowledge/javaScript/1-foreword' },
        { text: 'TypeScript', link: '/baseKnowledge/typeScript/1-foreword' },
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
                    { title: '内存与垃圾回收', path: '/baseKnowledge/javaScript/7-garbage' },
                    { title: '闭包', path: '/baseKnowledge/javaScript/8-closure' },
                    { title: 'this', path: '/baseKnowledge/javaScript/9-this' },
                    { title: '原型和原型链', path: '/baseKnowledge/javaScript/10-prototype' },
                    {
                        title: 'ES6',
                        collapsable: false,
                        // path: '/baseKnowledge/javaScript/1-foreword',
                        children: [
                            { title: '基础', path: '/baseKnowledge/javaScript/1-foreword' },
                        ]
                    },
                ]
            }
        ],
        '/baseKnowledge/typeScript/': [
            {
                title: 'typeScript',
                collapsable: false,
                children: [
                    // { title: '基础', path: '/baseKnowledge/typeScript/1-foreword' },
                ]
            }
        ],
    }
}

module.exports = {
    baseConfig
}
