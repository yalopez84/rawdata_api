import Material from '../models/Material';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getMaterials(req, res) {
    try {
        let result = {};
        result['Materials'] = await Material.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createMaterial(req, res) {
    const { denomination, description, uri, extension, dir } = req.body;
    try {
        let material = await Material.create({
            denomination,
            description,
            uri,
            extension,
            dir
        },
            {
                fields: ['denomination', 'description', 'uri', 'extension', 'dir']
            });
        if (material) {
            saveMaterialsRawData();
            return res.json({
                message: 'Material created successfully',
                data: material
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
export async function getOneMaterial(req, res) {
    try {
        const { id } = req.params;
        const material = await Material.findOne({
            where: {
                id
            }
        });
        res.json(material);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteMaterial(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Material.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveMaterialsRawData();
            res.json({
                message: 'Material deleted successfully',
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
export async function updateMaterial(req, res) {
    const { id } = req.params;
    const { denomination, description, uri, extension, dir } = req.body;
    try {
        const materials = await Material.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri', 'extension', 'dir'],
            where: { id }
        });
        if (materials.length > 0) {
            materials.forEach(async material => {
                await material.update({
                    denomination, description, uri, extension, dir
                })
                saveMaterialsRawData();
            });
        }

        return res.json({
            message: 'Material updated successfully',
            data: materials

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveMaterialsRawData() {
    try {
        const materials = await Material.findAll({});
        await writeFile("./files/raw_data/materials.json", JSON.stringify(materials));

    } catch (e) {
        console.log(e);
    }
}