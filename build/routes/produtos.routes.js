"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _GetProdutosController = _interopRequireDefault(require("../controllers/GetProdutosController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const produtosRouter = (0, _express.Router)();
produtosRouter.get("/", new _GetProdutosController.default().handle);
var _default = produtosRouter;
exports.default = _default;