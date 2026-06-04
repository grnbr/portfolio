import 'dotenv/config';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET!;

export function signToken(): string {
  return jwt.sign({ admin: true }, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): jwt.JwtPayload | string {
  return jwt.verify(token, SECRET);
}
