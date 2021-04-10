// const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, res, req, next) => {
  // Log to console for dev
  console.log(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server error",
  });
};

module.exports = errorHandler;
