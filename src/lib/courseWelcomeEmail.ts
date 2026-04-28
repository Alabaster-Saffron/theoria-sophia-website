// Welcome email for course purchases. Sent by /api/webhook on
// successful Stripe checkout. Falls back to console.log if Resend
// isn't configured so the rest of the flow still works.

interface WelcomeEmailParams {
  toEmail: string;
  toName: string;
  courseName: string;
  passcode: string;
  courseUrl: string;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

function welcomeEmailHtml(p: WelcomeEmailParams) {
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
                  Welcome, ${escapeHtml(p.toName)}
                </h1>
                <p style="margin:12px 0 0;font-family:Georgia,serif;font-style:italic;color:#6B5E50;font-size:18px;">
                  to the garden within.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.9;color:#6B5E50;">
                <p style="margin:0 0 18px;">Beloved ${escapeHtml(p.toName)},</p>
                <p style="margin:0 0 18px;">
                  Thank you for enrolling in <em>${escapeHtml(p.courseName)}</em>. It is a quiet honor to walk this path beside you.
                </p>
                <p style="margin:0 0 18px;">
                  This course is a slow blooming. There is no race, no measure, no perfection to achieve. I invite you to follow the material intuitively, let it bloom in you in its own rhythm. Some sections may ask to be revisited many times. Others will sing to you only once. Trust your body. It is the temple. It already knows the way home.
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
                  ${escapeHtml(p.passcode)}
                </p>
                <a href="${escapeHtml(p.courseUrl)}" style="display:inline-block;padding:16px 36px;background:#B8963E;color:#FFFFFF;text-decoration:none;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.35em;text-transform:uppercase;">
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

export async function sendWelcomeEmail(p: WelcomeEmailParams): Promise<{ sent: boolean; reason?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.warn(
      "[welcome-email] RESEND_API_KEY/RESEND_FROM_EMAIL missing — skipping send",
      { to: p.toEmail, course: p.courseName }
    );
    return { sent: false, reason: "missing-env" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: p.toEmail,
      subject: `Welcome to ${p.courseName} — Your course passcode within`,
      html: welcomeEmailHtml(p),
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("[welcome-email] Resend send failed:", res.status, text);
    return { sent: false, reason: "send-failed" };
  }

  return { sent: true };
}
