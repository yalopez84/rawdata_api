"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTeachingmethods = getTeachingmethods;
exports.createTeachingmethod = createTeachingmethod;
exports.getOneTeachingmethod = getOneTeachingmethod;
exports.deleteTeachingmethod = deleteTeachingmethod;
exports.updateTeachingmethod = updateTeachingmethod;

var _Teachingmethod = _interopRequireDefault(require("../models/Teachingmethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function getTeachingmethods(_x, _x2) {
  return _getTeachingmethods.apply(this, arguments);
}

function _getTeachingmethods() {
  _getTeachingmethods = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            result = {};
            _context.next = 4;
            return _Teachingmethod["default"].findAll({});

          case 4:
            result['Teaching Methods'] = _context.sent;
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
  return _getTeachingmethods.apply(this, arguments);
}

function createTeachingmethod(_x3, _x4) {
  return _createTeachingmethod.apply(this, arguments);
}

function _createTeachingmethod() {
  _createTeachingmethod = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, denomination, description, uri, uri_ac_uk, teachingmethod;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, denomination = _req$body.denomination, description = _req$body.description, uri = _req$body.uri, uri_ac_uk = _req$body.uri_ac_uk;
            _context2.prev = 1;
            _context2.next = 4;
            return _Teachingmethod["default"].create({
              denomination: denomination,
              description: description,
              uri: uri,
              uri_ac_uk: uri_ac_uk
            }, {
              fields: ['denomination', 'description', 'uri', 'uri_ac_uk']
            });

          case 4:
            teachingmethod = _context2.sent;

            if (!teachingmethod) {
              _context2.next = 8;
              break;
            }

            saveTeachingmethodsRawData();
            return _context2.abrupt("return", res.json({
              message: 'Teachingmethod created successfully',
              data: teachingmethod
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
  return _createTeachingmethod.apply(this, arguments);
}

function getOneTeachingmethod(_x5, _x6) {
  return _getOneTeachingmethod.apply(this, arguments);
}

function _getOneTeachingmethod() {
  _getOneTeachingmethod = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, teachingmethod;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Teachingmethod["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            teachingmethod = _context3.sent;
            res.json(teachingmethod);
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
  return _getOneTeachingmethod.apply(this, arguments);
}

function deleteTeachingmethod(_x7, _x8) {
  return _deleteTeachingmethod.apply(this, arguments);
}

function _deleteTeachingmethod() {
  _deleteTeachingmethod = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Teachingmethod["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;

            if (deleteRowCount > 0) {
              saveTeachingmethodsRawData();
              res.json({
                message: 'Teachingmethod deleted successfully',
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
  return _deleteTeachingmethod.apply(this, arguments);
}

function updateTeachingmethod(_x9, _x10) {
  return _updateTeachingmethod.apply(this, arguments);
}

function _updateTeachingmethod() {
  _updateTeachingmethod = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, denomination, description, uri, uri_ac_uk, teachingmethods;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, denomination = _req$body2.denomination, description = _req$body2.description, uri = _req$body2.uri, uri_ac_uk = _req$body2.uri_ac_uk;
            _context6.prev = 2;
            _context6.next = 5;
            return _Teachingmethod["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri', 'uri_ac_uk'],
              where: {
                id: id
              }
            });

          case 5:
            teachingmethods = _context6.sent;

            if (teachingmethods.length > 0) {
              teachingmethods.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(teachingmethod) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return teachingmethod.update({
                            denomination: denomination,
                            description: description,
                            uri: uri,
                            uri_ac_uk: uri_ac_uk
                          });

                        case 2:
                          saveTeachingmethodsRawData();

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
              message: 'Teachingmethod updated successfully',
              data: teachingmethods
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
  return _updateTeachingmethod.apply(this, arguments);
}

function saveTeachingmethodsRawData() {
  return _saveTeachingmethodsRawData.apply(this, arguments);
}

function _saveTeachingmethodsRawData() {
  _saveTeachingmethodsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var teachingmethods;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _Teachingmethod["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uri', 'uri_ac_uk']
            });

          case 3:
            teachingmethods = _context7.sent;
            _context7.next = 6;
            return writeFile("./files/raw_data/teachingmethods.json", JSON.stringify(teachingmethods));

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
  return _saveTeachingmethodsRawData.apply(this, arguments);
}