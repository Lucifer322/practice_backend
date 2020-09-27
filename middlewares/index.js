async function errorHandler(err, req, res, next) {
  switch (err.name) {
    case 'JsonWebTokenError':
      res.status(401).send('Invalid token');
      break;
    case 'ValidationError':
      res.status(400).send('Validation error');
      break;
    case 'CastError':
      res.status(400).send('Validation error');
      break;
    default:
      console.error(err);
      res.sendStatus(err.status || 500);
      break;
  }
}

module.exports = {
  errorHandler,
};
