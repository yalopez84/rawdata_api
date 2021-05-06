import Room from '../models/Room';
import University from '../models/University';
import Teachingmethod from '../models/Teachingmethod';
import Teacher from '../models/Teacher';
import Subject from '../models/Subject';
import Student from '../models/Student';
import Material from '../models/Material';
import Language from '../models/Language';
import Faculty from '../models/Faculty';
import Department from '../models/Department';
import Course from '../models/Course';
import Building from '../models/Building';
import AssessmentMethod from '../models/AssessmentMethod';
import AcademicTerm from '../models/AcademicTerm';
import CourseTeacher from '../models/CourseTeacher';
import CourseMaterial from '../models/CourseMaterial';
import CourseStudent from '../models/CourseStudent';
import CourseAcademicTerm from '../models/CourseAcademicTerm';
import serverConfig from '../../config_files/server_config';
const hostname = serverConfig.hostname;
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function saveOther(req, res) {

    saveUniversitiesRawData();
    saveTeachingmethodsRawData();
    saveTeachersRawData();
    saveSubjectsRawData();
    saveStudentsRawData();
    saveRoomsRawData();
    saveMaterialsRawData();
    saveLanguagesRawData();
    saveFacultiesRawData();
    saveDepartmentsRawData();
    saveBuildingsRawData();
    saveAssessmentMethodsRawData();
    saveAcademictermsRawData();

    let c = {};
    c['Datasets of raw data'] = getDatasets();
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(c);
    res.end();
}
export async function saveCourses(req, res) {

    saveCoursesRawData();

    let c = {};
    c['Datasets of raw data'] = getDatasets();
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(c);
    res.end();
}
export async function getHome(req, res) {
    let c = {};
    c['Datasets of raw data'] = getDatasets();
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(c);
    res.end();
}
async function saveUniversitiesRawData() {
    try {
        const universities = await University.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri', 'uri_red']
        });
        await writeFile("./files/raw_data/universities.json", JSON.stringify(universities));

    } catch (e) {
        console.log(e);
    }
}
async function saveTeachingmethodsRawData() {
    try {
        const teachingmethods = await Teachingmethod.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri', 'uri_ac_uk']
        });
        await writeFile("./files/raw_data/teachingmethods.json", JSON.stringify(teachingmethods));

    } catch (e) {
        console.log(e);
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
async function saveSubjectsRawData() {
    try {
        const subjects = await Subject.findAll({});
        await writeFile("./files/raw_data/subjects.json", JSON.stringify(subjects));

    } catch (e) {
        console.log(e);
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
async function saveRoomsRawData() {
    try {
        const rooms = await Room.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri']
        });
        await writeFile("./files/raw_data/rooms.json", JSON.stringify(rooms));

    } catch (e) {
        console.log(e);
    }
}
async function saveMaterialsRawData() {
    try {
        const materials = await Material.findAll({});
        await writeFile("./files/raw_data/materials.json", JSON.stringify(materials));

    } catch (e) {
        console.log(e);
    }
}
async function saveLanguagesRawData() {
    try {
        let languages = await Language.findAll({});

        await writeFile("./files/raw_data/languages.json", JSON.stringify(languages));

    } catch (e) {
        console.log(e);
    }
}
async function saveFacultiesRawData() {
    try {
        const faculties = await Faculty.findAll({});
        await writeFile("./files/raw_data/faculties.json", JSON.stringify(faculties));

    } catch (e) {
        console.log(e);
    }
}
async function saveDepartmentsRawData() {
    try {
        const departments = await Department.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri']
        });
        await writeFile("./files/raw_data/departments.json", JSON.stringify(departments));

    } catch (e) {
        console.log(e);
    }
}
async function saveBuildingsRawData() {
    try {
        const buildings = await Building.findAll({
            attibutes: ['id', 'denomination', 'description']
        });
        await writeFile("./files/raw_data/buildings.json", JSON.stringify(buildings));


    } catch (e) {
        console.log(e);
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
async function saveAcademictermsRawData() {
    try {
        let academicterms = await AcademicTerm.findAll({});
        await writeFile("./files/raw_data/academicterms.json", JSON.stringify(academicterms));

    } catch (e) {
        console.log(e);
    }
}
async function saveCoursesRawData() {
    try {
        let courses = await Course.findAll({
            include: [Subject, Language, University, Faculty, Department, Teachingmethod, Building, Room, AssessmentMethod,
                { model: CourseTeacher, include: Teacher }, { model: CourseMaterial, include: Material },
                { model: CourseStudent, include: Student }, { model: CourseAcademicTerm, include: AcademicTerm }]
        });
        await writeFile("./files/raw_data/courses.json", JSON.stringify(courses));

    } catch (e) {
        console.log(e);
    }
}
function getDatasets() {

    let datasetsrawdata = [];
    let universitiesDataset = {};
    universitiesDataset['name'] = 'Universities';
    universitiesDataset['homepage'] = `http://${hostname}/api/universities`;
    datasetsrawdata.push(universitiesDataset);

    let teachingmethodsDataset = {};
    teachingmethodsDataset['name'] = 'Teaching Methods';
    teachingmethodsDataset['homepage'] = `http://${hostname}/api/teachingmethods`;
    datasetsrawdata.push(teachingmethodsDataset);

    let teachersDataset = {};
    teachersDataset['name'] = 'Teachers';
    teachersDataset['homepage'] = `http://${hostname}/api/teachers`;
    datasetsrawdata.push(teachersDataset);

    let subjectsDataset = {};
    subjectsDataset['name'] = 'Subjects';
    subjectsDataset['homepage'] = `http://${hostname}/api/subjects`;
    datasetsrawdata.push(subjectsDataset);

    let studentsDataset = {};
    studentsDataset['name'] = 'Students';
    studentsDataset['homepage'] = `http://${hostname}/api/students`;
    datasetsrawdata.push(studentsDataset);

    let roomsDataset = {};
    roomsDataset['name'] = 'Rooms';
    roomsDataset['homepage'] = `http://${hostname}/api/rooms`;
    datasetsrawdata.push(roomsDataset);

    let materialsDataset = {};
    materialsDataset['name'] = 'Materials';
    materialsDataset['homepage'] = `http://${hostname}/api/materials`;
    datasetsrawdata.push(materialsDataset);

    let languagesDataset = {};
    languagesDataset['name'] = 'Languages';
    languagesDataset['homepage'] = `http://${hostname}/api/languages`;
    datasetsrawdata.push(languagesDataset);

    let facultiesDataset = {};
    facultiesDataset['name'] = 'Faculties';
    facultiesDataset['homepage'] = `http://${hostname}/api/faculties`;
    datasetsrawdata.push(facultiesDataset);

    let departmentsDataset = {};
    departmentsDataset['name'] = 'Departments';
    departmentsDataset['homepage'] = `http://${hostname}/api/departments`;
    datasetsrawdata.push(departmentsDataset);

    let buildingsDataset = {};
    buildingsDataset['name'] = 'Buildings';
    buildingsDataset['homepage'] = `http://${hostname}/api/buildings`;
    datasetsrawdata.push(buildingsDataset);

    let assessmentmethodsDataset = {};
    assessmentmethodsDataset['name'] = 'Assessment Methods';
    assessmentmethodsDataset['homepage'] = `http://${hostname}/api/assessmentmethods`;
    datasetsrawdata.push(assessmentmethodsDataset);

    let academictermsDataset = {};
    academictermsDataset['name'] = 'Academic Terms';
    academictermsDataset['homepage'] = `http://${hostname}/api/academicterms`;
    datasetsrawdata.push(academictermsDataset);

    let coursesDataset = {};
    coursesDataset['name'] = 'Courses';
    coursesDataset['homepage'] = `http://${hostname}/api/courses`;
    datasetsrawdata.push(coursesDataset);

    let coursesteachersDataset = {};
    coursesteachersDataset['name'] = 'Courses Teachers';
    coursesteachersDataset['homepage'] = `http://${hostname}/api/coursesteachers`;
    datasetsrawdata.push(coursesteachersDataset);

    let coursesmaterialsDataset = {};
    coursesmaterialsDataset['name'] = 'Courses Materials';
    coursesmaterialsDataset['homepage'] = `http://${hostname}/api/coursesmaterials`;
    datasetsrawdata.push(coursesmaterialsDataset);

    let coursesacademictermsDataset = {};
    coursesacademictermsDataset['name'] = 'Courses Academic Terms';
    coursesacademictermsDataset['homepage'] = `http://${hostname}/api/coursesacademicterms`;
    datasetsrawdata.push(coursesacademictermsDataset);

    let coursesstudentsDataset = {};
    coursesstudentsDataset['name'] = 'Courses Students';
    coursesstudentsDataset['homepage'] = `http://${hostname}/api/coursesstudents`;
    datasetsrawdata.push(coursesstudentsDataset);

    return datasetsrawdata;
}




