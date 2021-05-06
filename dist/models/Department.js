"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Course = _interopRequireDefault(require("./Course"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Department = _database.sequelize.define('departments', {
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
  }
}, {
  timestamps: false
});

_Course["default"].belongsTo(Department, {
  foreignKey: 'departmentid',
  sourceKey: 'id'
});

Department.hasMany(_Course["default"], {
  foreignKey: 'departmentid',
  sourceKey: 'id'
});
var _default = Department;
exports["default"] = _default;