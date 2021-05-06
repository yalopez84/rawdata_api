import { Router }  from 'express';
const router = Router();
import { createUniversity, getOneUniversity, getUniversities, deleteUniversity, updateUniversity} from '../controllers/university.controller';

router.get('/',getUniversities);
router.post('/', createUniversity);
router.get('/:id',getOneUniversity);
router.delete('/:id',deleteUniversity);
router.put('/:id',updateUniversity);

export default router;