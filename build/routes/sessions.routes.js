"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _AuthenticateUserController = _interopRequireDefault(require("../controllers/AuthenticateUserController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const sessionsRouter = (0, _express.Router)();
sessionsRouter.post('/', new _AuthenticateUserController.default().handle);
var _default = sessionsRouter;
exports.default = _default;