module.exports = {
  /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     */
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  chainWebpack: () => {},
  productionSourceMap: false,
  // css相关配置
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/common.scss";'
      }
    }
  },
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    port: 8888,
    https: false,
    hotOnly: false,
    // 设置代理
    proxy: {
      // proxy table example
      '/api': {
        target: 'https://xxx.xxx.com.cn',
        changeOrigin: true,
        pathRewrite: {
          // 如果接口本身没有/api需要通过pathRewrite来重写了地址
          //   '^api': ''
        }
      }
    }
    // before: app => { }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
