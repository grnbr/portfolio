import { schemas } from '@portfolio/types';
import { Request, Response } from 'express';

import prisma from '../lib/prisma.js';

export const createContact = async (req: Request, res: Response) => {
  const { ContactRequest } = schemas;
  const result = ContactRequest.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ errors: result.error.flatten() });
    return;
  }

  const { email, message, name, subject } = result.data;

  const newMessage = await prisma.message.create({
    data: { email, message, name, subject },
  });

  res.status(201).json({ data: newMessage, message: 'contact received' });
};
