const baseConfig = {
    items: [
        { text: 'HTML', link: '/baseKnowledge/html/1-attribute' },
        { text: 'CSS', link: '/baseKnowledge/css/1-layout' },
        { text: 'JavaScript', link: '/baseKnowledge/javaScript/1-base' },
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
                    { title: 'CSS动画', path: '/baseKnowledge/css/2-animation' },
                ]
            }
        ],
        '/baseKnowledge/javaScript/': [
            {
                title: 'javaScript',
                collapsable: false,
                children: [
                    { title: '基础', path: '/baseKnowledge/javaScript/1-base' },
                    { title: 'ES6', path: '/baseKnowledge/javaScript/1-base' },
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
