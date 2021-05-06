
import Teacher from '../models/Teacher';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getTeachers(req, res) {
    try {
        let result = {};
        result['Teachers'] = await Teacher.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function createTeacher(req, res) {
    const { name, username, uri } = req.body;
    try {
        let teacher = await Teacher.create({
            name,
            username,
            uri
        },
            {
                fields: ['name', 'username', 'uri']
            });
        if (teacher) {
            saveTeachersRawData();
            return res.json({
                message: 'Teacher created successfully',
                data: teacher
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
export async function getOneTeacher(req, res) {
    try {
        const { id } = req.params;
        const teacher = await Teacher.findOne({
            where: {
                id
            }
        });
        res.json(teacher);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteTeacher(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Teacher.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveTeachersRawData();
            res.json({
                message: 'Teacher deleted successfully',
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
export async function updateTeacher(req, res) {
    const { id } = req.params;
    const { name, username, uri } = req.body;
    try {
        const teachers = await Teacher.findAll({
            attibutes: ['id', 'name', 'username', 'uri'],
            where: { id }
        });
        if (teachers.length > 0) {
            teachers.forEach(async teacher => {
                await teacher.update({
                    name, username, uri
                })
                saveTeachersRawData();
            });
        }
       
        return res.json({
            message: 'Teacher updated successfully',
            data: teachers

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveTeachersRawData() {
    try {
        const teachers = await Teacher.findAll({
            attibutes: ['id', 'name', 'username', 'uri']
        });
        await writeFile("./files/raw_data/teachers.json", JSON.stringify(teachers));

    } catch (e) {
        console.log(e);
    }
}