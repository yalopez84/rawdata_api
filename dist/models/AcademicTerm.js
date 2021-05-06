"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _CourseAcademicTerm = _interopRequireDefault(require("./CourseAcademicTerm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AcademicTerm = _database.sequelize.define('academicterms', {
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
  uci_uri: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

_CourseAcademicTerm["default"].belongsTo(AcademicTerm, {
  foreignKey: 'academictermid',
  sourceKey: 'id'
});

AcademicTerm.hasMany(_CourseAcademicTerm["default"], {
  foreignKey: 'academictermid',
  sourceKey: 'id'
});
var _default = AcademicTerm;
exports["default"] = _default;