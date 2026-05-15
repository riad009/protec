import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: (process.env.EMAIL_HOST || '').trim(),
    port: Number((process.env.EMAIL_PORT || '587').trim()),
    secure: false,
    auth: {
      user: (process.env.EMAIL_USER || '').trim(),
      pass: (process.env.EMAIL_PASS || '').replace(/\s/g, ''),
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_FROM}>`,
    to: 'info@protecsys.ch',
    replyTo: email,
    subject: subject ? `[Contact] ${subject}` : `[Contact] New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\n${message}`,
    html: `
      <h2>New contact message</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone || 'N/A'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Subject</td><td style="padding:8px">${subject || 'N/A'}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
