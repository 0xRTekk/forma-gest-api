function logger(req, res, next) {
  console.log(`${req.protocol} request ${req.method} ${req.path}`);
  next();
}

module.exports = logger;
