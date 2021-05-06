"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _university = require("../controllers/university.controller");

var router = (0, _express.Router)();
router.get('/', _university.getUniversities);
router.post('/', _university.createUniversity);
router.get('/:id', _university.getOneUniversity);
router["delete"]('/:id', _university.deleteUniversity);
router.put('/:id', _university.updateUniversity);
var _default = router;
exports["default"] = _default;