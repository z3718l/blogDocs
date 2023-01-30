const hotFrameConfig = {
    items: [
        { text: 'React', link: '/hotFrame/react/1-base' },
        { text: 'React源码学习', link: '/hotFrame/reactSoundCode/1-base' },
        { text: 'Vue2', link: '/hotFrame/vue2/1-base' },
        { text: 'Vue2源码学习', link: '/hotFrame/vue2SoundCode/1-base' },
        { text: 'Vue3', link: '/hotFrame/vue3/1-base' },
        { text: 'Vue3源码学习', link: '/hotFrame/vue3SoundCode/1-base' },
        { text: 'OMI', link: '/hotFrame/omi/1-base' },
    ],
    sidebarConfig: {
        '/hotFrame/react/': [
            {
                title: 'React',
                collapsable: false,
                children: [
                    { title: '基础知识', path: '/hotFrame/react/1-base' },
                ]
            }
        ],
    }
}

module.exports = {
    hotFrameConfig
}
