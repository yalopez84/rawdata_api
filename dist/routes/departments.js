"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _department = require("../controllers/department.controller");

var router = (0, _express.Router)();
router.get('/', _department.getDepartments);
router.post('/', _department.createDepartment);
router.get('/:id', _department.getOneDepartment);
router["delete"]('/:id', _department.deleteDepartment);
router.put('/:id', _department.updateDepartment);
var _default = router;
exports["default"] = _default;