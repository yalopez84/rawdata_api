import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import CourseTeacher from "./CourseTeacher";

const Teacher = sequelize.define('teachers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    username: {
        type: Sequelize.TEXT
    },
    uri: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});
CourseTeacher.belongsTo(Teacher, { foreignKey: 'teacherid', sourceKey: 'id' });
Teacher.hasMany(CourseTeacher, { foreignKey: 'teacherid', sourceKey: 'id' });

export default Teacher;