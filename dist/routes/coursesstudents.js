"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _coursestudent = require("../controllers/coursestudent.controller");

var router = (0, _express.Router)();
router.get('/', _coursestudent.getCoursesStudents);
router.post('/', _coursestudent.createCourseStudent);
router.get('/:id', _coursestudent.getOneCourseStudent);
router["delete"]('/:id', _coursestudent.deleteCourseStudent);
router.put('/:id', _coursestudent.updateCourseStudent);
var _default = router;
exports["default"] = _default;