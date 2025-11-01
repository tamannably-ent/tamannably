import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().trim().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;