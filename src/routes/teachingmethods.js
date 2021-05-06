import { Router }  from 'express';
const router = Router();
import { createTeachingmethod, getOneTeachingmethod, getTeachingmethods, deleteTeachingmethod, updateTeachingmethod} from '../controllers/teachingmethod.controller';

router.get('/',getTeachingmethods);
router.post('/', createTeachingmethod);
router.get('/:id',getOneTeachingmethod);
router.delete('/:id',deleteTeachingmethod);
router.put('/:id',updateTeachingmethod);

export default router;