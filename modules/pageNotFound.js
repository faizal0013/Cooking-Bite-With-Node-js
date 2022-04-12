const pageNotFound = (res, contentTypeObject) => {
  res.writeHead(404, contentTypeObject);
  res.end('<h1>Page not found</h1>');
};

module.exports = { pageNotFound };
