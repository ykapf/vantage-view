import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_NAME } from "../../config/site";

const LIMITS = { firstName: 100, lastName: 100, email: 200, subject: 100, message: 5000 } as const;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const json: unknown = await request.json();
    if (!json || typeof json !== "object") throw new Error();
    body = json as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // Honeypot

  const data = {} as Record<keyof typeof LIMITS, string>;
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    const raw = typeof body[key] === "string" ? (body[key] as string).trim().slice(0, LIMITS[key]) : "";
    data[key] = key === "message" ? raw : raw.replace(/[\r\n]+/g, " ");
  }
  if (
    !data.firstName ||
    !data.lastName ||
    !data.message ||
    !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(data.email)
  )
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, ENQUIRY_RECIPIENT } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !ENQUIRY_RECIPIENT) {
    console.error("Enquiry email is not configured");
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
  }

  const port = Number(SMTP_PORT || 587);
  try {
    await nodemailer
      .createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      })
      .sendMail({
        from: `"${SITE_NAME} website" <${SMTP_USER}>`,
        to: ENQUIRY_RECIPIENT,
        replyTo: data.email,
        subject: `${data.subject || "Enquiry"} - ${data.firstName} ${data.lastName}`,
        text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nService: ${data.subject || "-"}\n\n${data.message}`,
      });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send enquiry:", error);
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 500 });
  }
}
