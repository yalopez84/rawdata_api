import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from "./Course";

const Building = sequelize.define('buildings', {
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
Course.belongsTo(Building, { foreignKey: 'buildingid', sourceKey: 'id' });
Building.hasMany(Course, { foreignKey: 'buildingid', sourceKey: 'id' });
export default Building;