
import { EmailTemplate } from '../../components/EmailTemplate';
import Resend from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { email, message, firstName } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello world',
      react: EmailTemplate({ firstName, email, message }),
    });

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
