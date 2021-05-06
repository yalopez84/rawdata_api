import { Router }  from 'express';
const router = Router();
import { createAssessmentmethod, getOneAssessmentmethod, getAssessmentmethods, deleteAssessmentmethod, updateAssessmentmethod} from '../controllers/assessmentmethod.controller';

router.get('/',getAssessmentmethods);
router.post('/', createAssessmentmethod);
router.get('/:id',getOneAssessmentmethod);
router.delete('/:id',deleteAssessmentmethod);
router.put('/:id',updateAssessmentmethod);

export default router;