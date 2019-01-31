const Koa = require('koa');
const webpack = require('webpack');
const gulp = require('gulp');
const fs = require('fs');

const {
  devMiddleware,
} = require('koa-webpack-middleware');
const devConfig = require('./webpack.dev.config');

const hotMiddleware = require('./hotMiddleware');

const port = 9003;
const app = new Koa();

const compiler = webpack(devConfig);
const hmw = hotMiddleware(compiler);
const middleware = devMiddleware(compiler, {
  publicPath: devConfig.output.publicPath,
  noInfo: true,
  inline: true,
  clientLogLevel: 'info',
  stats: {
    colors: true,
  },
});
let reloadFlag = false;

app.use(hmw);
app.use(middleware);
// app.use(renderDev(middleware));
// app.use(async (ctx, next) => {

// });


// compiler.plugin('compilation', (compilation) => {
//   compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
//     // console.log('html-webpack-plugin-after-emit')
//     reloadFlag && hmw.hotMiddleware.publish({
//       action: 'reload',
//     });
//     reloadFlag = false;
//     cb && cb();
//   });
// });

// gulp.watch([
//   './lib/*.html',
// ], (e) => {
//   console.log(`${e.path} has ${e.type}, reload current page~`);
//   reloadFlag = true;
// });

app.listen(port);
console.log(`DUIBA-H5-INTEGRAL listening on port ${port}`);
