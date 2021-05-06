import { Router }  from 'express';
const router = Router();
import { createMaterial, getOneMaterial, getMaterials, deleteMaterial, updateMaterial} from '../controllers/material.controller';

router.get('/',getMaterials);
router.post('/', createMaterial);
router.get('/:id',getOneMaterial);
router.delete('/:id',deleteMaterial);
router.put('/:id',updateMaterial);

export default router;