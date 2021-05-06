import { Router }  from 'express';
const router = Router();
import { createCourseAcademicTerm, getOneCourseAcademicTerm, getCoursesAcademicTerms, deleteCourseAcademicTerm, updateCourseAcademicTerm} from '../controllers/courseacademicterm.controller';

router.get('/',getCoursesAcademicTerms);
router.post('/', createCourseAcademicTerm);
router.get('/:id',getOneCourseAcademicTerm);
router.delete('/:id',deleteCourseAcademicTerm);
router.put('/:id',updateCourseAcademicTerm);

export default router;