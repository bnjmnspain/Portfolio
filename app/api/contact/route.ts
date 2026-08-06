import { NextRequest, NextResponse } from "next/server";

/**
 * Minimal contact form handler. This validates and logs the submission but
 * does not send an email by default — plug in a provider such as Resend,
 * Postmark, SendGrid, or a Formspree/Basin endpoint here.
 *
 * Example with Resend:
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from, to, subject, html });
 */
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: replace with a real email send — this only logs server-side for now.
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
