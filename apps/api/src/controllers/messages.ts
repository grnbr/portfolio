import { Request, Response } from 'express';

import prisma from '../lib/prisma.js';

export const getMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
