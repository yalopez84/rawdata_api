"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveOther = saveOther;
exports.saveCourses = saveCourses;
exports.getHome = getHome;

var _Room = _interopRequireDefault(require("../models/Room"));

var _University = _interopRequireDefault(require("../models/University"));

var _Teachingmethod = _interopRequireDefault(require("../models/Teachingmethod"));

var _Teacher = _interopRequireDefault(require("../models/Teacher"));

var _Subject = _interopRequireDefault(require("../models/Subject"));

var _Student = _interopRequireDefault(require("../models/Student"));

var _Material = _interopRequireDefault(require("../models/Material"));

var _Language = _interopRequireDefault(require("../models/Language"));

var _Faculty = _interopRequireDefault(require("../models/Faculty"));

var _Department = _interopRequireDefault(require("../models/Department"));

var _Course = _interopRequireDefault(require("../models/Course"));

var _Building = _interopRequireDefault(require("../models/Building"));

var _AssessmentMethod = _interopRequireDefault(require("../models/AssessmentMethod"));

var _AcademicTerm = _interopRequireDefault(require("../models/AcademicTerm"));

var _CourseTeacher = _interopRequireDefault(require("../models/CourseTeacher"));

var _CourseMaterial = _interopRequireDefault(require("../models/CourseMaterial"));

var _CourseStudent = _interopRequireDefault(require("../models/CourseStudent"));

var _CourseAcademicTerm = _interopRequireDefault(require("../models/CourseAcademicTerm"));

var _server_config = _interopRequireDefault(require("../../config_files/server_config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var hostname = _server_config["default"].hostname;

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function saveOther(_x, _x2) {
  return _saveOther.apply(this, arguments);
}

function _saveOther() {
  _saveOther = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var c;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            saveUniversitiesRawData();
            saveTeachingmethodsRawData();
            saveTeachersRawData();
            saveSubjectsRawData();
            saveStudentsRawData();
            saveRoomsRawData();
            saveMaterialsRawData();
            saveLanguagesRawData();
            saveFacultiesRawData();
            saveDepartmentsRawData();
            saveBuildingsRawData();
            saveAssessmentMethodsRawData();
            saveAcademictermsRawData();
            c = {};
            c['Datasets of raw data'] = getDatasets();
            res.header("Content-Type", "application/json; charset=utf-8");
            res.json(c);
            res.end();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _saveOther.apply(this, arguments);
}

function saveCourses(_x3, _x4) {
  return _saveCourses.apply(this, arguments);
}

function _saveCourses() {
  _saveCourses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var c;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            saveCoursesRawData();
            c = {};
            c['Datasets of raw data'] = getDatasets();
            res.header("Content-Type", "application/json; charset=utf-8");
            res.json(c);
            res.end();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _saveCourses.apply(this, arguments);
}

function getHome(_x5, _x6) {
  return _getHome.apply(this, arguments);
}

function _getHome() {
  _getHome = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var c;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            c = {};
            c['Datasets of raw data'] = getDatasets();
            res.header("Content-Type", "application/json; charset=utf-8");
            res.json(c);
            res.end();

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getHome.apply(this, arguments);
}

function saveUniversitiesRawData() {
  return _saveUniversitiesRawData.apply(this, arguments);
}

function _saveUniversitiesRawData() {
  _saveUniversitiesRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var universities;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _University["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri', 'uri_red']
            });

          case 3:
            universities = _context4.sent;
            _context4.next = 6;
            return writeFile("./files/raw_data/universities.json", JSON.stringify(universities));

          case 6:
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _saveUniversitiesRawData.apply(this, arguments);
}

function saveTeachingmethodsRawData() {
  return _saveTeachingmethodsRawData.apply(this, arguments);
}

function _saveTeachingmethodsRawData() {
  _saveTeachingmethodsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var teachingmethods;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Teachingmethod["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri', 'uri_ac_uk']
            });

          case 3:
            teachingmethods = _context5.sent;
            _context5.next = 6;
            return writeFile("./files/raw_data/teachingmethods.json", JSON.stringify(teachingmethods));

          case 6:
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _saveTeachingmethodsRawData.apply(this, arguments);
}

