"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAcademicTerms = getAcademicTerms;
exports.createAcademicTerm = createAcademicTerm;
exports.getOneAcademicTerm = getOneAcademicTerm;
exports.deleteAcademicTerm = deleteAcademicTerm;
exports.updateAcademicTerm = updateAcademicTerm;

var _AcademicTerm = _interopRequireDefault(require("../models/AcademicTerm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function getAcademicTerms(_x, _x2) {
  return _getAcademicTerms.apply(this, arguments);
}

function _getAcademicTerms() {
  _getAcademicTerms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            result = {};
            _context.next = 4;
            return _AcademicTerm["default"].findAll({});

          case 4:
            result['Academic Terms'] = _context.sent;
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
  return _getAcademicTerms.apply(this, arguments);
}

function createAcademicTerm(_x3, _x4) {
  return _createAcademicTerm.apply(this, arguments);
}

function _createAcademicTerm() {
  _createAcademicTerm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, denomination, description, uci_uri, academicTerm;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, denomination = _req$body.denomination, description = _req$body.description, uci_uri = _req$body.uci_uri;
            _context2.prev = 1;
            _context2.next = 4;
            return _AcademicTerm["default"].create({
              denomination: denomination,
              description: description,
              uci_uri: uci_uri
            }, {
              fields: ['denomination', 'description', 'uci_uri']
            });

          case 4:
            academicTerm = _context2.sent;

            if (!academicTerm) {
              _context2.next = 8;
              break;
            }

            saveAcademictermsRawData();
            return _context2.abrupt("return", res.json({
              message: 'AcademicTerm created successfully',
              data: academicTerm
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
  return _createAcademicTerm.apply(this, arguments);
}

function getOneAcademicTerm(_x5, _x6) {
  return _getOneAcademicTerm.apply(this, arguments);
}

function _getOneAcademicTerm() {
  _getOneAcademicTerm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, academicTerm;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _AcademicTerm["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            academicTerm = _context3.sent;
            res.json(academicTerm);
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
  return _getOneAcademicTerm.apply(this, arguments);
}

function deleteAcademicTerm(_x7, _x8) {
  return _deleteAcademicTerm.apply(this, arguments);
}

function _deleteAcademicTerm() {
  _deleteAcademicTerm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _AcademicTerm["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;

            if (deleteRowCount > 0) {
              saveAcademictermsRawData();
              res.json({
                message: 'AcademicTerm deleted successfully',
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
  return _deleteAcademicTerm.apply(this, arguments);
}

function updateAcademicTerm(_x9, _x10) {
  return _updateAcademicTerm.apply(this, arguments);
}

function _updateAcademicTerm() {
  _updateAcademicTerm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, denomination, description, uci_uri, academicTerms;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, denomination = _req$body2.denomination, description = _req$body2.description, uci_uri = _req$body2.uci_uri;
            _context6.prev = 2;
            _context6.next = 5;
            return _AcademicTerm["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'uci_uri'],
              where: {
                id: id
              }
            });

          case 5:
            academicTerms = _context6.sent;

            if (academicTerms.length > 0) {
              academicTerms.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(academicTerm) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return academicTerm.update({
                            denomination: denomination,
                            description: description,
                            uci_uri: uci_uri
                          });

                        case 2:
                          saveAcademictermsRawData();

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
              message: 'AcademicTerm updated successfully',
              data: academicTerms
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
  return _updateAcademicTerm.apply(this, arguments);
}

function saveAcademictermsRawData() {
  return _saveAcademictermsRawData.apply(this, arguments);
}

function _saveAcademictermsRawData() {
  _saveAcademictermsRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var academicterms;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _AcademicTerm["default"].findAll({});

          case 3:
            academicterms = _context7.sent;
            _context7.next = 6;
            return writeFile("./files/raw_data/academicterms.json", JSON.stringify(academicterms));

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
  return _saveAcademictermsRawData.apply(this, arguments);
}