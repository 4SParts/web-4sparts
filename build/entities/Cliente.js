"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
const {
  Column,
  Entity,
  PrimaryColumn
} = require('typeorm');
let Cliente = (_dec = Entity('cliente'), _dec2 = PrimaryColumn(), _dec3 = Reflect.metadata("design:type", typeof Number === "undefined" ? Object : Number), _dec4 = Column(), _dec5 = Reflect.metadata("design:type", typeof Number === "undefined" ? Object : Number), _dec6 = Column(), _dec7 = Reflect.metadata("design:type", String), _dec8 = Column(), _dec9 = Reflect.metadata("design:type", String), _dec10 = Column(), _dec11 = Reflect.metadata("design:type", String), _dec12 = Column(), _dec13 = Reflect.metadata("design:type", String), _dec14 = Column(), _dec15 = Reflect.metadata("design:type", String), _dec16 = Column(), _dec17 = Reflect.metadata("design:type", String), _dec18 = Column(), _dec19 = Reflect.metadata("design:type", String), _dec20 = Column(), _dec21 = Reflect.metadata("design:type", String), _dec22 = Column(), _dec23 = Reflect.metadata("design:type", String), _dec24 = Column(), _dec25 = Reflect.metadata("design:type", String), _dec26 = Column(), _dec27 = Reflect.metadata("design:type", String), _dec28 = Column(), _dec29 = Reflect.metadata("design:type", String), _dec30 = Column(), _dec31 = Reflect.metadata("design:type", String), _dec32 = Column(), _dec33 = Reflect.metadata("design:type", String), _dec34 = Column(), _dec35 = Reflect.metadata("design:type", String), _dec36 = Column(), _dec37 = Reflect.metadata("design:type", String), _dec38 = Column(), _dec39 = Reflect.metadata("design:type", Number), _dec40 = Column(), _dec41 = Reflect.metadata("design:type", String), _dec42 = Column(), _dec43 = Reflect.metadata("design:type", String), _dec44 = Column(), _dec45 = Reflect.metadata("design:type", String), _dec46 = Column(), _dec47 = Reflect.metadata("design:type", String), _dec(_class = (_class2 = class Cliente {
  constructor() {
    _initializerDefineProperty(this, "i_cdcliente", _descriptor, this);
    _initializerDefineProperty(this, "i_cdarea", _descriptor2, this);
    _initializerDefineProperty(this, "c_cnpj", _descriptor3, this);
    _initializerDefineProperty(this, "c_cpf", _descriptor4, this);
    _initializerDefineProperty(this, "c_nome", _descriptor5, this);
    _initializerDefineProperty(this, "c_nomefantas", _descriptor6, this);
    _initializerDefineProperty(this, "c_rgorgao", _descriptor7, this);
    _initializerDefineProperty(this, "c_inscrestadual", _descriptor8, this);
    _initializerDefineProperty(this, "i_cdclasse", _descriptor9, this);
    _initializerDefineProperty(this, "i_cdcidade", _descriptor10, this);
    _initializerDefineProperty(this, "c_endereco", _descriptor11, this);
    _initializerDefineProperty(this, "c_bairro", _descriptor12, this);
    _initializerDefineProperty(this, "c_cep", _descriptor13, this);
    _initializerDefineProperty(this, "c_contato", _descriptor14, this);
    _initializerDefineProperty(this, "c_email", _descriptor15, this);
    _initializerDefineProperty(this, "c_telefone", _descriptor16, this);
    _initializerDefineProperty(this, "c_telefone2", _descriptor17, this);
    _initializerDefineProperty(this, "c_telefone3", _descriptor18, this);
    _initializerDefineProperty(this, "i_cdarea", _descriptor19, this);
    _initializerDefineProperty(this, "c_numend", _descriptor20, this);
    _initializerDefineProperty(this, "c_compend", _descriptor21, this);
    _initializerDefineProperty(this, "d_inicioatividade", _descriptor22, this);
    _initializerDefineProperty(this, "c_cdsuframa", _descriptor23, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "i_cdcliente", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "i_cdarea", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "c_cnpj", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "c_cpf", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "c_nome", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "c_nomefantas", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "c_rgorgao", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "c_inscrestadual", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "i_cdclasse", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "i_cdcidade", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "c_endereco", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "c_bairro", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "c_cep", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "c_contato", [_dec28, _dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "c_email", [_dec30, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "c_telefone", [_dec32, _dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "c_telefone2", [_dec34, _dec35], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "c_telefone3", [_dec36, _dec37], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "i_cdarea", [_dec38, _dec39], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "c_numend", [_dec40, _dec41], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "c_compend", [_dec42, _dec43], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "d_inicioatividade", [_dec44, _dec45], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "c_cdsuframa", [_dec46, _dec47], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = Cliente;
exports.default = _default;