function saveTeachersRawData() {
  return _saveTeachersRawData.apply(this, arguments);
}

function _saveTeachersRawData() {
  _saveTeachersRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var teachers;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _Teacher["default"].findAll({
              attibutes: ['id', 'name', 'username', 'uri']
            });

          case 3:
            teachers = _context6.sent;
            _context6.next = 6;
            return writeFile("./files/raw_data/teachers.json", JSON.stringify(teachers));

          case 6:
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _saveTeachersRawData.apply(this, arguments);
}

function saveSubjectsRawData() {
  return _saveSubjectsRawData.apply(this, arguments);
}

function _saveSubjectsRawData() {
  _saveSubjectsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var subjects;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _Subject["default"].findAll({});

          case 3:
            subjects = _context7.sent;
            _context7.next = 6;
            return writeFile("./files/raw_data/subjects.json", JSON.stringify(subjects));

          case 6:
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _saveSubjectsRawData.apply(this, arguments);
}

function saveStudentsRawData() {
  return _saveStudentsRawData.apply(this, arguments);
}

function _saveStudentsRawData() {
  _saveStudentsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var students;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _Student["default"].findAll({
              attibutes: ['id', 'name', 'username', 'faculty', 'uri']
            });

          case 3:
            students = _context8.sent;
            _context8.next = 6;
            return writeFile("./files/raw_data/students.json", JSON.stringify(students));

          case 6:
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return _saveStudentsRawData.apply(this, arguments);
}

function saveRoomsRawData() {
  return _saveRoomsRawData.apply(this, arguments);
}

function _saveRoomsRawData() {
  _saveRoomsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var rooms;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _Room["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri']
            });

          case 3:
            rooms = _context9.sent;
            _context9.next = 6;
            return writeFile("./files/raw_data/rooms.json", JSON.stringify(rooms));

          case 6:
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return _saveRoomsRawData.apply(this, arguments);
}

function saveMaterialsRawData() {
  return _saveMaterialsRawData.apply(this, arguments);
}

function _saveMaterialsRawData() {
  _saveMaterialsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var materials;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _Material["default"].findAll({});

          case 3:
            materials = _context10.sent;
            _context10.next = 6;
            return writeFile("./files/raw_data/materials.json", JSON.stringify(materials));

          case 6:
            _context10.next = 11;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](0);
            console.log(_context10.t0);

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return _saveMaterialsRawData.apply(this, arguments);
}

function saveLanguagesRawData() {
  return _saveLanguagesRawData.apply(this, arguments);
}

function _saveLanguagesRawData() {
  _saveLanguagesRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var languages;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _Language["default"].findAll({});

          case 3:
            languages = _context11.sent;
            _context11.next = 6;
            return writeFile("./files/raw_data/languages.json", JSON.stringify(languages));

          case 6:
            _context11.next = 11;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);

          case 11:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return _saveLanguagesRawData.apply(this, arguments);
}

function saveFacultiesRawData() {
  return _saveFacultiesRawData.apply(this, arguments);
}

function _saveFacultiesRawData() {
  _saveFacultiesRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var faculties;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _Faculty["default"].findAll({});

          case 3:
            faculties = _context12.sent;
            _context12.next = 6;
            return writeFile("./files/raw_data/faculties.json", JSON.stringify(faculties));

          case 6:
            _context12.next = 11;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);

          case 11:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 8]]);
  }));
  return _saveFacultiesRawData.apply(this, arguments);
}

function saveDepartmentsRawData() {
  return _saveDepartmentsRawData.apply(this, arguments);
}

function _saveDepartmentsRawData() {
  _saveDepartmentsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var departments;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _Department["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri']
            });

          case 3:
            departments = _context13.sent;
            _context13.next = 6;
            return writeFile("./files/raw_data/departments.json", JSON.stringify(departments));

          case 6:
            _context13.next = 11;
            break;

          case 8:
            _context13.prev = 8;
            _context13.t0 = _context13["catch"](0);
            console.log(_context13.t0);

          case 11:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 8]]);
  }));
  return _saveDepartmentsRawData.apply(this, arguments);
}

