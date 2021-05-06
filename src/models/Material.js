import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import CourseMaterial from "./CourseMaterial";

const Material = sequelize.define('materials', {
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
    uri:{
        type: Sequelize.TEXT
    },
    extension:{
        type: Sequelize.TEXT
    },
    dir:{
        type: Sequelize.TEXT
    }

}, {
    timestamps: false
});
CourseMaterial.belongsTo(Material, { foreignKey: 'materialid', sourceKey: 'id' });
Material.hasMany(CourseMaterial, { foreignKey: 'materialid', sourceKey: 'id' });
export default Material;