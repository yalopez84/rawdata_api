import Room from '../models/Room';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getRooms(req, res) {
    try {
        let result = {};
        result['Rooms'] = await Room.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createRoom(req, res) {
    const { denomination, description, uri } = req.body;
    try {
        let room = await Room.create({
            denomination,
            description,
            uri
        },
            {
                fields: ['denomination', 'description', 'uri']
            });
        if (room) {
            saveRoomsRawData();
            return res.json({
                message: 'Room created successfully',
                data: room
            });

        }

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
export async function getOneRoom(req, res) {
    try {
        const { id } = req.params;
        const room = await Room.findOne({
            where: {
                id
            }
        });
        res.json(room);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteRoom(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Room.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveRoomsRawData();
            res.json({
                message: 'Room deleted successfully',
                count: 'deleteRowCount'
            })

        }
    } catch (e) {
        res.json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function updateRoom(req, res) {
    const { id } = req.params;
    const { denomination, description, uri } = req.body;
    try {
        const rooms = await Room.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri'],
            where: { id }
        });
        if (rooms.length > 0) {
            rooms.forEach(async room => {
                await room.update({
                    denomination, description, uri
                })
                saveRoomsRawData();
            });
        }
       
        return res.json({
            message: 'Room updated successfully',
            data: rooms

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveRoomsRawData() {
    try {
        const rooms = await Room.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri']
        });
        await writeFile("./files/raw_data/rooms.json", JSON.stringify(rooms));

    } catch (e) {
        console.log(e);
    }
}