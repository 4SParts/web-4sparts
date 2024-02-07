"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _GetProdutoService = _interopRequireDefault(require("../services/GetProdutoService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class GetProdutosController {
  async handle(request, response) {
    const service = new _GetProdutoService.default();
    const products = await service.execute();
    return response.json(products);
  }
}
var _default = GetProdutosController;
exports.default = _default;