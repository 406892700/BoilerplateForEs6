/* eslint-disable */
const http = require('http');
const gulp = require('gulp');
const fs = require('fs');

let reloadFlag = false;

gulp.watch([
  './lib/**/*.html',
], (e) => {
  console.log(`${e.path} has ${e.type}, reload current page~`);
  reloadFlag = true;
});

const server = http.createServer((req, res) => {
  if (/^\/index$/.test(req.url)) {
    const html = fs.readFileSync('./lib/index.html');
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(html.toString());
  }

  if (/heartbeats/.test(req.url)) {
    res.writeHead(200, {
      "Content-Type" : "text/event-stream",
      "Cache-Control" : "no-cache",
      "Connection": "keep-alive",
    });

    if (reloadFlag) {
      res.write("data: reload\n\n");
      reloadFlag = false;
    } else {
      res.write("data: start listening...");  // 发送心跳包
    }
    
    interval = setInterval(function () {
      if (reloadFlag) {
        res.write("data: reload\n\n");
        setTimeout(() => {
          reloadFlag = false;
        }, 1000);
      } else {
        res.write("data: \uD83D\uDC93\n\n");  // 发送心跳包
      }
    }, 1000);
    //监听close事件, 用于停止定时器
    req.connection.addListener("close", function () {
      clearInterval(interval);
    }, false);
  }
});


server.listen(3002);
