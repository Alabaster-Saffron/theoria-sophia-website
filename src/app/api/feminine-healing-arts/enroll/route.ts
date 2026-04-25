import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

const COURSE_PASSCODE = "Evesgardenparty";
const COURSE_URL = "/feminine-healing-arts/healing-body-dysmorphia/course";

interface EnrollPayload {
  name: string;
  email: string;
}

function welcomeEmailHtml(name: string, courseLink: string) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#FAF7F2;font-family:Georgia,'Cormorant Garamond',serif;color:#4A3F34;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;padding:40px 20px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;padding:48px 40px;border:1px solid #EDE5D8;">
            <tr>
              <td align="center" style="padding-bottom:24px;">
                <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:0.4em;text-transform:uppercase;color:#B8963E;">
                  Theoria Sophia School
                </p>
                <div style="width:80px;height:1px;background:linear-gradient(90deg,transparent,#B8963E,transparent);margin:24px auto;"></div>
                <h1 style="margin:0;font-family:Georgia,serif;font-weight:300;font-size:30px;line-height:1.2;color:#2C2622;">
                  Welcome, ${escapeHtml(name)}
                </h1>
                <p style="margin:12px 0 0;font-family:Georgia,serif;font-style:italic;color:#6B5E50;font-size:18px;">
                  to the garden within.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.9;color:#6B5E50;">
                <p style="margin:0 0 18px;">Beloved ${escapeHtml(name)},</p>
                <p style="margin:0 0 18px;">
                  Thank you for enrolling in <em>Healing Body Dysmorphia &amp; Reclaiming our Feminine Blueprint</em>. It is a quiet honor to walk this path beside you.
                </p>
                <p style="margin:0 0 18px;">
                  This course is a slow blooming. There is no race, no measure, no perfection to achieve. I invite you to follow the material intuitively — let it bloom in you in its own rhythm. Some sections may ask to be revisited many times. Others will sing to you only once. Trust your body. It is the temple. It already knows the way home.
                </p>
                <p style="margin:0 0 18px;">
                  May this be a sanctuary for your softening, a remembrance of your radiance, and a homecoming to the garden that has always lived within you.
                </p>
                <p style="margin:0 0 18px;font-style:italic;">
                  With reverence and so much love,<br/>
                  Zefirah
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:32px 0 8px;">
                <div style="width:120px;height:1px;background:linear-gradient(90deg,transparent,#D4B86A,#B8963E,#D4B86A,transparent);margin:0 auto 24px;"></div>
                <p style="margin:0 0 8px;font-family:Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:0.4em;text-transform:uppercase;color:#B8963E;">
                  Your Course Passcode
                </p>
                <p style="margin:8px 0 24px;font-family:Georgia,serif;font-size:28px;letter-spacing:0.15em;color:#2C2622;">
                  ${COURSE_PASSCODE}
                </p>
                <a href="${courseLink}" style="display:inline-block;padding:16px 36px;background:#B8963E;color:#FFFFFF;text-decoration:none;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.35em;text-transform:uppercase;">
                  Enter the Course
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding-top:32px;font-family:Helvetica,Arial,sans-serif;font-size:11px;color:#8B7D6B;text-align:center;line-height:1.7;">
                Theoria Sophia &middot; Be still, and bloom.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

async function sendWelcomeEmail(payload: EnrollPayload, origin: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return { sent: false, reason: "missing-env" as const };
  }

  const courseLink = `${origin}${COURSE_URL}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: payload.email,
      subject: "Welcome to Healing Body Dysmorphia — Your course passcode within",
      html: welcomeEmailHtml(payload.name, courseLink),
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return { sent: false, reason: "send-failed" as const, error: text };
  }

  return { sent: true as const };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<EnrollPayload>;
    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();

    if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Please share your name and a valid email." },
        { status: 400 }
      );
    }

    const origin = new URL(request.url).origin;

    const enrollment = {
      id: `enroll-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
      name,
      email,
      course: "healing-body-dysmorphia",
    };

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        await put(
          `enrollments/${enrollment.id}.json`,
          JSON.stringify(enrollment, null, 2),
          {
            access: "public",
            contentType: "application/json",
            addRandomSuffix: false,
          }
        );
      } catch (err) {
        console.warn("[enroll] blob put failed", err);
      }
    }

    const emailResult = await sendWelcomeEmail({ name, email }, origin);

    if (!emailResult.sent) {
      console.warn("[enroll] welcome email not sent", emailResult);
    }

    return NextResponse.json({ ok: true, emailed: emailResult.sent });
  } catch (err) {
    console.error("[enroll] error", err);
    return NextResponse.json(
      { error: "Something went tender. Please try again in a moment." },
      { status: 500 }
    );
  }
}
