import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from "./Course";

const Faculty = sequelize.define('faculties', {
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
    uri: {
        type: Sequelize.TEXT
    }  
}, {
    timestamps: false
});
Course.belongsTo(Faculty, { foreignKey: 'facultyid', sourceKey: 'id' });
Faculty.hasMany(Course, { foreignKey: 'facultyid', sourceKey: 'id' });

export default Faculty;