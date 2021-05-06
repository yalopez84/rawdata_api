"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _CourseTeacher = _interopRequireDefault(require("./CourseTeacher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Teacher = _database.sequelize.define('teachers', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  username: {
    type: _sequelize["default"].TEXT
  },
  uri: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

_CourseTeacher["default"].belongsTo(Teacher, {
  foreignKey: 'teacherid',
  sourceKey: 'id'
});

Teacher.hasMany(_CourseTeacher["default"], {
  foreignKey: 'teacherid',
  sourceKey: 'id'
});
var _default = Teacher;
exports["default"] = _default;