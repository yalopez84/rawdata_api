import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import CourseAcademicTerm from "./CourseAcademicTerm";

const AcademicTerm = sequelize.define('academicterms', {
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
    uci_uri:{
        type:Sequelize.TEXT
    }   
}, {
    timestamps: false
});

CourseAcademicTerm.belongsTo(AcademicTerm, { foreignKey: 'academictermid', sourceKey: 'id' });
AcademicTerm.hasMany(CourseAcademicTerm, { foreignKey: 'academictermid', sourceKey: 'id' });
export default AcademicTerm;