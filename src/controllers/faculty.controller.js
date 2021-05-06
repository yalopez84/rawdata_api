import Faculty from '../models/Faculty';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getFaculties(req, res) {
    try {
        let result = {};
        result['Faculties'] = await Faculty.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createFaculty(req, res) {
    const { denomination, description, uri } = req.body;
    try {
        let newFaculty = await Faculty.create({
            denomination,
            description,
            uri
        },
            {
                fields: ['denomination', 'description', 'uri']
            });
        if (newFaculty) {
            saveFacultiesRawData();
            return res.json({
                message: 'Faculty created successfully',
                data: newFaculty
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
export async function getOneFaculty(req, res) {
    try {
        const { id } = req.params;
        const faculty = await Faculty.findOne({
            where: {
                id
            }
        });
        res.json(faculty);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteFaculty(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Faculty.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveFacultiesRawData();
            res.json({
                message: 'Faculty deleted successfully',
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
export async function updateFaculty(req, res) {
    const { id } = req.params;
    const { denomination, description, uri } = req.body;
    try {
        const faculties = await Faculty.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri'],
            where: { id }
        });
        if (faculties.length > 0) {
            faculties.forEach(async faculty => {
                await faculty.update({
                    denomination, description, uri
                })
                saveFacultiesRawData();
            });
        }

        return res.json({
            message: 'Faculty updated successfully',
            data: faculties

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveFacultiesRawData() {
    try {
        const faculties = await Faculty.findAll({});
        await writeFile("./files/raw_data/faculties.json", JSON.stringify(faculties));

    } catch (e) {
        console.log(e);
    }
}