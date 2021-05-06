import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseTeacher = sequelize.define('courses_teachers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    courseid: {
        type: Sequelize.INTEGER,
    },
    teacherid: {
        type: Sequelize.INTEGER,
    }    
}, {
    timestamps: false
});

export default CourseTeacher;