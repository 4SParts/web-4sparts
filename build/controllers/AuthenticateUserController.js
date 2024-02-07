"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AuthenticateUserService = _interopRequireDefault(require("../services/AuthenticateUserService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AuthenticateUserController {
  async handle(request, response) {
    try {
      const {
        code,
        password
      } = request.body;
      const authenticateUser = new _AuthenticateUserService.default();
      const {
        user,
        token
      } = await authenticateUser.execute({
        id: code,
        c_senha: password
      });
      return response.json({
        user,
        token
      });
    } catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }
}
var _default = AuthenticateUserController;
exports.default = _default;