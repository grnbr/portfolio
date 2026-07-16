import { schemas } from '@portfolio/types';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import { Request, Response } from 'express';

import { signToken } from '../lib/auth.js';

const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

if (!ADMIN_PASSWORD_HASH) {
  throw new Error('ADMIN_PASSWORD_HASH is not configured');
}

export const login = async (req: Request, res: Response) => {
  const { LoginRequest } = schemas;
  const result = LoginRequest.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: result.error.flatten(req.body) });
    return;
  }

  const { password } = result.data;

  const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

  if (!isValid) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const token = signToken();

  res.cookie('admin_token', token, {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });

  res.json({ success: true });
};