function saveBuildingsRawData() {
  return _saveBuildingsRawData.apply(this, arguments);
}

function _saveBuildingsRawData() {
  _saveBuildingsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    var buildings;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _Building["default"].findAll({
              attibutes: ['id', 'denomination', 'description']
            });

          case 3:
            buildings = _context14.sent;
            _context14.next = 6;
            return writeFile("./files/raw_data/buildings.json", JSON.stringify(buildings));

          case 6:
            _context14.next = 11;
            break;

          case 8:
            _context14.prev = 8;
            _context14.t0 = _context14["catch"](0);
            console.log(_context14.t0);

          case 11:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 8]]);
  }));
  return _saveBuildingsRawData.apply(this, arguments);
}

function saveAssessmentMethodsRawData() {
  return _saveAssessmentMethodsRawData.apply(this, arguments);
}

function _saveAssessmentMethodsRawData() {
  _saveAssessmentMethodsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
    var assessmentmethods;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return _AssessmentMethod["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri']
            });

          case 3:
            assessmentmethods = _context15.sent;
            _context15.next = 6;
            return writeFile("./files/raw_data/assessmentmethods.json", JSON.stringify(assessmentmethods));

          case 6:
            _context15.next = 11;
            break;

          case 8:
            _context15.prev = 8;
            _context15.t0 = _context15["catch"](0);
            console.log(_context15.t0);

          case 11:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 8]]);
  }));
  return _saveAssessmentMethodsRawData.apply(this, arguments);
}

function saveAcademictermsRawData() {
  return _saveAcademictermsRawData.apply(this, arguments);
}

function _saveAcademictermsRawData() {
  _saveAcademictermsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
    var academicterms;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return _AcademicTerm["default"].findAll({});

          case 3:
            academicterms = _context16.sent;
            _context16.next = 6;
            return writeFile("./files/raw_data/academicterms.json", JSON.stringify(academicterms));

          case 6:
            _context16.next = 11;
            break;

          case 8:
            _context16.prev = 8;
            _context16.t0 = _context16["catch"](0);
            console.log(_context16.t0);

          case 11:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 8]]);
  }));
  return _saveAcademictermsRawData.apply(this, arguments);
}

function saveCoursesRawData() {
  return _saveCoursesRawData.apply(this, arguments);
}

function _saveCoursesRawData() {
  _saveCoursesRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
    var courses;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _Course["default"].findAll({
              include: [_Subject["default"], _Language["default"], _University["default"], _Faculty["default"], _Department["default"], _Teachingmethod["default"], _Building["default"], _Room["default"], _AssessmentMethod["default"], {
                model: _CourseTeacher["default"],
                include: _Teacher["default"]
              }, {
                model: _CourseMaterial["default"],
                include: _Material["default"]
              }, {
                model: _CourseStudent["default"],
                include: _Student["default"]
              }, {
                model: _CourseAcademicTerm["default"],
                include: _AcademicTerm["default"]
              }]
            });

          case 3:
            courses = _context17.sent;
            _context17.next = 6;
            return writeFile("./files/raw_data/courses.json", JSON.stringify(courses));

          case 6:
            _context17.next = 11;
            break;

          case 8:
            _context17.prev = 8;
            _context17.t0 = _context17["catch"](0);
            console.log(_context17.t0);

          case 11:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[0, 8]]);
  }));
  return _saveCoursesRawData.apply(this, arguments);
}

