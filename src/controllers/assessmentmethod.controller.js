import AssessmentMethod from '../models/AssessmentMethod';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getAssessmentmethods(req, res) {
    try {
        let result = {};
        result['Assessment Methods'] = await AssessmentMethod.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createAssessmentmethod(req, res) {
    const { denomination, description, uri } = req.body;
    try {
        let assessmentmethod = await AssessmentMethod.create({
            denomination,
            description,
            uri
        },
            {
                fields: ['denomination', 'description', 'uri']
            });
        if (assessmentmethod) {
            saveAssessmentMethodsRawData();
            return res.json({
                message: 'Assessmentmethod created successfully',
                data: assessmentmethod
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
export async function getOneAssessmentmethod(req, res) {
    try {
        const { id } = req.params;
        const assessmentmethod = await AssessmentMethod.findOne({
            where: {
                id
            }
        });
        res.json(assessmentmethod);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteAssessmentmethod(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await AssessmentMethod.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveAssessmentMethodsRawData();
            res.json({
                message: 'Assessmentmethod deleted successfully',
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
export async function updateAssessmentmethod(req, res) {
    const { id } = req.params;
    const { denomination, description, uri } = req.body;
    try {
        const assessmentmethods = await AssessmentMethod.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri'],
            where: { id }
        });
        if (assessmentmethods.length > 0) {
            assessmentmethods.forEach(async assessmentmethod => {
                await assessmentmethod.update({
                    denomination, description, uri
                })
                saveAssessmentMethodsRawData();
            });
        }

        return res.json({
            message: 'Assessmentmethods updated successfully',
            data: assessmentmethods

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveAssessmentMethodsRawData() {
    try {
        const assessmentmethods = await AssessmentMethod.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri']
        });
        await writeFile("./files/raw_data/assessmentmethods.json", JSON.stringify(assessmentmethods));

    } catch (e) {
        console.log(e);
    }
}