import { Router } from 'express';
import { searchBook } from '../controllers/search/search.controller.js';

const router = Router();

router.get('', searchBook);

export default router;
