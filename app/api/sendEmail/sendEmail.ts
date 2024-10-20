import nodemailer from 'nodemailer';

export default async function handler(req: { body: { fullName: any; email: any; phone: any; message: any; }; method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error?: unknown; }): void; new(): any; }; }; }) {
  const { fullName, email, phone, message } = req.body;

  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'alphaprintinnovations@gmail.com', // Replace with your Gmail account
        pass: 'your-email-password', // Use an app password or OAuth token
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'alphaprintinnovations@gmail.com',
        subject: `Message from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Email failed to send', error });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}