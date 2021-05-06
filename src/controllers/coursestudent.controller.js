import CourseStudent from '../models/CourseStudent';
import Course from '../models/Course';
import Student from '../models/Student';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getCoursesStudents(req, res) {
    try {
        let coursesstudents = await CourseStudent.findAll({ include:[Course, Student]});
        res.status(200).json({
            data: coursesstudents
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
export async function createCourseStudent(req, res) {
    const { courseid, studentid } = req.body;
    try {
        let coursestudent = await CourseStudent.create({
            courseid, 
            studentid
        },
            {
                fields: ['courseid', 'studentid']
            });
        if (coursestudent) {
            await saveCoursesStudentsRawData();
            return res.json({
                message: 'Coursestudent created successfully',
                data: coursestudent
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
export async function getOneCourseStudent(req, res) {
    try {
        const { id } = req.params;
        const coursestudent = await CourseStudent.findOne({
            where: {
                id
            }
        });
        res.json(coursestudent);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteCourseStudent(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await CourseStudent.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            await saveCoursesStudentsRawData();
            res.json({
                message: 'Coursestudent deleted successfully',
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
export async function updateCourseStudent(req, res) {
    const { id } = req.params;
    const { courseid, studentid } = req.body;
    try {
        const coursesstudents = await CourseStudent.findAll({
            attibutes: ['id', 'courseid', 'studentid'],
            where: { id }
        });
        if (coursesstudents.length > 0) {
            coursesstudents.forEach(async coursestudent => {
                await coursestudent.update({
                    courseid, studentid
                })
                await saveCoursesStudentsRawData();
            });
        }
        return res.json({
            message: 'Coursestudent updated successfully',
            data: coursesstudents

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveCoursesStudentsRawData() {
    try {
        let coursesstudents = await CourseStudent.findAll({ include: [Course, Student]});
        await writeFile("./files/raw_data/coursesstudents.json", JSON.stringify(coursesstudents));

    } catch (e) {
        console.log(e);
    }
}