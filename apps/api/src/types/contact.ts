import z from 'zod';

export const ContactSchema = z.object({
  email: z.email(),
  message: z.string().min(1),
  name: z.string().min(1),
});

export type ContactBody = z.infer<typeof ContactSchema>;
