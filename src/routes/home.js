import { Router }  from 'express';
const router = Router();
import { getHome, saveCourses, saveOther} from '../controllers/rawdata.controller';

router.get('/', getHome);
router.get('/saveCourses', saveCourses);
router.get('/saveOther', saveOther);
export default router;