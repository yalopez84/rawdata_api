import University from '../models/University';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getUniversities(req, res) {
    try {
        let result = {};
        result['Universities'] = await University.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createUniversity(req, res) {
    const { denomination, description, uri, uri_red } = req.body;
    try {
        let newUniversity = await University.create({
            denomination,
            description,
            uri,
            uri_red
        },
            {
                fields: ['denomination', 'description', 'uri', 'uri_red']
            });
        if (newUniversity) {
            saveUniversitiesRawData();
            return res.json({
                message: 'University created successfully',
                data: newUniversity
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
export async function getOneUniversity(req, res) {
    try {
        const { id } = req.params;
        const university = await University.findOne({
            where: {
                id
            }
        });
        res.json(university);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteUniversity(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await University.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveUniversitiesRawData();
            res.json({
                message: 'University deleted successfully',
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
export async function updateUniversity(req, res) {
    const { id } = req.params;
    const { denomination, description, uri, uri_red } = req.body;
    try {
        const universities = await University.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri', 'uri_red'],
            where: { id }
        });
        if (universities.length > 0) {
            universities.forEach(async university => {
                await university.update({
                    denomination, description, uri, uri_red
                })
                saveUniversitiesRawData();
            });
        }
       
        return res.json({
            message: 'University updated successfully',
            data: universities

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveUniversitiesRawData() {
    try {
        const universities = await University.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri','uri_red']
        });
        await writeFile("./files/raw_data/universities.json", JSON.stringify(universities));

    } catch (e) {
        console.log(e);
    }
}