import { Router }  from 'express';
const router = Router();
import { createCourseStudent, getOneCourseStudent, getCoursesStudents, deleteCourseStudent, updateCourseStudent} from '../controllers/coursestudent.controller';

router.get('/',getCoursesStudents);
router.post('/', createCourseStudent);
router.get('/:id',getOneCourseStudent);
router.delete('/:id',deleteCourseStudent);
router.put('/:id',updateCourseStudent);

export default router;