import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from "./Course";

const Subject = sequelize.define('subjects', {
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
    code_acm_ccs: {
        type: Sequelize.TEXT
    },
    uci_uri: {
        type: Sequelize.TEXT
    },
    ou_cso_uri: {
        type: Sequelize.TEXT
    },
}, {
    timestamps: false
});
Course.belongsTo(Subject, { foreignKey: 'subjectid', sourceKey: 'id' });
Subject.hasMany(Course, { foreignKey: 'subjectid', sourceKey: 'id' });

export default Subject;