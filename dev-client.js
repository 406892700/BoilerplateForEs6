const hotClient = require('webpack-hot-middleware/client?noInfo=true&timeout=10000&reload=true');
// 订阅事件，当 event.action === 'reload' 时执行页面刷新
hotClient.subscribe((event) => {
  if (event.action === 'reload') {
    window.location.reload();
  }

  if (event.action === 'processing') {
    console.log('开始准备刷新...');
  }
});
