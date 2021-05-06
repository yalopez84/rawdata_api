"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCourses = getCourses;
exports.createCourse = createCourse;
exports.getOneCourse = getOneCourse;
exports.deleteCourse = deleteCourse;
exports.updateCourse = updateCourse;

var _Course = _interopRequireDefault(require("../models/Course"));

var _Language = _interopRequireDefault(require("../models/Language"));

var _Subject = _interopRequireDefault(require("../models/Subject"));

var _University = _interopRequireDefault(require("../models/University"));

var _Faculty = _interopRequireDefault(require("../models/Faculty"));

var _Department = _interopRequireDefault(require("../models/Department"));

var _Teachingmethod = _interopRequireDefault(require("../models/Teachingmethod"));

var _Building = _interopRequireDefault(require("../models/Building"));

var _Room = _interopRequireDefault(require("../models/Room"));

var _CourseTeacher = _interopRequireDefault(require("../models/CourseTeacher"));

var _CourseMaterial = _interopRequireDefault(require("../models/CourseMaterial"));

var _CourseStudent = _interopRequireDefault(require("../models/CourseStudent"));

var _Teacher = _interopRequireDefault(require("../models/Teacher"));

var _Material = _interopRequireDefault(require("../models/Material"));

var _Student = _interopRequireDefault(require("../models/Student"));

var _AssessmentMethod = _interopRequireDefault(require("../models/AssessmentMethod"));

var _CourseAcademicTerm = _interopRequireDefault(require("../models/CourseAcademicTerm"));

