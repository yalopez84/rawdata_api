"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Course = _interopRequireDefault(require("./Course"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Building = _database.sequelize.define('buildings', {
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

_Course["default"].belongsTo(Building, {
  foreignKey: 'buildingid',
  sourceKey: 'id'
});

Building.hasMany(_Course["default"], {
  foreignKey: 'buildingid',
  sourceKey: 'id'
});
var _default = Building;
exports["default"] = _default;