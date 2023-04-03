module.exports = {
    plugins: [
      // 将这个插件排除在外
      // 如果你使用了 `vant` 的按需引入，则将 `vant` 的样式文件路径加入到这里
      require('postcss-import'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production' && require('postcss-pxtorem')({
        rootValue: 37.5,
        propList: ['*'],
        selectorBlackList: ['.ignore', '.hairlines']
      })
    ]
  }
  