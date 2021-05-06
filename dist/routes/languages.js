"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _language = require("../controllers/language.controller");

var router = (0, _express.Router)();
router.get('/', _language.getLanguages);
router.post('/', _language.createLanguage);
router.get('/:id', _language.getOneLanguage);
router["delete"]('/:id', _language.deleteLanguage);
router.put('/:id', _language.updateLanguage);
var _default = router;
exports["default"] = _default;