"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _course = require("../controllers/course.controller");

var router = (0, _express.Router)();
router.get('/', _course.getCourses);
router.post('/', _course.createCourse);
router.get('/:id', _course.getOneCourse);
router["delete"]('/:id', _course.deleteCourse);
router.put('/:id', _course.updateCourse);
var _default = router;
exports["default"] = _default;