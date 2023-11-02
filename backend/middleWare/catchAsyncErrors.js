// Try catch class for async errors
module.exports = (theFunc) => (req, res, next) => {
  //Promise.resolve expect theFunc to perform async operation or return promise
  //if not then the error  is catched afterwords
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
