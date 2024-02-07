"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
const {
  Column,
  Entity,
  PrimaryColumn
} = require('typeorm');
let Vendedor = (_dec = Entity("vendedor"), _dec2 = PrimaryColumn(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = Column(), _dec5 = Reflect.metadata("design:type", String), _dec6 = Column(), _dec7 = Reflect.metadata("design:type", String), _dec8 = Column(), _dec9 = Reflect.metadata("design:type", String), _dec10 = Column(), _dec11 = Reflect.metadata("design:type", String), _dec(_class = (_class2 = class Vendedor {
  constructor() {
    _initializerDefineProperty(this, "i_cdvendedor", _descriptor, this);
    _initializerDefineProperty(this, "c_nome", _descriptor2, this);
    _initializerDefineProperty(this, "senha_intranet", _descriptor3, this);
    _initializerDefineProperty(this, "f_vendedor", _descriptor4, this);
    _initializerDefineProperty(this, "f_situacao", _descriptor5, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "i_cdvendedor", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "c_nome", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "senha_intranet", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "f_vendedor", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "f_situacao", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = Vendedor;
exports.default = _default;