"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubjects = getSubjects;
exports.createSubject = createSubject;
exports.getOneSubject = getOneSubject;
exports.deleteSubject = deleteSubject;
exports.updateSubject = updateSubject;

var _Subject = _interopRequireDefault(require("../models/Subject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require("fs");

var writeFile = util.promisify(fs.writeFile);

function getSubjects(_x, _x2) {
  return _getSubjects.apply(this, arguments);
}

function _getSubjects() {
  _getSubjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            result = {};
            _context.next = 4;
            return _Subject["default"].findAll({});

          case 4:
            result['Subjects'] = _context.sent;
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
  return _getSubjects.apply(this, arguments);
}

function createSubject(_x3, _x4) {
  return _createSubject.apply(this, arguments);
}

function _createSubject() {
  _createSubject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, denomination, description, code_acm_ccs, uci_uri, ou_cso_uri, newSubject;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, denomination = _req$body.denomination, description = _req$body.description, code_acm_ccs = _req$body.code_acm_ccs, uci_uri = _req$body.uci_uri, ou_cso_uri = _req$body.ou_cso_uri;
            _context2.prev = 1;
            _context2.next = 4;
            return _Subject["default"].create({
              denomination: denomination,
              description: description,
              code_acm_ccs: code_acm_ccs,
              uci_uri: uci_uri,
              ou_cso_uri: ou_cso_uri
            }, {
              fields: ['denomination', 'description', 'code_acm_ccs', 'uci_uri', 'ou_cso_uri']
            });

          case 4:
            newSubject = _context2.sent;

            if (!newSubject) {
              _context2.next = 8;
              break;
            }

            saveSubjectsRawData();
            return _context2.abrupt("return", res.json({
              message: 'Subject created successfully',
              data: newSubject
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
  return _createSubject.apply(this, arguments);
}

function getOneSubject(_x5, _x6) {
  return _getOneSubject.apply(this, arguments);
}

function _getOneSubject() {
  _getOneSubject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, subject;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Subject["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            subject = _context3.sent;
            res.json(subject);
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
  return _getOneSubject.apply(this, arguments);
}

function deleteSubject(_x7, _x8) {
  return _deleteSubject.apply(this, arguments);
}

function _deleteSubject() {
  _deleteSubject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Subject["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;

            if (deleteRowCount > 0) {
              saveSubjectsRawData();
              res.json({
                message: 'Subject deleted successfully',
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
  return _deleteSubject.apply(this, arguments);
}

function updateSubject(_x9, _x10) {
  return _updateSubject.apply(this, arguments);
}

function _updateSubject() {
  _updateSubject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, denomination, description, code_acm_ccs, uci_uri, ou_cso_uri, subjects;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, denomination = _req$body2.denomination, description = _req$body2.description, code_acm_ccs = _req$body2.code_acm_ccs, uci_uri = _req$body2.uci_uri, ou_cso_uri = _req$body2.ou_cso_uri;
            _context6.prev = 2;
            _context6.next = 5;
            return _Subject["default"].findAll({
              attibutes: ['id', 'denomination', 'description', 'code_acm_ccs', 'uci_uri', 'ou_cso_uri'],
              where: {
                id: id
              }
            });

          case 5:
            subjects = _context6.sent;

            if (subjects.length > 0) {
              subjects.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(subject) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return subject.update({
                            denomination: denomination,
                            description: description,
                            code_acm_ccs: code_acm_ccs,
                            uci_uri: uci_uri,
                            ou_cso_uri: ou_cso_uri
                          });

                        case 2:
                          saveSubjectsRawData();

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
              message: 'Subjects updated successfully',
              data: subjects
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
  return _updateSubject.apply(this, arguments);
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