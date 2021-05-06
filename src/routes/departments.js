import { Router }  from 'express';
const router = Router();
import { createDepartment, getOneDepartment, getDepartments, deleteDepartment, updateDepartment} from '../controllers/department.controller';

router.get('/',getDepartments);
router.post('/', createDepartment);
router.get('/:id',getOneDepartment);
router.delete('/:id',deleteDepartment);
router.put('/:id',updateDepartment);

export default router;