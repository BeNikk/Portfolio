const nodemailer = require('nodemailer');
import dotenv from 'dotenv';
import { NextResponse } from 'next/server';
dotenv.config;
export async function POST(req:Request){
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
              user: 'bhattnik442@gmail.com', 
              pass:process.env.GMAIL_PASSWORD!,
            },
          });
          const { name, email, message } =await req.json();
          const mailOptions = {
            from: email,
            to: "bhattnik442@gmail.com",
            text: message,
          };
          await transporter.sendMail(mailOptions, (error:any, info:any) => {
            if (error) {
              console.error('Error sending email:', error);
              return new NextResponse("Some error occured")
            } else {
              console.log('Email sent: ' + info.response);
              return new NextResponse("Success",{status:200});
            }
          });
        
    } catch (error) {

        console.log(error);
        return new NextResponse("Error");

        
    }
}