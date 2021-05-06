"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _server_config = _interopRequireDefault(require("../../config_files/server_config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var host = _server_config["default"].host;
var bd_name = _server_config["default"].bd_name;
var bd_user = _server_config["default"].bd_user;
var bd_user_pas = _server_config["default"].bd_user_pass;
var sequelize = new _sequelize["default"](bd_name, bd_user, bd_user_pas, {
  host: host,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;