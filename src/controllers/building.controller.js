import Building from '../models/Building';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getBuildings(req, res) {
    try {
        let result = {};
        result['Buildings'] = await Building.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createBuilding(req, res) {
    const { denomination, description, uri } = req.body;
    try {
        let building = await Building.create({
            denomination,
            description,
            uri
        },
            {
                fields: ['denomination', 'description', 'uri']
            });
        if (building) {
            saveBuildingsRawData();
            return res.json({
                message: 'Building created successfully',
                data: building
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
export async function getOneBuilding(req, res) {
    try {
        const { id } = req.params;
        const building = await Building.findOne({
            where: {
                id
            }
        });
        res.json(building);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteBuilding(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Building.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveBuildingsRawData();
            res.json({
                message: 'Building deleted successfully',
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
export async function updateBuilding(req, res) {
    const { id } = req.params;
    const { denomination, description, uri } = req.body;
    try {
        const buildings = await Building.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri'],
            where: { id }
        });
        if (buildings.length > 0) {
            buildings.forEach(async building => {
                await building.update({
                    denomination, description, uri
                })
                saveBuildingsRawData();
            });
        }
       
        return res.json({
            message: 'Building updated successfully',
            data: buildings

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveBuildingsRawData() {
    try {
        const buildings = await Building.findAll({
            attibutes: ['id', 'denomination', 'description']
        });
        await writeFile("./files/raw_data/buildings.json", JSON.stringify(buildings));


    } catch (e) {
        console.log(e);
    }
}