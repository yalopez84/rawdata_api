import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from './Course';

const Teachingmethod = sequelize.define('teachingmethods', {
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
    uri_ac_uk: {
        type: Sequelize.TEXT
    },
}, {
    timestamps: false
});
Course.belongsTo(Teachingmethod, { foreignKey: 'teachingmethodid', sourceKey: 'id' });
Teachingmethod.hasMany(Course, { foreignKey: 'teachingmethodid', sourceKey: 'id' });
export default Teachingmethod;