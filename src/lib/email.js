import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY);

export const send = ({ from, to, subject, html, text }) => {
  const msg = { from, to, subject, html, text };

  return mail.send(msg);
};

export default send;