var _AcademicTerm = _interopRequireDefault(require("../models/AcademicTerm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function getCourses(_x, _x2) {
  return _getCourses.apply(this, arguments);
}

function _getCourses() {
  _getCourses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            result = {};
            _context.next = 4;
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

          case 4:
            result['Courses'] = _context.sent;
            res.status(200).json(result);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getCourses.apply(this, arguments);
}

function createCourse(_x3, _x4) {
  return _createCourse.apply(this, arguments);
}

function _createCourse() {
  _createCourse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, denomination, description, numberofcredits, level, weeklyhours, startdate, enddate, languageid, subjectid, universityid, facultyid, departmentid, teachingmethodid, buildingid, roomid, lonposition, latposition, country, assessmentmethodid, uri, teachinglevel, license, course;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, denomination = _req$body.denomination, description = _req$body.description, numberofcredits = _req$body.numberofcredits, level = _req$body.level, weeklyhours = _req$body.weeklyhours, startdate = _req$body.startdate, enddate = _req$body.enddate, languageid = _req$body.languageid, subjectid = _req$body.subjectid, universityid = _req$body.universityid, facultyid = _req$body.facultyid, departmentid = _req$body.departmentid, teachingmethodid = _req$body.teachingmethodid, buildingid = _req$body.buildingid, roomid = _req$body.roomid, lonposition = _req$body.lonposition, latposition = _req$body.latposition, country = _req$body.country, assessmentmethodid = _req$body.assessmentmethodid, uri = _req$body.uri, teachinglevel = _req$body.teachinglevel, license = _req$body.license;
            _context2.prev = 1;
            _context2.next = 4;
            return _Course["default"].create({
              denomination: denomination,
              description: description,
              numberofcredits: numberofcredits,
              level: level,
              weeklyhours: weeklyhours,
              startdate: startdate,
              enddate: enddate,
              languageid: languageid,
              subjectid: subjectid,
              universityid: universityid,
              facultyid: facultyid,
              departmentid: departmentid,
              teachingmethodid: teachingmethodid,
              buildingid: buildingid,
              roomid: roomid,
              lonposition: lonposition,
              latposition: latposition,
              country: country,
              assessmentmethodid: assessmentmethodid,
              uri: uri,
              teachinglevel: teachinglevel,
              license: license
            }, {
              fields: ['denomination', 'description', 'numberofcredits', 'level', 'weeklyhours', 'startdate', 'enddate', 'languageid', 'subjectid', 'universityid', 'facultyid', 'departmentid', 'teachingmethodid', 'buildingid', 'roomid', 'lonposition', 'latposition', 'country', 'assessmentmethodid', 'uri', 'teachinglevel', 'license']
            });

          case 4:
            course = _context2.sent;

            if (!course) {
              _context2.next = 8;
              break;
            }

            saveCoursesRawData();
            return _context2.abrupt("return", res.json({
              message: 'Course created successfully',
              data: course
            }));

          case 8:
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return _createCourse.apply(this, arguments);
}

function getOneCourse(_x5, _x6) {
  return _getOneCourse.apply(this, arguments);
}

function _getOneCourse() {
  _getOneCourse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, course;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Course["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            course = _context3.sent;
            res.json(course);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOneCourse.apply(this, arguments);
}

function deleteCourse(_x7, _x8) {
  return _deleteCourse.apply(this, arguments);
}

function _deleteCourse() {
  _deleteCourse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Course["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;

            if (deleteRowCount > 0) {
              saveCoursesRawData();
              res.json({
                message: 'Course deleted successfully',
                count: 'deleteRowCount'
              });
            }

            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.json({
              message: 'Something goes wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteCourse.apply(this, arguments);
}

function updateCourse(_x9, _x10) {
  return _updateCourse.apply(this, arguments);
}

function _updateCourse() {
  _updateCourse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, denomination, description, numberofcredits, level, weeklyhours, startdate, enddate, languageid, subjectid, universityid, facultyid, departmentid, teachingmethodid, buildingid, roomid, lonposition, latposition, country, assessmentmethodid, uri, teachinglevel, license, courses;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, denomination = _req$body2.denomination, description = _req$body2.description, numberofcredits = _req$body2.numberofcredits, level = _req$body2.level, weeklyhours = _req$body2.weeklyhours, startdate = _req$body2.startdate, enddate = _req$body2.enddate, languageid = _req$body2.languageid, subjectid = _req$body2.subjectid, universityid = _req$body2.universityid, facultyid = _req$body2.facultyid, departmentid = _req$body2.departmentid, teachingmethodid = _req$body2.teachingmethodid, buildingid = _req$body2.buildingid, roomid = _req$body2.roomid, lonposition = _req$body2.lonposition, latposition = _req$body2.latposition, country = _req$body2.country, assessmentmethodid = _req$body2.assessmentmethodid, uri = _req$body2.uri, teachinglevel = _req$body2.teachinglevel, license = _req$body2.license;
            _context6.prev = 2;
            _context6.next = 5;
            return _Course["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'numberofcredits', 'level', 'weeklyhours', 'startdate', 'enddate', 'languageid', 'subjectid', 'universityid', 'facultyid', 'departmentid', 'teachingmethodid', 'buildingid', 'roomid', 'lonposition', 'latposition', 'country', 'assessmentmethodid', 'uri', 'teachinglevel', 'license'],
              where: {
                id: id
              }
            });

          case 5:
            courses = _context6.sent;

            if (courses.length > 0) {
              courses.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(course) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return course.update({
                            denomination: denomination,
                            description: description,
                            numberofcredits: numberofcredits,
                            level: level,
                            weeklyhours: weeklyhours,
                            startdate: startdate,
                            enddate: enddate,
                            languageid: languageid,
                            subjectid: subjectid,
                            universityid: universityid,
                            facultyid: facultyid,
                            departmentid: departmentid,
                            teachingmethodid: teachingmethodid,
                            buildingid: buildingid,
                            roomid: roomid,
                            lonposition: lonposition,
                            latposition: latposition,
                            country: country,
                            assessmentmethodid: assessmentmethodid,
                            uri: uri,
                            teachinglevel: teachinglevel,
                            license: license
                          });

                        case 2:
                          saveCoursesRawData();

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Courses updated successfully',
              data: courses
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            return _context6.abrupt("return", res.json({
              message: 'Something goes wrong',
              data: {}
            }));

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateCourse.apply(this, arguments);
}

function saveCoursesRawData() {
  return _saveCoursesRawData.apply(this, arguments);
}

function _saveCoursesRawData() {
  _saveCoursesRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var courses;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
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
            courses = _context7.sent;
            _context7.next = 6;
            return writeFile("./files/raw_data/courses.json", JSON.stringify(courses));

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
  return _saveCoursesRawData.apply(this, arguments);
}