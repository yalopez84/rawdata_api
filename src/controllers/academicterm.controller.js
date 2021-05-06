import AcademicTerm from '../models/AcademicTerm';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getAcademicTerms(req, res) {
    try {
        let result = {};
        result['Academic Terms'] = await AcademicTerm.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createAcademicTerm(req, res) {
    const { denomination, description, uci_uri } = req.body;

    try {
        let academicTerm = await AcademicTerm.create({
            denomination,
            description,
            uci_uri
        },
            {
                fields: ['denomination', 'description', 'uci_uri']
            });
        if (academicTerm) {
            saveAcademictermsRawData();
            return res.json({
                message: 'AcademicTerm created successfully',
                data: academicTerm
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
export async function getOneAcademicTerm(req, res) {
    try {
        const { id } = req.params;
        const academicTerm = await AcademicTerm.findOne({
            where: {
                id
            }
        });
        res.json(academicTerm);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteAcademicTerm(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await AcademicTerm.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveAcademictermsRawData();
            res.json({
                message: 'AcademicTerm deleted successfully',
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
export async function updateAcademicTerm(req, res) {
    const { id } = req.params;
    const { denomination, description, uci_uri } = req.body;
    try {
        const academicTerms = await AcademicTerm.findAll({
            attibutes: ['id', 'denomination', 'description', 'uci_uri'],
            where: { id }
        });
        if (academicTerms.length > 0) {
            academicTerms.forEach(async academicTerm => {
                await academicTerm.update({
                    denomination, description, uci_uri
                })
                saveAcademictermsRawData();
            });
        }

        return res.json({
            message: 'AcademicTerm updated successfully',
            data: academicTerms

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveAcademictermsRawData() {
    try {
        let academicterms = await AcademicTerm.findAll({});
        await writeFile("./files/raw_data/academicterms.json", JSON.stringify(academicterms));

    } catch (e) {
        console.log(e);
    }
}