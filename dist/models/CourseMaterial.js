"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CourseMaterial = _database.sequelize.define('courses_materials', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  courseid: {
    type: _sequelize["default"].INTEGER
  },
  materialid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = CourseMaterial;
exports["default"] = _default;