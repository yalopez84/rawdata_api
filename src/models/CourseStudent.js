import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseStudent = sequelize.define('courses_students', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    courseid: {
        type: Sequelize.INTEGER,
    },
    studentid: {
        type: Sequelize.INTEGER,
    }    
}, {
    timestamps: false
});

export default CourseStudent;