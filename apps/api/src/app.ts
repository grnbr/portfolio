import express from 'express';

import adminRouter from './routes/admin/index.js';
import contactRouter from './routes/contact.js';

const app = express();

app.use(express.json());

app.use('/api/admin', adminRouter);
app.use('/api/contact', contactRouter);

export default app;
