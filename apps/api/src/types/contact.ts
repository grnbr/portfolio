import z from 'zod';

export const ContactSchema = z.object({
  email: z.email().min(1),
  message: z.string().min(1),
  name: z.string(),
});

export type ContactBody = z.infer<typeof ContactSchema>;
