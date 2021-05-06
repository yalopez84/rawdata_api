import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from "./Course";

const Language = sequelize.define('languages', {
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

Course.belongsTo(Language, { foreignKey: 'languageid', sourceKey: 'id' });
Language.hasMany(Course, { foreignKey: 'languageid', sourceKey: 'id' });

export default Language;