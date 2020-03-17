const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/sale/' : './',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/gateway': {
        target: process.env.VUE_APP_DEBUG_HOST,
        changeOrigin: true,
        ws: true,
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // eslint-disable-next-line global-require
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 3,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
          }),
        ],
      },
    },
  },
  // configureWebpack: {
  //
  // },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line no-param-reassign
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src/'),
      '@common': path.resolve(__dirname, './src/common'),
      '@components': path.resolve(__dirname, './src/components'),
      '@router': path.resolve(__dirname, './src/router'),
      '@store': path.resolve(__dirname, './src/store'),
      '@api': path.resolve(__dirname, './src/api'),
    };
  },

  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, './src'))
  //     .set('@common', path.resolve(__dirname, './src/common'))
  //     .set('@components', path.resolve(__dirname, './src/components'))
  //     .set('@router', path.resolve(__dirname, './src/router'))
  //     .set('@store', path.resolve(__dirname, './src/store'))
  //     .set('@api', path.resolve(__dirname, './src/api'));
  // },
};
