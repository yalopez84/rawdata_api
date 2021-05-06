import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseAcademicTerm = sequelize.define('courses_academicterms', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    courseid: {
        type: Sequelize.INTEGER,
    },
    academictermid: {
        type: Sequelize.INTEGER,
    }    
}, {
    timestamps: false
});

export default CourseAcademicTerm;