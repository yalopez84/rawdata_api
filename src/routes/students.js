import { Router }  from 'express';
const router = Router();
import { createStudent, getOneStudent, getStudents, deleteStudent, updateStudent} from '../controllers/student.controller';

router.get('/',getStudents);
router.post('/', createStudent);
router.get('/:id',getOneStudent);
router.delete('/:id',deleteStudent);
router.put('/:id',updateStudent);

export default router;