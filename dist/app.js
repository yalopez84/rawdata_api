"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _server_config = _interopRequireDefault(require("../config_files/server_config"));

var _universities = _interopRequireDefault(require("./routes/universities"));

var _teachingmethods = _interopRequireDefault(require("./routes/teachingmethods"));

var _teachers = _interopRequireDefault(require("./routes/teachers"));

var _subjects = _interopRequireDefault(require("./routes/subjects"));

var _students = _interopRequireDefault(require("./routes/students"));

var _rooms = _interopRequireDefault(require("./routes/rooms"));

var _materials = _interopRequireDefault(require("./routes/materials"));

var _languages = _interopRequireDefault(require("./routes/languages"));

var _faculties = _interopRequireDefault(require("./routes/faculties"));

var _departments = _interopRequireDefault(require("./routes/departments"));

var _buildings = _interopRequireDefault(require("./routes/buildings"));

var _assessmentmethods = _interopRequireDefault(require("./routes/assessmentmethods"));

var _academicterms = _interopRequireDefault(require("./routes/academicterms"));

var _courses = _interopRequireDefault(require("./routes/courses"));

var _coursesteachers = _interopRequireDefault(require("./routes/coursesteachers"));

var _coursesmaterials = _interopRequireDefault(require("./routes/coursesmaterials"));

var _coursesacademicterms = _interopRequireDefault(require("./routes/coursesacademicterms"));

var _coursesstudents = _interopRequireDefault(require("./routes/coursesstudents"));

var _home = _interopRequireDefault(require("./routes/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var hostname = _server_config["default"].hostname;
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());
app.use('/api/universities', _universities["default"]);
app.use('/api/teachingmethods', _teachingmethods["default"]);
app.use('/api/teachers', _teachers["default"]);
app.use('/api/subjects', _subjects["default"]);
app.use('/api/students', _students["default"]);
app.use('/api/rooms', _rooms["default"]);
app.use('/api/materials', _materials["default"]);
app.use('/api/languages', _languages["default"]);
app.use('/api/faculties', _faculties["default"]);
app.use('/api/departments', _departments["default"]);
app.use('/api/buildings', _buildings["default"]);
app.use('/api/assessmentmethods', _assessmentmethods["default"]);
app.use('/api/academicTerms', _academicterms["default"]);
app.use('/api/courses', _courses["default"]);
app.use('/api/coursesteachers', _coursesteachers["default"]);
app.use('/api/coursesmaterials', _coursesmaterials["default"]);
app.use('/api/coursesacademicterms', _coursesacademicterms["default"]);
app.use('/api/coursesstudents', _coursesstudents["default"]);
app.use('/api/', _home["default"]);
app.use(function (req, res) {
  res.status(404).write("Page not found, try http://".concat(hostname, "/api/"));
  res.end();
});
var _default = app;
exports["default"] = _default;