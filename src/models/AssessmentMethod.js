import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from "./Course";

const AssessmentMethod = sequelize.define('assessmentmethods', {
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

Course.belongsTo(AssessmentMethod, { foreignKey: 'assessmentmethodid', sourceKey: 'id' });
AssessmentMethod.hasMany(Course, { foreignKey: 'assessmentmethodid', sourceKey: 'id' });
export default AssessmentMethod;