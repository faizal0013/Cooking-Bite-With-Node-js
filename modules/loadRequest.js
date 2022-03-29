const path = require('path');
const fs = require('fs');

const contentType = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'image/jpeg',
  png: 'image/png',
};

const loadRequest = (res, pathname, encoding, contentTypeObject) => {
  let pathName = path.join(__dirname, '../public', pathname);
  if (pathname.includes('html')) pathName = path.join(__dirname, '../public/templates', pathname);

  fs.readFile(pathName, (err, data) => {
    if (err) return;
    res.writeHead(200, contentTypeObject);
    res.end(data, encoding);
  });
};

module.exports = { loadRequest, contentType };
