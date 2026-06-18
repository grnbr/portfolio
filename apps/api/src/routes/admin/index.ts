import { Router } from 'express';

import authRouter from './auth.js';
import messagesRouter from './messages.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/messages', messagesRouter);

export default router;
