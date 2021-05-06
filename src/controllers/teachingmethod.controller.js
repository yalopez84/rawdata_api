import Teachingmethod from '../models/Teachingmethod';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getTeachingmethods(req, res) {
    try {
        let result = {};
        result['Teaching Methods'] = await Teachingmethod.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createTeachingmethod(req, res) {
    const { denomination, description, uri, uri_ac_uk } = req.body;
    try {
        let teachingmethod = await Teachingmethod.create({
            denomination,
            description,
            uri,
            uri_ac_uk
        },
            {
                fields: ['denomination', 'description', 'uri', 'uri_ac_uk']
            });
        if (teachingmethod) {
            saveTeachingmethodsRawData();
            return res.json({
                message: 'Teachingmethod created successfully',
                data: teachingmethod
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
export async function getOneTeachingmethod(req, res) {
    try {
        const { id } = req.params;
        const teachingmethod = await Teachingmethod.findOne({
            where: {
                id
            }
        });
        res.json(teachingmethod);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteTeachingmethod(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Teachingmethod.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveTeachingmethodsRawData();
            res.json({
                message: 'Teachingmethod deleted successfully',
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
export async function updateTeachingmethod(req, res) {
    const { id } = req.params;
    const { denomination, description, uri, uri_ac_uk } = req.body;
    try {
        const teachingmethods = await Teachingmethod.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri', 'uri_ac_uk'],
            where: { id }
        });
        if (teachingmethods.length > 0) {
            teachingmethods.forEach(async teachingmethod => {
                await teachingmethod.update({
                    denomination, description, uri, uri_ac_uk
                })
                saveTeachingmethodsRawData();
            });
        }
       
        return res.json({
            message: 'Teachingmethod updated successfully',
            data: teachingmethods

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveTeachingmethodsRawData() {
    try {
        const teachingmethods = await Teachingmethod.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri', 'uri_ac_uk']
        });
        await writeFile("./files/raw_data/teachingmethods.json", JSON.stringify(teachingmethods));

    } catch (e) {
        console.log(e);
    }
}