import z from 'zod';

export const LoginSchema = z.object({
  password: z.string().min(1).max(255),
});

export type LoginBody = z.infer<typeof LoginSchema>;
