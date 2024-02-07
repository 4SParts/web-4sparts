"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _jsonwebtoken = require("jsonwebtoken");
var _auth = _interopRequireDefault(require("../config/auth"));
var _Area = _interopRequireDefault(require("../entities/Area"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AuthenticateUserService {
  async execute({
    id,
    c_senha
  }) {
    const usersRepository = (0, _typeorm.getRepository)(_Area.default);
    await usersRepository.query(`select criaparametro()`);
    const user = await usersRepository.findOne({
      where: {
        i_cdarea: id
      }
    });
    if (!user) {
      throw new Error("Incorrect cnpj/password combination.");
    }

    // const passwordMatched = await compare(c_senha, user.c_senha);

    const passwordMatched = (await c_senha) === user.c_senha;
    if (!passwordMatched) {
      throw new Error("Incorrect vende/password combination.");
    }

    /*     if (user?.f_situacao === "I") {
      throw new Error("user is inactive.");
    } */

    const {
      secret,
      expiresIn
    } = _auth.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      subject: user.c_nome,
      expiresIn
    });
    return {
      user,
      token
    };
  }
}
var _default = AuthenticateUserService;
exports.default = _default;