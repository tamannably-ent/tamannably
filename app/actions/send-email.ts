'use server';

import { Resend } from 'resend';
import { render } from '@react-email/render';
import { contactFormSchema, type ContactFormInputs } from '@/lib/schema';
import ContactEmail from '@/components/email/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

type FormState = {
  status: 'initial' | 'success' | 'error';
  message: string | null;
  errors: Record<string, string[]> | null;
};

export async function sendEmailAction(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form data with Zod
  const validation = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validation.success) {
    return {
      status: 'error',
      message: 'Validation failed.',
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validation.data;

  try {
    const emailHtml = render(
      <ContactEmail name={name} email={email} message={message} />
    );

    await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL!,
      to: process.env.RESEND_RECEIVER_EMAIL!,
      subject: `New message from ${name}`,
      html: emailHtml,
    });

    return {
      status: 'success',
      message: 'Email sent successfully!',
      errors: null,
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      status: 'error',
      message: 'Failed to send email. Please try again later.',
      errors: null,
    };
  }
}