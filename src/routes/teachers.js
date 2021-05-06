import { Router }  from 'express';
const router = Router();
import { createTeacher, getOneTeacher, getTeachers, deleteTeacher, updateTeacher} from '../controllers/teacher.controller';

router.get('/',getTeachers);
router.post('/', createTeacher);
router.get('/:id',getOneTeacher);
router.delete('/:id',deleteTeacher);
router.put('/:id',updateTeacher);

export default router;