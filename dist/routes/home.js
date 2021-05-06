"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _rawdata = require("../controllers/rawdata.controller");

var router = (0, _express.Router)();
router.get('/', _rawdata.getHome);
router.get('/saveCourses', _rawdata.saveCourses);
router.get('/saveOther', _rawdata.saveOther);
var _default = router;
exports["default"] = _default;