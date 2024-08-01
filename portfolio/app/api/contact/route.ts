const nodemailer = require('nodemailer');
import dotenv from 'dotenv';
import { NextResponse } from 'next/server';
dotenv.config();
export async function POST(req: Request) {
  try {
      const transporter = nodemailer.createTransport({
          service: 'Gmail', 
          auth: {
              user: 'bhattnik442@gmail.com', 
              pass: process.env.GMAIL_PASSWORD!, 
          },
      });

      const { name, email, message } = await req.json();
      const data={name,email,message}

      const mailOptions = {
          from: email, 
          to: 'bhattnik442@gmail.com',
          subject: `Message from ${name}`,
          text: JSON.stringify(data), 
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);

      return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}