const baseConfig = {
    items: [
        { text: 'HTML', link: '/baseKnowledge/html/video' },
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
                    { title: 'video', path: '/baseKnowledge/html/video' },
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
