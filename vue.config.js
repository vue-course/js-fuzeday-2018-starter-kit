const path = require('path');

// // vue.config.js
// module.exports = {
//     css: {
//         loaderOptions: {
//             // pass options to sass-loader
//             sass: {
//                 // @/ is an alias to src/
//                 data: `@import "@/styles/base/_mixins.scss"; @import "@/styles/base/_variables.scss";`
//             }
//         }
//     }
// }


module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/styles/base/_mixins.scss'),
                path.resolve(__dirname, 'src/styles/base/_variables.scss'),
            ]
        }
    }
}