"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _building = require("../controllers/building.controller");

var router = (0, _express.Router)();
router.get('/', _building.getBuildings);
router.post('/', _building.createBuilding);
router.get('/:id', _building.getOneBuilding);
router["delete"]('/:id', _building.deleteBuilding);
router.put('/:id', _building.updateBuilding);
var _default = router;
exports["default"] = _default;