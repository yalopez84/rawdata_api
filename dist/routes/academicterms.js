"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _academicterm = require("../controllers/academicterm.controller");

var router = (0, _express.Router)();
router.get('/', _academicterm.getAcademicTerms);
router.post('/', _academicterm.createAcademicTerm);
router.get('/:id', _academicterm.getOneAcademicTerm);
router["delete"]('/:id', _academicterm.deleteAcademicTerm);
router.put('/:id', _academicterm.updateAcademicTerm);
var _default = router;
exports["default"] = _default;