function getDatasets() {
  var datasetsrawdata = [];
  var universitiesDataset = {};
  universitiesDataset['name'] = 'Universities';
  universitiesDataset['homepage'] = "http://".concat(hostname, "/api/universities");
  datasetsrawdata.push(universitiesDataset);
  var teachingmethodsDataset = {};
  teachingmethodsDataset['name'] = 'Teaching Methods';
  teachingmethodsDataset['homepage'] = "http://".concat(hostname, "/api/teachingmethods");
  datasetsrawdata.push(teachingmethodsDataset);
  var teachersDataset = {};
  teachersDataset['name'] = 'Teachers';
  teachersDataset['homepage'] = "http://".concat(hostname, "/api/teachers");
  datasetsrawdata.push(teachersDataset);
  var subjectsDataset = {};
  subjectsDataset['name'] = 'Subjects';
  subjectsDataset['homepage'] = "http://".concat(hostname, "/api/subjects");
  datasetsrawdata.push(subjectsDataset);
  var studentsDataset = {};
  studentsDataset['name'] = 'Students';
  studentsDataset['homepage'] = "http://".concat(hostname, "/api/students");
  datasetsrawdata.push(studentsDataset);
  var roomsDataset = {};
  roomsDataset['name'] = 'Rooms';
  roomsDataset['homepage'] = "http://".concat(hostname, "/api/rooms");
  datasetsrawdata.push(roomsDataset);
  var materialsDataset = {};
  materialsDataset['name'] = 'Materials';
  materialsDataset['homepage'] = "http://".concat(hostname, "/api/materials");
  datasetsrawdata.push(materialsDataset);
  var languagesDataset = {};
  languagesDataset['name'] = 'Languages';
  languagesDataset['homepage'] = "http://".concat(hostname, "/api/languages");
  datasetsrawdata.push(languagesDataset);
  var facultiesDataset = {};
  facultiesDataset['name'] = 'Faculties';
  facultiesDataset['homepage'] = "http://".concat(hostname, "/api/faculties");
  datasetsrawdata.push(facultiesDataset);
  var departmentsDataset = {};
  departmentsDataset['name'] = 'Departments';
  departmentsDataset['homepage'] = "http://".concat(hostname, "/api/departments");
  datasetsrawdata.push(departmentsDataset);
  var buildingsDataset = {};
  buildingsDataset['name'] = 'Buildings';
  buildingsDataset['homepage'] = "http://".concat(hostname, "/api/buildings");
  datasetsrawdata.push(buildingsDataset);
  var assessmentmethodsDataset = {};
  assessmentmethodsDataset['name'] = 'Assessment Methods';
  assessmentmethodsDataset['homepage'] = "http://".concat(hostname, "/api/assessmentmethods");
  datasetsrawdata.push(assessmentmethodsDataset);
  var academictermsDataset = {};
  academictermsDataset['name'] = 'Academic Terms';
  academictermsDataset['homepage'] = "http://".concat(hostname, "/api/academicterms");
  datasetsrawdata.push(academictermsDataset);
  var coursesDataset = {};
  coursesDataset['name'] = 'Courses';
  coursesDataset['homepage'] = "http://".concat(hostname, "/api/courses");
  datasetsrawdata.push(coursesDataset);
  var coursesteachersDataset = {};
  coursesteachersDataset['name'] = 'Courses Teachers';
  coursesteachersDataset['homepage'] = "http://".concat(hostname, "/api/coursesteachers");
  datasetsrawdata.push(coursesteachersDataset);
  var coursesmaterialsDataset = {};
  coursesmaterialsDataset['name'] = 'Courses Materials';
  coursesmaterialsDataset['homepage'] = "http://".concat(hostname, "/api/coursesmaterials");
  datasetsrawdata.push(coursesmaterialsDataset);
  var coursesacademictermsDataset = {};
  coursesacademictermsDataset['name'] = 'Courses Academic Terms';
  coursesacademictermsDataset['homepage'] = "http://".concat(hostname, "/api/coursesacademicterms");
  datasetsrawdata.push(coursesacademictermsDataset);
  var coursesstudentsDataset = {};
  coursesstudentsDataset['name'] = 'Courses Students';
  coursesstudentsDataset['homepage'] = "http://".concat(hostname, "/api/coursesstudents");
  datasetsrawdata.push(coursesstudentsDataset);
  return datasetsrawdata;
}