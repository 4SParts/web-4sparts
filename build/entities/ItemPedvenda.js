"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
const {
  Column,
  Entity,
  PrimaryColumn
} = require('typeorm');
let ItemPedvenda = (_dec = Entity('itempedvenda'), _dec2 = PrimaryColumn(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = Column(), _dec5 = Reflect.metadata("design:type", String), _dec6 = Column(), _dec7 = Reflect.metadata("design:type", Number), _dec8 = Column(), _dec9 = Reflect.metadata("design:type", Number), _dec10 = Column(), _dec11 = Reflect.metadata("design:type", Number), _dec12 = Column(), _dec13 = Reflect.metadata("design:type", Number), _dec14 = Column(), _dec15 = Reflect.metadata("design:type", Number), _dec16 = Column(), _dec17 = Reflect.metadata("design:type", String), _dec18 = Column(), _dec19 = Reflect.metadata("design:type", Number), _dec(_class = (_class2 = class ItemPedvenda {
  constructor() {
    _initializerDefineProperty(this, "i_nrpedido", _descriptor, this);
    _initializerDefineProperty(this, "c_codigo", _descriptor2, this);
    _initializerDefineProperty(this, "n_quantidade", _descriptor3, this);
    _initializerDefineProperty(this, "i_ctitem", _descriptor4, this);
    _initializerDefineProperty(this, "n_percdesconto", _descriptor5, this);
    _initializerDefineProperty(this, "i_ordem", _descriptor6, this);
    _initializerDefineProperty(this, "n_prcunitario", _descriptor7, this);
    _initializerDefineProperty(this, "f_bonifica", _descriptor8, this);
    _initializerDefineProperty(this, "i_cdarea", _descriptor9, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "i_nrpedido", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "c_codigo", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "n_quantidade", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "i_ctitem", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "n_percdesconto", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "i_ordem", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "n_prcunitario", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "f_bonifica", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "i_cdarea", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = ItemPedvenda;
exports.default = _default;