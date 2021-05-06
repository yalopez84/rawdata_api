"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Course = _interopRequireDefault(require("./Course"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Subject = _database.sequelize.define('subjects', {
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
  code_acm_ccs: {
    type: _sequelize["default"].TEXT
  },
  uci_uri: {
    type: _sequelize["default"].TEXT
  },
  ou_cso_uri: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

_Course["default"].belongsTo(Subject, {
  foreignKey: 'subjectid',
  sourceKey: 'id'
});

Subject.hasMany(_Course["default"], {
  foreignKey: 'subjectid',
  sourceKey: 'id'
});
var _default = Subject;
exports["default"] = _default;