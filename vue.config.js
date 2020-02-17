const proxy = {};
const prefix = [
  '/user',
  '/album'
].forEach(key => proxy[key] = {
  target: 'http://localhost:3000',
});
module.exports = {
  publicPath: './',
  devServer: {
    port: 8001,
    host: '0.0.0.0',
    proxy,
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
};
