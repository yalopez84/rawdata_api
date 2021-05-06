"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _courseacademicterm = require("../controllers/courseacademicterm.controller");

var router = (0, _express.Router)();
router.get('/', _courseacademicterm.getCoursesAcademicTerms);
router.post('/', _courseacademicterm.createCourseAcademicTerm);
router.get('/:id', _courseacademicterm.getOneCourseAcademicTerm);
router["delete"]('/:id', _courseacademicterm.deleteCourseAcademicTerm);
router.put('/:id', _courseacademicterm.updateCourseAcademicTerm);
var _default = router;
exports["default"] = _default;