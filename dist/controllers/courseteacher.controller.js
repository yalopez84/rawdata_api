"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoursesTeachers = getCoursesTeachers;
exports.createCourseTeacher = createCourseTeacher;
exports.getOneCourseTeacher = getOneCourseTeacher;
exports.deleteCourseTeacher = deleteCourseTeacher;
exports.updateCourseTeacher = updateCourseTeacher;

var _CourseTeacher = _interopRequireDefault(require("../models/CourseTeacher"));

var _Course = _interopRequireDefault(require("../models/Course"));

var _Teacher = _interopRequireDefault(require("../models/Teacher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function getCoursesTeachers(_x, _x2) {
  return _getCoursesTeachers.apply(this, arguments);
}

function _getCoursesTeachers() {
  _getCoursesTeachers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var coursesteachers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _CourseTeacher["default"].findAll({
              include: [_Course["default"], _Teacher["default"]]
            });

          case 3:
            coursesteachers = _context.sent;
            res.status(200).json({
              data: coursesteachers
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getCoursesTeachers.apply(this, arguments);
}

function createCourseTeacher(_x3, _x4) {
  return _createCourseTeacher.apply(this, arguments);
}

function _createCourseTeacher() {
  _createCourseTeacher = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, courseid, teacherid, courseteacher;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, courseid = _req$body.courseid, teacherid = _req$body.teacherid;
            _context2.prev = 1;
            _context2.next = 4;
            return _CourseTeacher["default"].create({
              courseid: courseid,
              teacherid: teacherid
            }, {
              fields: ['courseid', 'teacherid']
            });

          case 4:
            courseteacher = _context2.sent;

            if (!courseteacher) {
              _context2.next = 9;
              break;
            }

            _context2.next = 8;
            return saveCoursesTeachersRawData();

          case 8:
            return _context2.abrupt("return", res.json({
              message: 'CourseTeacher created successfully',
              data: courseteacher
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return _createCourseTeacher.apply(this, arguments);
}

function getOneCourseTeacher(_x5, _x6) {
  return _getOneCourseTeacher.apply(this, arguments);
}

function _getOneCourseTeacher() {
  _getOneCourseTeacher = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, courseteacher;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _CourseTeacher["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            courseteacher = _context3.sent;
            res.json(courseteacher);
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
  return _getOneCourseTeacher.apply(this, arguments);
}

function deleteCourseTeacher(_x7, _x8) {
  return _deleteCourseTeacher.apply(this, arguments);
}

function _deleteCourseTeacher() {
  _deleteCourseTeacher = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _CourseTeacher["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;

            if (!(deleteRowCount > 0)) {
              _context4.next = 9;
              break;
            }

            _context4.next = 8;
            return saveCoursesTeachersRawData();

          case 8:
            res.json({
              message: 'CourseTeacher deleted successfully',
              count: 'deleteRowCount'
            });

          case 9:
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            res.json({
              message: 'Something goes wrong',
              data: {}
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return _deleteCourseTeacher.apply(this, arguments);
}

function updateCourseTeacher(_x9, _x10) {
  return _updateCourseTeacher.apply(this, arguments);
}

function _updateCourseTeacher() {
  _updateCourseTeacher = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, courseid, teacherid, coursesteachers;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, courseid = _req$body2.courseid, teacherid = _req$body2.teacherid;
            _context6.prev = 2;
            _context6.next = 5;
            return _CourseTeacher["default"].findAll({
              attibutes: ['id', 'courseid', 'teacherid'],
              where: {
                id: id
              }
            });

          case 5:
            coursesteachers = _context6.sent;

            if (coursesteachers.length > 0) {
              coursesteachers.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(courseteacher) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return courseteacher.update({
                            courseid: courseid,
                            teacherid: teacherid
                          });

                        case 2:
                          _context5.next = 4;
                          return saveCoursesTeachersRawData();

                        case 4:
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
              message: 'CourseTeacher updated successfully',
              data: coursesteachers
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
  return _updateCourseTeacher.apply(this, arguments);
}

function saveCoursesTeachersRawData() {
  return _saveCoursesTeachersRawData.apply(this, arguments);
}

function _saveCoursesTeachersRawData() {
  _saveCoursesTeachersRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var coursesteachers;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _CourseTeacher["default"].findAll({
              include: [_Course["default"], _Teacher["default"]]
            });

          case 3:
            coursesteachers = _context7.sent;
            _context7.next = 6;
            return writeFile("./files/raw_data/coursesteachers.json", JSON.stringify(coursesteachers));

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
  return _saveCoursesTeachersRawData.apply(this, arguments);
}