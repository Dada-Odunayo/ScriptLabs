import { Resend } from "resend";
import { NextResponse } from "next/server";

const resendApiKey = process.env.RESEND_API_KEY;
const contactInbox = process.env.CONTACT_EMAIL;
const senderAddress = process.env.RESEND_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  if (!resend || !senderAddress || !contactInbox) {
    return NextResponse.json(
      { error: "Missing Resend environment configuration." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const sanitizedMessage = message.replace(/\n/g, "<br />");

  const { data, error } = await resend.emails.send({
    from: senderAddress,
    to: contactInbox,
    subject: `New ScriptLabs inquiry from ${name}`,
    replyTo: email,
    html: `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${sanitizedMessage}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ data });
}