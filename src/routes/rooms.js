import { Router }  from 'express';
const router = Router();
import { createRoom, getOneRoom, getRooms, deleteRoom, updateRoom} from '../controllers/room.controller';

router.get('/',getRooms);
router.post('/', createRoom);
router.get('/:id',getOneRoom);
router.delete('/:id',deleteRoom);
router.put('/:id',updateRoom);

export default router;