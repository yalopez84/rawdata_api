import Subject from '../models/Subject';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getSubjects(req, res) {
    try {
        let result = {};
        result['Subjects'] = await Subject.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createSubject(req, res) {
    const { denomination, description, code_acm_ccs, uci_uri, ou_cso_uri } = req.body;
    try {
        let newSubject = await Subject.create({
            denomination,
            description,
            code_acm_ccs,
            uci_uri,
            ou_cso_uri
        },
            {
                fields: ['denomination', 'description', 'code_acm_ccs', 'uci_uri', 'ou_cso_uri']
            });
        if (newSubject) {
            saveSubjectsRawData();
            return res.json({
                message: 'Subject created successfully',
                data: newSubject
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
export async function getOneSubject(req, res) {
    try {
        const { id } = req.params;
        const subject = await Subject.findOne({
            where: {
                id
            }
        });
        res.json(subject);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteSubject(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Subject.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveSubjectsRawData();
            res.json({
                message: 'Subject deleted successfully',
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
export async function updateSubject(req, res) {
    const { id } = req.params;
    const { denomination, description, code_acm_ccs, uci_uri, ou_cso_uri } = req.body;
    try {
        const subjects = await Subject.findAll({
            attibutes: ['id', 'denomination', 'description', 'code_acm_ccs', 'uci_uri', 'ou_cso_uri'],
            where: { id }
        });
        if (subjects.length > 0) {
            subjects.forEach(async subject => {
                await subject.update({
                    denomination, description, code_acm_ccs, uci_uri, ou_cso_uri
                })
                saveSubjectsRawData();
            });

        }
        return res.json({
            message: 'Subjects updated successfully',
            data: subjects

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveSubjectsRawData() {
    try {
        const subjects = await Subject.findAll({});
        await writeFile("./files/raw_data/subjects.json", JSON.stringify(subjects));

    } catch (e) {
        console.log(e);
    }
}