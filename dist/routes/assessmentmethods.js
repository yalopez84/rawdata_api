"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _assessmentmethod = require("../controllers/assessmentmethod.controller");

var router = (0, _express.Router)();
router.get('/', _assessmentmethod.getAssessmentmethods);
router.post('/', _assessmentmethod.createAssessmentmethod);
router.get('/:id', _assessmentmethod.getOneAssessmentmethod);
router["delete"]('/:id', _assessmentmethod.deleteAssessmentmethod);
router.put('/:id', _assessmentmethod.updateAssessmentmethod);
var _default = router;
exports["default"] = _default;