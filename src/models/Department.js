import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from './Course';

const Department = sequelize.define('departments', {
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
Course.belongsTo(Department, { foreignKey: 'departmentid', sourceKey: 'id' });
Department.hasMany(Course, { foreignKey: 'departmentid', sourceKey: 'id' });

export default Department;