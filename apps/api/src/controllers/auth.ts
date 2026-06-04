import { Request, Response } from 'express';
import 'dotenv/config';
import z from 'zod';

import { signToken } from '../lib/auth.js';
import { LoginSchema } from '../types/auth.js';

export const login = async (req: Request, res: Response) => {
  const result = LoginSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ errors: z.treeifyError(req.body) });
    return;
  }

  const { password } = result.data;

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Invalid password' });
    return;
  }

  const token = signToken();
  res.json({ token });
};
