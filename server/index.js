/*
 * 自定义 Next 应用服务器
 * [Custom Server](https://nextjs.org/docs/advanced-features/custom-server)
 * [Express integration](https://github.com/vercel/next.js/tree/canary/examples/custom-server-express)
 *
 * @Author: Duyb
 * @Date: 2022-04-24 23:14:45
 * @Last Modified by: Duyb
 * @Last Modified time: 2022-04-24 23:28:19
 */
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
