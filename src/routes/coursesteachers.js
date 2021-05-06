import { Router }  from 'express';
const router = Router();
import { createCourseTeacher, getOneCourseTeacher, getCoursesTeachers, deleteCourseTeacher, updateCourseTeacher} from '../controllers/courseteacher.controller';

router.get('/',getCoursesTeachers);
router.post('/', createCourseTeacher);
router.get('/:id',getOneCourseTeacher);
router.delete('/:id',deleteCourseTeacher);
router.put('/:id',updateCourseTeacher);

export default router;