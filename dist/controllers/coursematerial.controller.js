"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoursesMaterials = getCoursesMaterials;
exports.createCourseMaterial = createCourseMaterial;
exports.getOneCourseMaterial = getOneCourseMaterial;
exports.deleteCourseMaterial = deleteCourseMaterial;
exports.updateCourseMaterial = updateCourseMaterial;

var _CourseMaterial = _interopRequireDefault(require("../models/CourseMaterial"));

var _Material = _interopRequireDefault(require("../models/Material"));

var _Course = _interopRequireDefault(require("../models/Course"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function getCoursesMaterials(_x, _x2) {
  return _getCoursesMaterials.apply(this, arguments);
}

function _getCoursesMaterials() {
  _getCoursesMaterials = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var coursesmaterials;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _CourseMaterial["default"].findAll({
              include: [_Course["default"], _Material["default"]]
            });

          case 3:
            coursesmaterials = _context.sent;
            res.status(200).json({
              data: coursesmaterials
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
  return _getCoursesMaterials.apply(this, arguments);
}

function createCourseMaterial(_x3, _x4) {
  return _createCourseMaterial.apply(this, arguments);
}

function _createCourseMaterial() {
  _createCourseMaterial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, courseid, materialid, coursematerial;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, courseid = _req$body.courseid, materialid = _req$body.materialid;
            _context2.prev = 1;
            _context2.next = 4;
            return _CourseMaterial["default"].create({
              courseid: courseid,
              materialid: materialid
            }, {
              fields: ['courseid', 'materialid']
            });

          case 4:
            coursematerial = _context2.sent;

            if (!coursematerial) {
              _context2.next = 9;
              break;
            }

            _context2.next = 8;
            return saveCoursesMaterialsRawData();

          case 8:
            return _context2.abrupt("return", res.json({
              message: 'CourseMaterial created successfully',
              data: coursematerial
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
  return _createCourseMaterial.apply(this, arguments);
}

function getOneCourseMaterial(_x5, _x6) {
  return _getOneCourseMaterial.apply(this, arguments);
}

function _getOneCourseMaterial() {
  _getOneCourseMaterial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, coursematerial;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _CourseMaterial["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            coursematerial = _context3.sent;
            res.json(coursematerial);
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
  return _getOneCourseMaterial.apply(this, arguments);
}

function deleteCourseMaterial(_x7, _x8) {
  return _deleteCourseMaterial.apply(this, arguments);
}

function _deleteCourseMaterial() {
  _deleteCourseMaterial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _CourseMaterial["default"].destroy({
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
            return saveCoursesMaterialsRawData();

          case 8:
            res.json({
              message: 'CourseMaterial deleted successfully',
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
  return _deleteCourseMaterial.apply(this, arguments);
}

function updateCourseMaterial(_x9, _x10) {
  return _updateCourseMaterial.apply(this, arguments);
}

function _updateCourseMaterial() {
  _updateCourseMaterial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, courseid, materialid, coursesmaterials;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, courseid = _req$body2.courseid, materialid = _req$body2.materialid;
            _context6.prev = 2;
            _context6.next = 5;
            return _CourseMaterial["default"].findAll({
              attibutes: ['id', 'courseid', 'materialid'],
              where: {
                id: id
              }
            });

          case 5:
            coursesmaterials = _context6.sent;

            if (coursesmaterials.length > 0) {
              coursesmaterials.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(coursematerial) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return coursematerial.update({
                            courseid: courseid,
                            materialid: materialid
                          });

                        case 2:
                          _context5.next = 4;
                          return saveCoursesMaterialsRawData();

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
              message: 'Coursematerial updated successfully',
              data: coursesmaterials
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
  return _updateCourseMaterial.apply(this, arguments);
}

function saveCoursesMaterialsRawData() {
  return _saveCoursesMaterialsRawData.apply(this, arguments);
}

function _saveCoursesMaterialsRawData() {
  _saveCoursesMaterialsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var coursesmaterials;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _CourseMaterial["default"].findAll({
              include: [_Course["default"], _Material["default"]]
            });

          case 3:
            coursesmaterials = _context7.sent;
            _context7.next = 6;
            return writeFile("./files/raw_data/coursesmaterials.json", JSON.stringify(coursesmaterials));

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
  return _saveCoursesMaterialsRawData.apply(this, arguments);
}