const CracoLessPlugin = require('craco-less')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,//引入less
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true //js修改主题样式
          }
        }
      }
    }
  ],
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }], //装饰器
      [
        'import',//按需引入antd 样式
        {
          'libraryName': 'antd',
          'libraryDirectory': 'es',
          'style': true
        }
      ]
    ]
  },
};