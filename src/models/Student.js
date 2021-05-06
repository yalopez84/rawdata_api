import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import CourseStudent from "./CourseStudent";
const Student = sequelize.define('students', {
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
    faculty: {
        type: Sequelize.TEXT
    },
    uri: {
        type: Sequelize.TEXT
    },
}, {
    timestamps: false
});
CourseStudent.belongsTo(Student, { foreignKey: 'studentid', sourceKey: 'id' });
Student.hasMany(CourseStudent, { foreignKey: 'studentid', sourceKey: 'id' });
export default Student;