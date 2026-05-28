import { Request, Response } from 'express';
import z from 'zod';

import { ContactSchema } from '../types/contact.js';

export const createContact = async (req: Request, res: Response) => {
  const result = ContactSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ errors: z.treeifyError(result.error) });
    return;
  }

  const { email, message, name } = result.data;

  res
    .status(201)
    .json({ data: { email, message, name }, message: 'contact received' });
};
