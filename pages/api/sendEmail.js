import { EmailTemplate } from '../../components/EmailTemplate';
import Resend from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { email, message, firstName } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello world',
      react: EmailTemplate({ firstName, email, message }),
    });

    if (error) {
      return res.status(400).json(error);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
