import { Router }  from 'express';
const router = Router();
import { createCourseMaterial, getOneCourseMaterial, getCoursesMaterials, deleteCourseMaterial, updateCourseMaterial} from '../controllers/coursematerial.controller';

router.get('/',getCoursesMaterials);
router.post('/', createCourseMaterial);
router.get('/:id',getOneCourseMaterial);
router.delete('/:id',deleteCourseMaterial);
router.put('/:id',updateCourseMaterial);

export default router;