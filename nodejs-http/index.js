'use strict';
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer();
// server.on('request', doRequest);
// const port = 8000;

// function doRequest(req, res) {
//   fs.readFile('./index.html', 'UTF-8', (err, data) => {
//     // readFile第3引数のコールバックに第一引数で読み込んだファイルが入る。
//     console.log(data);
//     // リクエストが来たときに２００番を返す
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     // レスポンスの内容を書き出す
//     res.write(data);
//     // レスポンスの書き出しを終了する
//     res.end();
//   })
// }

// // Listen：HTTPサーバーを起動する
// server.listen(port, () => {
//   console.log(`Listening on ${port}`);
// });


const http = require('http');
const server = http.createServer((req, res) => {
  console.info(
    `[${new Date()}] Requested by ${req.socket.remoteAddress}`
  );
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.write(req.headers['user-agent']);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});