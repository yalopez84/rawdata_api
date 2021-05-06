import { Router }  from 'express';
const router = Router();
import { createSubject, getOneSubject, getSubjects, deleteSubject, updateSubject} from '../controllers/subject.controller';

router.get('/',getSubjects);
router.post('/', createSubject);
router.get('/:id',getOneSubject);
router.delete('/:id',deleteSubject);
router.put('/:id',updateSubject);

export default router;