"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDepartments = getDepartments;
exports.createDepartment = createDepartment;
exports.getOneDepartment = getOneDepartment;
exports.deleteDepartment = deleteDepartment;
exports.updateDepartment = updateDepartment;

var _Department = _interopRequireDefault(require("../models/Department"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function getDepartments(_x, _x2) {
  return _getDepartments.apply(this, arguments);
}

function _getDepartments() {
  _getDepartments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            result = {};
            _context.next = 4;
            return _Department["default"].findAll({});

          case 4:
            result['Departments'] = _context.sent;
            res.status(200).json(result);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getDepartments.apply(this, arguments);
}

function createDepartment(_x3, _x4) {
  return _createDepartment.apply(this, arguments);
}

function _createDepartment() {
  _createDepartment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, denomination, description, uri, newDepartment;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, denomination = _req$body.denomination, description = _req$body.description, uri = _req$body.uri;
            _context2.prev = 1;
            _context2.next = 4;
            return _Department["default"].create({
              denomination: denomination,
              description: description,
              uri: uri
            }, {
              fields: ['denomination', 'description', 'uri']
            });

          case 4:
            newDepartment = _context2.sent;

            if (!newDepartment) {
              _context2.next = 8;
              break;
            }

            saveDepartmentsRawData();
            return _context2.abrupt("return", res.json({
              message: 'Department created successfully',
              data: newDepartment
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
  return _createDepartment.apply(this, arguments);
}

function getOneDepartment(_x5, _x6) {
  return _getOneDepartment.apply(this, arguments);
}

function _getOneDepartment() {
  _getOneDepartment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, department;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Department["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            department = _context3.sent;
            res.json(department);
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
  return _getOneDepartment.apply(this, arguments);
}

function deleteDepartment(_x7, _x8) {
  return _deleteDepartment.apply(this, arguments);
}

function _deleteDepartment() {
  _deleteDepartment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Department["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;

            if (deleteRowCount > 0) {
              saveDepartmentsRawData();
              res.json({
                message: 'Department deleted successfully',
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
  return _deleteDepartment.apply(this, arguments);
}

function updateDepartment(_x9, _x10) {
  return _updateDepartment.apply(this, arguments);
}

function _updateDepartment() {
  _updateDepartment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, denomination, description, uri, departments;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, denomination = _req$body2.denomination, description = _req$body2.description, uri = _req$body2.uri;
            _context6.prev = 2;
            _context6.next = 5;
            return _Department["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri'],
              where: {
                id: id
              }
            });

          case 5:
            departments = _context6.sent;

            if (departments.length > 0) {
              departments.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(department) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return department.update({
                            denomination: denomination,
                            description: description,
                            uri: uri
                          });

                        case 2:
                          saveDepartmentsRawData();

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
              message: 'Department updated successfully',
              data: departments
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
  return _updateDepartment.apply(this, arguments);
}

function saveDepartmentsRawData() {
  return _saveDepartmentsRawData.apply(this, arguments);
}

function _saveDepartmentsRawData() {
  _saveDepartmentsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var departments;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _Department["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri']
            });

          case 3:
            departments = _context7.sent;
            _context7.next = 6;
            return writeFile("./files/raw_data/departments.json", JSON.stringify(departments));

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
  return _saveDepartmentsRawData.apply(this, arguments);
}