import { Router }  from 'express';
const router = Router();
import { createCourse, getOneCourse, getCourses, deleteCourse, updateCourse} from '../controllers/course.controller';

router.get('/',getCourses);
router.post('/', createCourse);
router.get('/:id',getOneCourse);
router.delete('/:id',deleteCourse);
router.put('/:id',updateCourse);

export default router;

