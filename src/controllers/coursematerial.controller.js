import CourseMaterial from '../models/CourseMaterial';
import Material from '../models/Material';
import Course from '../models/Course';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getCoursesMaterials(req, res) {
    try {
        let coursesmaterials = await CourseMaterial.findAll({ include:[Course, Material]});
        res.status(200).json({
            data: coursesmaterials
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function createCourseMaterial(req, res) {
    const { courseid, materialid } = req.body;
    try {
        let coursematerial = await CourseMaterial.create({
            courseid, 
            materialid
        },
            {
                fields: ['courseid', 'materialid']
            });
        if (coursematerial) {
            await saveCoursesMaterialsRawData();
            return res.json({
                message: 'CourseMaterial created successfully',
                data: coursematerial
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
export async function getOneCourseMaterial(req, res) {
    try {
        const { id } = req.params;
        const coursematerial = await CourseMaterial.findOne({
            where: {
                id
            }
        });
        res.json(coursematerial);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteCourseMaterial(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await CourseMaterial.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            await saveCoursesMaterialsRawData();
            res.json({
                message: 'CourseMaterial deleted successfully',
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
export async function updateCourseMaterial(req, res) {
    const { id } = req.params;
    const { courseid, materialid } = req.body;
    try {
        const coursesmaterials = await CourseMaterial.findAll({
            attibutes: ['id', 'courseid', 'materialid'],
            where: { id }
        });
        if (coursesmaterials.length > 0) {
            coursesmaterials.forEach(async coursematerial => {
                await coursematerial.update({
                    courseid, materialid
                })
                await saveCoursesMaterialsRawData();
            });
        }
        return res.json({
            message: 'Coursematerial updated successfully',
            data: coursesmaterials

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveCoursesMaterialsRawData() {
    try {
        let coursesmaterials = await CourseMaterial.findAll({ include: [Course, Material]});
        await writeFile("./files/raw_data/coursesmaterials.json", JSON.stringify(coursesmaterials));

    } catch (e) {
        console.log(e);
    }
}