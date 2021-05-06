
import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import CourseTeacher from "./CourseTeacher";
import CourseMaterial from "./CourseMaterial";
import CourseStudent from "./CourseStudent";
import CourseAcademicTerm from './CourseAcademicTerm';

const Course = sequelize.define('courses', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    denomination: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    numberofcredits: {
        type: Sequelize.INTEGER
    },
    level: {
        type: Sequelize.STRING
    },
    weeklyhours: {
        type: Sequelize.INTEGER
    },
    startdate: {
        type: Sequelize.DATE
    },
    enddate: {
        type: Sequelize.DATE
    },
    languageid: {
        type: Sequelize.INTEGER
    },
    subjectid: {
        type: Sequelize.INTEGER
    },
    universityid: {
        type: Sequelize.INTEGER
    },
    facultyid: {
        type: Sequelize.INTEGER
    },
    departmentid: {
        type: Sequelize.INTEGER
    },
    teachingmethodid: {
        type: Sequelize.INTEGER
    },
    buildingid: {
        type: Sequelize.INTEGER
    },
    roomid: {
        type: Sequelize.INTEGER
    },
    lonposition: {
        type: Sequelize.DOUBLE
    },
    latposition: {
        type: Sequelize.DOUBLE
    },
    country: {
        type: Sequelize.TEXT
    },
    assessmentmethodid: {
        type: Sequelize.INTEGER
    },
    uri:{
        type: Sequelize.TEXT
    },
    teachinglevel:{
        type: Sequelize.TEXT
    },
    license:{
        type: Sequelize.TEXT  
    }
}, {
    timestamps: false
});

CourseTeacher.belongsTo(Course, { foreignKey: 'courseid', sourceKey: 'id' });
Course.hasMany(CourseTeacher, { foreignKey: 'courseid', sourceKey: 'id' });

CourseMaterial.belongsTo(Course, { foreignKey: 'courseid', sourceKey: 'id' });
Course.hasMany(CourseMaterial, { foreignKey: 'courseid', sourceKey: 'id' });

CourseStudent.belongsTo(Course, { foreignKey: 'courseid', sourceKey: 'id' });
Course.hasMany(CourseStudent, { foreignKey: 'courseid', sourceKey: 'id' });

CourseAcademicTerm.belongsTo(Course, { foreignKey: 'courseid', sourceKey: 'id' });
Course.hasMany(CourseAcademicTerm, { foreignKey: 'courseid', sourceKey: 'id' });

export default Course;