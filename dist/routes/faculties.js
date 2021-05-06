"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _faculty = require("../controllers/faculty.controller");

var router = (0, _express.Router)();
router.get('/', _faculty.getFaculties);
router.post('/', _faculty.createFaculty);
router.get('/:id', _faculty.getOneFaculty);
router["delete"]('/:id', _faculty.deleteFaculty);
router.put('/:id', _faculty.updateFaculty);
var _default = router;
exports["default"] = _default;