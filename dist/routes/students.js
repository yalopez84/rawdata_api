"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _student = require("../controllers/student.controller");

var router = (0, _express.Router)();
router.get('/', _student.getStudents);
router.post('/', _student.createStudent);
router.get('/:id', _student.getOneStudent);
router["delete"]('/:id', _student.deleteStudent);
router.put('/:id', _student.updateStudent);
var _default = router;
exports["default"] = _default;