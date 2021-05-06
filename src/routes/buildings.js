import { Router }  from 'express';
const router = Router();
import { createBuilding, getOneBuilding, getBuildings, deleteBuilding, updateBuilding} from '../controllers/building.controller';

router.get('/',getBuildings);
router.post('/', createBuilding);
router.get('/:id',getOneBuilding);
router.delete('/:id',deleteBuilding);
router.put('/:id',updateBuilding);

export default router;