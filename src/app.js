import express, { json } from 'express';
import morgan from 'morgan';
import serverconfig from '../config_files/server_config';
const hostname = serverconfig.hostname;

import universityRoutes from './routes/universities';
import teachingmethodRoutes from './routes/teachingmethods';
import teacherRoutes from './routes/teachers';
import subjectRoutes from './routes/subjects';
import studentRoutes from './routes/students';
import roomRoutes from './routes/rooms';
import materialRoutes from './routes/materials';
import languageRoutes from './routes/languages';
import facultyRoutes from './routes/faculties';
import departmentRoutes from './routes/departments';
import buildingRoutes from './routes/buildings';
import assessmentmethodRoutes from './routes/assessmentmethods';
import academictermRoutes from './routes/academicterms';
import courseRoutes from './routes/courses';
import courseteacherRoutes from './routes/coursesteachers';
import coursematerialRoutes from './routes/coursesmaterials';
import courseacademictermRoutes from './routes/coursesacademicterms';
import coursestudentRoutes from './routes/coursesstudents';
import homeRoutes from './routes/home';

const app = express();

app.use(morgan('dev'));
app.use(json());

app.use('/api/universities', universityRoutes);
app.use('/api/teachingmethods', teachingmethodRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/faculties', facultyRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/buildings', buildingRoutes);
app.use('/api/assessmentmethods', assessmentmethodRoutes);
app.use('/api/academicTerms', academictermRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/coursesteachers', courseteacherRoutes);
app.use('/api/coursesmaterials', coursematerialRoutes);
app.use('/api/coursesacademicterms', courseacademictermRoutes);
app.use('/api/coursesstudents', coursestudentRoutes);
app.use('/api/', homeRoutes);


app.use((req, res) => {
    res.status(404).write(`Page not found, try http://${hostname}/api/`);
    res.end();
});

export default app;






