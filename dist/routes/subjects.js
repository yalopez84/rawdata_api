"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _subject = require("../controllers/subject.controller");

var router = (0, _express.Router)();
router.get('/', _subject.getSubjects);
router.post('/', _subject.createSubject);
router.get('/:id', _subject.getOneSubject);
router["delete"]('/:id', _subject.deleteSubject);
router.put('/:id', _subject.updateSubject);
var _default = router;
exports["default"] = _default;