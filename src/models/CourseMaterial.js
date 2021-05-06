import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseMaterial = sequelize.define('courses_materials', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    courseid: {
        type: Sequelize.INTEGER,
    },
    materialid: {
        type: Sequelize.INTEGER,
    }    
}, {
    timestamps: false
});

export default CourseMaterial;