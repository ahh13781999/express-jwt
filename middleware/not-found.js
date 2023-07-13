const { StatusCodes } = require("http-status-codes");

const notFound = (req, res, next) =>
  res.status(StatusCodes.NOT_FOUND).send("Route doesn't exists");

module.exports = notFound;
