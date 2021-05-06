"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _CourseTeacher = _interopRequireDefault(require("./CourseTeacher"));

var _CourseMaterial = _interopRequireDefault(require("./CourseMaterial"));

var _CourseStudent = _interopRequireDefault(require("./CourseStudent"));

var _CourseAcademicTerm = _interopRequireDefault(require("./CourseAcademicTerm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Course = _database.sequelize.define('courses', {
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
  numberofcredits: {
    type: _sequelize["default"].INTEGER
  },
  level: {
    type: _sequelize["default"].STRING
  },
  weeklyhours: {
    type: _sequelize["default"].INTEGER
  },
  startdate: {
    type: _sequelize["default"].DATE
  },
  enddate: {
    type: _sequelize["default"].DATE
  },
  languageid: {
    type: _sequelize["default"].INTEGER
  },
  subjectid: {
    type: _sequelize["default"].INTEGER
  },
  universityid: {
    type: _sequelize["default"].INTEGER
  },
  facultyid: {
    type: _sequelize["default"].INTEGER
  },
  departmentid: {
    type: _sequelize["default"].INTEGER
  },
  teachingmethodid: {
    type: _sequelize["default"].INTEGER
  },
  buildingid: {
    type: _sequelize["default"].INTEGER
  },
  roomid: {
    type: _sequelize["default"].INTEGER
  },
  lonposition: {
    type: _sequelize["default"].DOUBLE
  },
  latposition: {
    type: _sequelize["default"].DOUBLE
  },
  country: {
    type: _sequelize["default"].TEXT
  },
  assessmentmethodid: {
    type: _sequelize["default"].INTEGER
  },
  uri: {
    type: _sequelize["default"].TEXT
  },
  teachinglevel: {
    type: _sequelize["default"].TEXT
  },
  license: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

_CourseTeacher["default"].belongsTo(Course, {
  foreignKey: 'courseid',
  sourceKey: 'id'
});

Course.hasMany(_CourseTeacher["default"], {
  foreignKey: 'courseid',
  sourceKey: 'id'
});

_CourseMaterial["default"].belongsTo(Course, {
  foreignKey: 'courseid',
  sourceKey: 'id'
});

Course.hasMany(_CourseMaterial["default"], {
  foreignKey: 'courseid',
  sourceKey: 'id'
});

_CourseStudent["default"].belongsTo(Course, {
  foreignKey: 'courseid',
  sourceKey: 'id'
});

Course.hasMany(_CourseStudent["default"], {
  foreignKey: 'courseid',
  sourceKey: 'id'
});

_CourseAcademicTerm["default"].belongsTo(Course, {
  foreignKey: 'courseid',
  sourceKey: 'id'
});

Course.hasMany(_CourseAcademicTerm["default"], {
  foreignKey: 'courseid',
  sourceKey: 'id'
});
var _default = Course;
exports["default"] = _default;