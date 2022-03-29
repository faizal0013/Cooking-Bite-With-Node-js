const http = require('http');
const { parse } = require('url');
const { loadRequest, contentType } = require('./modules/loadRequest');

http
  .createServer((req, res) => {
    const { pathname } = parse(req.url, true);

    console.log('server is request...');

    if (pathname === '/') loadRequest(res, '/index.html', 'utf-8', contentType.html);
    else if (pathname.includes('html')) loadRequest(res, pathname, 'utf-8', contentType.html);
    else if (pathname.includes('css')) loadRequest(res, pathname, 'utf-8', contentType.css);
    else if (pathname.includes('js')) loadRequest(res, pathname, 'utf-8', contentType.js);
    else if (pathname.includes('jpg')) loadRequest(res, pathname, 'binary', contentType.jpg);
    else if (pathname.includes('png')) loadRequest(res, pathname, 'binary', contentType.png);
    else {
      res.writeHead(404, {
        'Content-Type': 'text/html',
      });
      res.end('<h1>Page not found</h1>');
    }
  })
  .listen(8000, () => {
    console.log('listening on http://localhost:8000');
  });
