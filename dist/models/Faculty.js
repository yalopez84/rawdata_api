"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Course = _interopRequireDefault(require("./Course"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Faculty = _database.sequelize.define('faculties', {
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

_Course["default"].belongsTo(Faculty, {
  foreignKey: 'facultyid',
  sourceKey: 'id'
});

Faculty.hasMany(_Course["default"], {
  foreignKey: 'facultyid',
  sourceKey: 'id'
});
var _default = Faculty;
exports["default"] = _default;