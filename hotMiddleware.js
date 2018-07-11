/* eslint-disable */
/**
 * 改造中间件，使之暴露出hotMiddleware
 */
const hotMiddleware = require('webpack-hot-middleware');
const {
  PassThrough
} = require('stream');

module.exports =  (compiler, opts) => {
  const expressMiddleware = hotMiddleware(compiler, opts)
  const middle = async (ctx, next) => {
    let stream = new PassThrough()
    ctx.body = stream
    await expressMiddleware(ctx.req, {
      write: stream.write.bind(stream),
      writeHead: (status, headers) => {
        ctx.status = status
        ctx.set(headers)
      }
    }, next)
  }

  middle.hotMiddleware = expressMiddleware;

  return middle;
}
