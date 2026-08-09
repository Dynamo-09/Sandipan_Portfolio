import express, { Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/api/contact', async (req: Request, res: Response): Promise<void> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  try {
    // Note: For actual email sending, you will need to configure SMTP details in .env
    // Here we use a mock transporter or ethereal email if no real credentials exist.
    // For the request: email goes to "sandipanbhattacharya06@gmail.com"
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'mock@example.com',
        pass: process.env.EMAIL_PASS || 'mockpassword'
      }
    });

    const mailOptions = {
      from: email, // sender address
      to: 'sandipanbhattacharya06@gmail.com', // list of receivers
      subject: `New Contact from Portfolio: ${name}`, // Subject line
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain text body
    };

    // In a real app, you would send the email here.
    // Since we don't have valid credentials configured yet, we will just simulate it
    // if there are no env vars, or attempt to send if there are.
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Mock Email sent to sandipanbhattacharya06@gmail.com:', mailOptions);
    }
    
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
