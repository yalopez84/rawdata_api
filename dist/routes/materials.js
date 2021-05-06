"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _material = require("../controllers/material.controller");

var router = (0, _express.Router)();
router.get('/', _material.getMaterials);
router.post('/', _material.createMaterial);
router.get('/:id', _material.getOneMaterial);
router["delete"]('/:id', _material.deleteMaterial);
router.put('/:id', _material.updateMaterial);
var _default = router;
exports["default"] = _default;