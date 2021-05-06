"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _teacher = require("../controllers/teacher.controller");

var router = (0, _express.Router)();
router.get('/', _teacher.getTeachers);
router.post('/', _teacher.createTeacher);
router.get('/:id', _teacher.getOneTeacher);
router["delete"]('/:id', _teacher.deleteTeacher);
router.put('/:id', _teacher.updateTeacher);
var _default = router;
exports["default"] = _default;