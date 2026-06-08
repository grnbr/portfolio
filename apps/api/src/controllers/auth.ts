import { schemas } from '@portfolio/types';
import 'dotenv/config';
import { Request, Response } from 'express';

import { signToken } from '../lib/auth.js';

export const login = async (req: Request, res: Response) => {
  const { LoginRequest } = schemas;
  const result = LoginRequest.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ errors: result.error.flatten() });
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
