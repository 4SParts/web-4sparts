"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _produtos = _interopRequireDefault(require("./produtos.routes"));
var _sessions = _interopRequireDefault(require("./sessions.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
routes.use("/sessions", _sessions.default);
routes.use("/produtos", _produtos.default);
var _default = routes;
exports.default = _default;