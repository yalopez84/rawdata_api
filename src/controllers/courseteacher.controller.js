import CourseTeacher from '../models/CourseTeacher';
import Course from '../models/Course';
import Teacher from '../models/Teacher';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);


export async function getCoursesTeachers(req, res) {
    try {
        let coursesteachers = await CourseTeacher.findAll({include: [Course, Teacher]});
        res.status(200).json({
            data: coursesteachers
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
export async function createCourseTeacher(req, res) {
    const { courseid, teacherid } = req.body;
    try {
        let courseteacher = await CourseTeacher.create({
            courseid,
            teacherid
        },
            {
                fields: ['courseid', 'teacherid']
            });
        if (courseteacher) {
            await saveCoursesTeachersRawData();
            return res.json({
                message: 'CourseTeacher created successfully',
                data: courseteacher
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
export async function getOneCourseTeacher(req, res) {
    try {
        const { id } = req.params;
        const courseteacher = await CourseTeacher.findOne({
            where: {
                id
            }
        });
        res.json(courseteacher);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteCourseTeacher(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await CourseTeacher.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            await saveCoursesTeachersRawData();
            res.json({
                message: 'CourseTeacher deleted successfully',
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
export async function updateCourseTeacher(req, res) {
    const { id } = req.params;
    const { courseid, teacherid } = req.body;
    try {
        const coursesteachers = await CourseTeacher.findAll({
            attibutes: ['id', 'courseid', 'teacherid'],
            where: { id }
        });
        if (coursesteachers.length > 0) {
            coursesteachers.forEach(async courseteacher => {
                await courseteacher.update({
                    courseid, teacherid
                })
                await saveCoursesTeachersRawData();
            });
        }
        return res.json({
            message: 'CourseTeacher updated successfully',
            data: coursesteachers

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveCoursesTeachersRawData() {
    try {
        let coursesteachers = await CourseTeacher.findAll({ include: [Course, Teacher]});
        await writeFile("./files/raw_data/coursesteachers.json", JSON.stringify(coursesteachers));

    } catch (e) {
        console.log(e);
    }
}