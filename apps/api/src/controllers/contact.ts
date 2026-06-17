import { ContactFormData, schemas } from '@portfolio/types';
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

  notifyTelegram({ email, message, name, subject }).catch((err) =>
    console.error('Telegram notification failed:', err),
  );

  res.status(201).json({ data: newMessage, message: 'contact received' });
};

async function notifyTelegram({
  email,
  message,
  name,
  subject,
}: ContactFormData) {
  const text = `
📩 New Portfolio Message
👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message:
${message}
  `;

  const res = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        parse_mode: 'HTML',
        text,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    },
  );

  const data = (await res.json()) as { description?: string; ok: boolean };
  if (!data.ok) {
    throw new Error(data.description ?? 'Telegram API error');
  }
}
