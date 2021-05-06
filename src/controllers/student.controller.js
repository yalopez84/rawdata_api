import Student from '../models/Student';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getStudents(req, res) {
    try {
        let result = {};
        result['Students'] = await Student.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createStudent(req, res) {
    const { name, username, faculty, uri } = req.body;
    try {
        let newStudent = await Student.create({
            name,
            username,
            faculty,
            uri
        },
            {
                fields: ['name', 'username', 'faculty', 'uri']
            });
        if (newStudent) {
            saveStudentsRawData();
            return res.json({
                message: 'Student created successfully',
                data: newStudent
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
export async function getOneStudent(req, res) {
    try {
        const { id } = req.params;
        const student = await Student.findOne({
            where: {
                id
            }
        });
        res.json(student);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteStudent(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Student.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveStudentsRawData();
            res.json({
                message: 'Student deleted successfully',
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
export async function updateStudent(req, res) {
    const { id } = req.params;
    const { name, username, faculty, uri } = req.body;
    try {
        const students = await Student.findAll({
            attibutes: ['id', 'username', 'faculty', 'uri'],
            where: { id }
        });
        if (students.length > 0) {
            students.forEach(async student => {
                await student.update({
                    name, username, faculty, uri
                })
                saveStudentsRawData();
            });
        }

        return res.json({
            message: 'Student updated successfully',
            data: students

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveStudentsRawData() {
    try {
        const students = await Student.findAll({
            attibutes: ['id', 'name', 'username', 'faculty', 'uri']
        });
        await writeFile("./files/raw_data/students.json", JSON.stringify(students));

    } catch (e) {
        console.log(e);
    }
}