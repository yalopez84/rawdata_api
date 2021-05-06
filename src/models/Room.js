import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Course from "./Course";

const Room = sequelize.define('rooms', {
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
Course.belongsTo(Room, { foreignKey: 'roomid', sourceKey: 'id' });
Room.hasMany(Course, { foreignKey: 'roomid', sourceKey: 'id' });
export default Room;