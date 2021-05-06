import { Router }  from 'express';
const router = Router();
import { createAcademicTerm, getOneAcademicTerm, getAcademicTerms, deleteAcademicTerm, updateAcademicTerm} from '../controllers/academicterm.controller';

router.get('/', getAcademicTerms);
router.post('/', createAcademicTerm);
router.get('/:id',getOneAcademicTerm);
router.delete('/:id',deleteAcademicTerm);
router.put('/:id',updateAcademicTerm);

export default router;