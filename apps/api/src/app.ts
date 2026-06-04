import express from 'express';

// import authRouter from './routes/auth.js';
import contactRouter from './routes/contact.js';
// import messagesRouter from './routes/messages.js';

const app = express();

app.use(express.json());

// app.use('/auth', authRouter);
app.use('/contact', contactRouter);
// app.use('/messages', messagesRouter);

export default app;
