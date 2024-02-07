"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const tmpFolder = _path.default.resolve(__dirname, "..", "..", "tmp");
var _default = {
  directory: tmpFolder,
  storage: _multer.default.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileName = `${file.originalname}`;
      return callback(null, fileName);
    }
  })
};
exports.default = _default;