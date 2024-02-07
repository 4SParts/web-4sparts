"use strict";

require("reflect-metadata");
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
require("express-async-errors");
var _routes = _interopRequireDefault(require("./routes"));
var _upload = _interopRequireDefault(require("./config/upload"));
require("./database");
var _AppError = require("./errors/AppError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use("/files", _express.default.static(_upload.default.directory));
app.use(_routes.default);
app.use((err, request, response, next) => {
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }
  console.error(err);
  return response.status(500).json({
    status: "error",
    message: `Internal server error`
  });
});
app.listen(3334, () => {
  console.log("Server started on port 3334!");
});