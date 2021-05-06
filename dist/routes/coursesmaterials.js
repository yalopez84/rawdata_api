"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _coursematerial = require("../controllers/coursematerial.controller");

var router = (0, _express.Router)();
router.get('/', _coursematerial.getCoursesMaterials);
router.post('/', _coursematerial.createCourseMaterial);
router.get('/:id', _coursematerial.getOneCourseMaterial);
router["delete"]('/:id', _coursematerial.deleteCourseMaterial);
router.put('/:id', _coursematerial.updateCourseMaterial);
var _default = router;
exports["default"] = _default;