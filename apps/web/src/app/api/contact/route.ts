import { Resend } from 'resend';

import EmailTemplate from '@/app/[lang]/(pages)/contact/components/EmailTempate';
import { ContactFormData } from '@/app/[lang]/(pages)/contact/components/Form';
import { EMAIL } from '@/shared/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.json();
  const { subject } = formData as ContactFormData;
  console.log('formData', formData);
  console.log('apiKey', process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      react: EmailTemplate({ formData }),
      subject: subject || 'New contact message',
      to: EMAIL,
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
