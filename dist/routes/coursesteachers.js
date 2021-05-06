"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _courseteacher = require("../controllers/courseteacher.controller");

var router = (0, _express.Router)();
router.get('/', _courseteacher.getCoursesTeachers);
router.post('/', _courseteacher.createCourseTeacher);
router.get('/:id', _courseteacher.getOneCourseTeacher);
router["delete"]('/:id', _courseteacher.deleteCourseTeacher);
router.put('/:id', _courseteacher.updateCourseTeacher);
var _default = router;
exports["default"] = _default;