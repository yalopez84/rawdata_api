import { Router }  from 'express';
const router = Router();
import { createFaculty, getOneFaculty, getFaculties, deleteFaculty, updateFaculty} from '../controllers/faculty.controller';

router.get('/',getFaculties);
router.post('/', createFaculty);
router.get('/:id',getOneFaculty);
router.delete('/:id',deleteFaculty);
router.put('/:id',updateFaculty);

export default router;