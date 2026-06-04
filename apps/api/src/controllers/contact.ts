import { Request, Response } from 'express';
import z from 'zod';

import prisma from '../lib/prisma.js';
import { ContactSchema } from '../types/contact.js';

export const createContact = async (req: Request, res: Response) => {
  const result = ContactSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ errors: z.treeifyError(result.error) });
    return;
  }

  const { email, message, name } = result.data;

  const newMessage = await prisma.message.create({
    data: { email, message, name },
  });

  res.status(201).json({ data: newMessage, message: 'contact received' });
};
