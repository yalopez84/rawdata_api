"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _CourseStudent = _interopRequireDefault(require("./CourseStudent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Student = _database.sequelize.define('students', {
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
  faculty: {
    type: _sequelize["default"].TEXT
  },
  uri: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

_CourseStudent["default"].belongsTo(Student, {
  foreignKey: 'studentid',
  sourceKey: 'id'
});

Student.hasMany(_CourseStudent["default"], {
  foreignKey: 'studentid',
  sourceKey: 'id'
});
var _default = Student;
exports["default"] = _default;