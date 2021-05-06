"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _room = require("../controllers/room.controller");

var router = (0, _express.Router)();
router.get('/', _room.getRooms);
router.post('/', _room.createRoom);
router.get('/:id', _room.getOneRoom);
router["delete"]('/:id', _room.deleteRoom);
router.put('/:id', _room.updateRoom);
var _default = router;
exports["default"] = _default;