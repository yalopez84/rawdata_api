"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _CourseMaterial = _interopRequireDefault(require("./CourseMaterial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Material = _database.sequelize.define('materials', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  denomination: {
    type: _sequelize["default"].TEXT
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  uri: {
    type: _sequelize["default"].TEXT
  },
  extension: {
    type: _sequelize["default"].TEXT
  },
  dir: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

_CourseMaterial["default"].belongsTo(Material, {
  foreignKey: 'materialid',
  sourceKey: 'id'
});

Material.hasMany(_CourseMaterial["default"], {
  foreignKey: 'materialid',
  sourceKey: 'id'
});
var _default = Material;
exports["default"] = _default;