import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from "./Course";

const University = sequelize.define('universities', {
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
    },  
    uri_red  : {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});
Course.belongsTo(University, { foreignKey: 'universityid', sourceKey: 'id' });
University.hasMany(Course, { foreignKey: 'universityid', sourceKey: 'id' });

export default University;