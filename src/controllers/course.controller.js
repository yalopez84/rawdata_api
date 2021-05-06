import Course from '../models/Course';
import Language from '../models/Language';
import Subject from '../models/Subject';
import University from '../models/University';
import Faculty from '../models/Faculty';
import Department from '../models/Department';
import TeachingMethod from '../models/Teachingmethod';
import Building from '../models/Building';
import Room from '../models/Room';
import CourseTeacher from '../models/CourseTeacher';
import CourseMaterial from '../models/CourseMaterial';
import CourseStudent from '../models/CourseStudent';
import Teacher from '../models/Teacher';
import Material from '../models/Material';
import Student from '../models/Student';
import AssessmentMethod from '../models/AssessmentMethod';
import CourseAcademicTerm from '../models/CourseAcademicTerm';
import AcademicTerm from '../models/AcademicTerm';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getCourses(req, res) {
    try {
        let result = {};
        result['Courses'] = await Course.findAll({
            include: [Subject, Language, University, Faculty, Department, TeachingMethod, Building, Room, AssessmentMethod,
                { model: CourseTeacher, include: Teacher }, { model: CourseMaterial, include: Material },
                { model: CourseStudent, include: Student }, { model: CourseAcademicTerm, include: AcademicTerm }]
        });
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
export async function createCourse(req, res) {
    const { denomination, description, numberofcredits, level, weeklyhours, startdate, enddate, languageid, subjectid, universityid, facultyid, departmentid, teachingmethodid, buildingid, roomid, lonposition, latposition, country, assessmentmethodid, uri, teachinglevel, license } = req.body;
    try {
        const course = await Course.create({
            denomination, description, numberofcredits, level, weeklyhours, startdate, enddate, languageid, subjectid, universityid, facultyid, departmentid, teachingmethodid, buildingid, roomid, lonposition, latposition, country, assessmentmethodid, uri, teachinglevel, license
        },
            {
                fields: ['denomination', 'description', 'numberofcredits', 'level', 'weeklyhours', 'startdate', 'enddate', 'languageid', 'subjectid', 'universityid', 'facultyid', 'departmentid', 'teachingmethodid', 'buildingid', 'roomid', 'lonposition', 'latposition', 'country', 'assessmentmethodid', 'uri', 'teachinglevel', 'license']
            });
        if (course) {
            saveCoursesRawData();
            return res.json({
                message: 'Course created successfully',
                data: course
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
export async function getOneCourse(req, res) {
    try {
        const { id } = req.params;
        const course = await Course.findOne({
            where: {
                id
            }
        });
        res.json(course);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteCourse(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Course.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveCoursesRawData();
            res.json({
                message: 'Course deleted successfully',
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
export async function updateCourse(req, res) {
    const { id } = req.params;
    const { denomination, description, numberofcredits, level, weeklyhours, startdate, enddate, languageid, subjectid, universityid, facultyid, departmentid, teachingmethodid, buildingid, roomid, lonposition, latposition, country, assessmentmethodid, uri, teachinglevel, license } = req.body;
    try {
        const courses = await Course.findAll({
            attibutes: ['id', 'denomination', 'description', 'numberofcredits', 'level', 'weeklyhours', 'startdate', 'enddate', 'languageid', 'subjectid', 'universityid', 'facultyid', 'departmentid', 'teachingmethodid', 'buildingid', 'roomid', 'lonposition', 'latposition', 'country', 'assessmentmethodid', 'uri', 'teachinglevel', 'license'],
            where: { id }
        });
        if (courses.length > 0) {
            courses.forEach(async course => {
                await course.update({
                    denomination, description, numberofcredits, level, weeklyhours, startdate, enddate, languageid, subjectid, universityid, facultyid, departmentid, teachingmethodid, buildingid, roomid, lonposition, latposition, country, assessmentmethodid, uri, teachinglevel, license
                })
                saveCoursesRawData();
            });

        }
        return res.json({
            message: 'Courses updated successfully',
            data: courses

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveCoursesRawData() {
    try {
        const courses = await Course.findAll({
            include: [Subject, Language, University, Faculty, Department, TeachingMethod, Building, Room, AssessmentMethod,
                { model: CourseTeacher, include: Teacher }, { model: CourseMaterial, include: Material },
                { model: CourseStudent, include: Student }, { model: CourseAcademicTerm, include: AcademicTerm }]
        });
        await writeFile("./files/raw_data/courses.json", JSON.stringify(courses));

    } catch (e) {
        console.log(e);
    }
}