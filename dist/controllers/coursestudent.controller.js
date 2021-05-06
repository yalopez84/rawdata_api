"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoursesStudents = getCoursesStudents;
exports.createCourseStudent = createCourseStudent;
exports.getOneCourseStudent = getOneCourseStudent;
exports.deleteCourseStudent = deleteCourseStudent;
exports.updateCourseStudent = updateCourseStudent;

var _CourseStudent = _interopRequireDefault(require("../models/CourseStudent"));

var _Course = _interopRequireDefault(require("../models/Course"));

var _Student = _interopRequireDefault(require("../models/Student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function getCoursesStudents(_x, _x2) {
  return _getCoursesStudents.apply(this, arguments);
}

function _getCoursesStudents() {
  _getCoursesStudents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var coursesstudents;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _CourseStudent["default"].findAll({
              include: [_Course["default"], _Student["default"]]
            });

          case 3:
            coursesstudents = _context.sent;
            res.status(200).json({
              data: coursesstudents
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
  return _getCoursesStudents.apply(this, arguments);
}

function createCourseStudent(_x3, _x4) {
  return _createCourseStudent.apply(this, arguments);
}

function _createCourseStudent() {
  _createCourseStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, courseid, studentid, coursestudent;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, courseid = _req$body.courseid, studentid = _req$body.studentid;
            _context2.prev = 1;
            _context2.next = 4;
            return _CourseStudent["default"].create({
              courseid: courseid,
              studentid: studentid
            }, {
              fields: ['courseid', 'studentid']
            });

          case 4:
            coursestudent = _context2.sent;

            if (!coursestudent) {
              _context2.next = 9;
              break;
            }

            _context2.next = 8;
            return saveCoursesStudentsRawData();

          case 8:
            return _context2.abrupt("return", res.json({
              message: 'Coursestudent created successfully',
              data: coursestudent
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
  return _createCourseStudent.apply(this, arguments);
}

function getOneCourseStudent(_x5, _x6) {
  return _getOneCourseStudent.apply(this, arguments);
}

function _getOneCourseStudent() {
  _getOneCourseStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, coursestudent;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _CourseStudent["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            coursestudent = _context3.sent;
            res.json(coursestudent);
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
  return _getOneCourseStudent.apply(this, arguments);
}

function deleteCourseStudent(_x7, _x8) {
  return _deleteCourseStudent.apply(this, arguments);
}

function _deleteCourseStudent() {
  _deleteCourseStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _CourseStudent["default"].destroy({
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
            return saveCoursesStudentsRawData();

          case 8:
            res.json({
              message: 'Coursestudent deleted successfully',
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
  return _deleteCourseStudent.apply(this, arguments);
}

function updateCourseStudent(_x9, _x10) {
  return _updateCourseStudent.apply(this, arguments);
}

function _updateCourseStudent() {
  _updateCourseStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, courseid, studentid, coursesstudents;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, courseid = _req$body2.courseid, studentid = _req$body2.studentid;
            _context6.prev = 2;
            _context6.next = 5;
            return _CourseStudent["default"].findAll({
              attibutes: ['id', 'courseid', 'studentid'],
              where: {
                id: id
              }
            });

          case 5:
            coursesstudents = _context6.sent;

            if (coursesstudents.length > 0) {
              coursesstudents.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(coursestudent) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return coursestudent.update({
                            courseid: courseid,
                            studentid: studentid
                          });

                        case 2:
                          _context5.next = 4;
                          return saveCoursesStudentsRawData();

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
              message: 'Coursestudent updated successfully',
              data: coursesstudents
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
  return _updateCourseStudent.apply(this, arguments);
}

function saveCoursesStudentsRawData() {
  return _saveCoursesStudentsRawData.apply(this, arguments);
}

function _saveCoursesStudentsRawData() {
  _saveCoursesStudentsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var coursesstudents;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _CourseStudent["default"].findAll({
              include: [_Course["default"], _Student["default"]]
            });

          case 3:
            coursesstudents = _context7.sent;
            _context7.next = 6;
            return writeFile("./files/raw_data/coursesstudents.json", JSON.stringify(coursesstudents));

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
  return _saveCoursesStudentsRawData.apply(this, arguments);
}