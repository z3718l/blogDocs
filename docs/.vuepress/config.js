const { baseConfig } = require('./configs/baseConfig');

module.exports = {
  title: '大前端知识体系',
  description: '学习总结、开发遇到的问题',
  base: '/blogDocs/',
  head: [
    ["link", { rel: "icon", href: "/images/favicon.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
    ["meta", { name: "theme-color", content: "#00adb5" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#00adb5" }],
    [
      "meta",
      {
        name: "description",
        itemprop: "description",
        content: "大前端知识体系",
      },
    ],
    ["meta", { itemprop: "name", content: "大前端知识体系" }],
    ["meta", { itemprop: "image", content: "/blogDocs/images/favicon.png" }],
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: [
    require('./plugins/copy/index.js'),
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/register-components',
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '基础知识',
        ariaLabel: '基础知识',
        items: baseConfig.items
      },
      {
        text: '热门框架',
        ariaLabel: '热门框架',
        items: [
          { text: 'React', link: '/' },
          { text: 'Vue', link: '/' },
          { text: 'Omi', link: '/' },
        ]
      },
      {
        text: '基建与工程开发',
        ariaLabel: '基建以及工程化',
        items: [
          { text: '预编译工具', link: '/' },
          { text: '构建工具', link: '/' },
          { text: '包管理', link: '/' },
          { text: '模块化', link: '/' },
          { text: '接口管理', link: '/' },
          { text: '代码管理', link: '/' },
          { text: '文档规范', link: '/' },
          { text: '构建部署', link: '/' },
          { text: '性能优化与监控', link: '/' },
          { text: '数据分析', link: '/' },
          { text: '高级调试', link: '/' },
          { text: '抓包工具', link: '/' },
          { text: '自动化测试', link: '/' },
          { text: '低代码', link: '/' },
          { text: '编辑器与IDE', link: '/' },
          { text: '自建库', link: '/' },
          { text: '研发流程', link: '/' },
        ]
      },
      {
        text: '跨平台',
        ariaLabel: '',
        items: [
          { text: '小程序', link: '/' },
          { text: 'reactNative', link: '/' },
          { text: 'flutter', link: '/' },
          { text: 'cordova', link: '/' },
          { text: '混合开发', link: '/' },
        ]
      },
      {
        text: '必备扩展知识',
        ariaLabel: '',
        items: [
          { text: '浏览器', link: '/' },
          { text: '网络通信', link: '/' },
          { text: 'web安全', link: '/' },
          { text: '操作系统', link: '/' },
          { text: '数据结构与算法', link: '/' },
          { text: '编译原理', link: '/' },
          { text: '设计模式', link: '/' },
          { text: 'NodeJS', link: '/' },
          { text: '微前端', link: '/' },
          { text: 'web3.0', link: '/' },
          { text: '图形学', link: '/' },
          { text: '编程思想', link: '/' },
          { text: '地图', link: '/' },
        ]
      },
      {
        text: '前端跨界',
        ariaLabel: '',
        items: [
          { text: 'java', link: '/' },
          { text: 'python', link: '/' },
          { text: '数据库', link: '/' },
          { text: 'linux', link: '/' },
        ]
      },
      {
        text: '其他',
        ariaLabel: '',
        items: [
          { text: '手写系列', link: '/' },
          { text: '前端面试', link: '/' },
          { text: '工具网站导航', link: '/' },
          { text: 'mac使用技巧', link: '/' },
          { text: '软技能', link: '/' },
        ]
      },
      {
        text: '语雀文档',
        ariaLabel: '个人语雀文档',
        items: [
          { text: '个人中心', link: 'https://www.yuque.com/rain.shine' },
          { text: '前端知识库', link: 'https://www.yuque.com/rain.shine/vcpywp/gso8yc' },
          { text: '技术交流小分队', link: 'https://www.yuque.com/hmohvc' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/z3718l/blogDocs' },
    ],
    sidebar: {
      ...baseConfig.sidebarConfig
    },
    lastUpdated: "上次更新时间",
    contributors: true,
  }
}