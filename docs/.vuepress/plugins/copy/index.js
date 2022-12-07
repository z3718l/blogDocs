const path = require('path');

module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-code-copy',
        define: {
            copybuttonText: options.copybuttonText || '复制代码',
            copiedButtonText: options.copiedButtonText || "已复制"
        },
        clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
    }
}
