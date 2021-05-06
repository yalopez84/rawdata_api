import CourseAcademicTerm from '../models/CourseAcademicTerm';
import Course from '../models/Course';
import AcademicTerm from '../models/AcademicTerm';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getCoursesAcademicTerms(req, res) {
    try {
        let result = {};
        result['Courses AcademicTerms'] = await CourseAcademicTerm.findAll({ include: [Course, AcademicTerm] });
        res.status(200).json(result);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function createCourseAcademicTerm(req, res) {
    const { courseid, academictermid } = req.body;
    try {
        let courseacademicterm = await CourseAcademicTerm.create({
            courseid,
            academictermid
        },
            {
                fields: ['courseid', 'academictermid']
            });
        if (courseacademicterm) {
            await saveCoursesAcademicTermsRawData();
            return res.json({
                message: 'Courseacademicterm created successfully',
                data: courseacademicterm
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
export async function getOneCourseAcademicTerm(req, res) {
    try {
        const { id } = req.params;
        const courseacademicterm = await CourseAcademicTerm.findOne({
            where: {
                id
            }
        });
        res.json(courseacademicterm);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteCourseAcademicTerm(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await CourseAcademicTerm.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            await saveCoursesAcademicTermsRawData();
            res.json({
                message: 'CourseAcademicTerm deleted successfully',
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
export async function updateCourseAcademicTerm(req, res) {
    const { id } = req.params;
    const { courseid, academictermid } = req.body;
    try {
        const coursesacademicterms = await CourseAcademicTerm.findAll({
            attibutes: ['id', 'courseid', 'academictermid'],
            where: { id }
        });
        if (coursesacademicterms.length > 0) {
            coursesacademicterms.forEach(async courseacademicterm => {
                await courseacademicterm.update({
                    courseid, academictermid
                })
                await saveCoursesAcademicTermsRawData();
            });
        }
        return res.json({
            message: 'Academicterm updated successfully',
            data: coursesacademicterms

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveCoursesAcademicTermsRawData() {
    try {
        let coursesacademicterms = await CourseAcademicTerm.findAll({ include: [Course, AcademicTerm] });
        await writeFile("./files/raw_data/coursesacademicterms.json", JSON.stringify(coursesacademicterms));

    } catch (e) {
        console.log(e);
    }
}