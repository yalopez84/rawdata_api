"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _teachingmethod = require("../controllers/teachingmethod.controller");

var router = (0, _express.Router)();
router.get('/', _teachingmethod.getTeachingmethods);
router.post('/', _teachingmethod.createTeachingmethod);
router.get('/:id', _teachingmethod.getOneTeachingmethod);
router["delete"]('/:id', _teachingmethod.deleteTeachingmethod);
router.put('/:id', _teachingmethod.updateTeachingmethod);
var _default = router;
exports["default"] = _default;