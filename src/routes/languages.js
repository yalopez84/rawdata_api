import { Router }  from 'express';

const router = Router();
import { createLanguage, getOneLanguage, getLanguages, deleteLanguage, updateLanguage} from '../controllers/language.controller';

router.get('/',getLanguages);
router.post('/', createLanguage);
router.get('/:id',getOneLanguage);
router.delete('/:id',deleteLanguage);
router.put('/:id',updateLanguage);

export default router;