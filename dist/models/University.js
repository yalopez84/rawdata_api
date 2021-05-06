"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Course = _interopRequireDefault(require("./Course"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var University = _database.sequelize.define('universities', {
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
  uri_red: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

_Course["default"].belongsTo(University, {
  foreignKey: 'universityid',
  sourceKey: 'id'
});

University.hasMany(_Course["default"], {
  foreignKey: 'universityid',
  sourceKey: 'id'
});
var _default = University;
exports["default"] = _default;