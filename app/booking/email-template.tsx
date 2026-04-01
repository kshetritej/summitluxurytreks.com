type InquiryEmailData = {
  fullName: string;
  email: string;
  phone?: string;
  destination: string;
  groupSize: string;
  startDate: string;
  experienceLevel?: string;
  message: string;
};

const LABEL: Record<string, string> = {
  // group size
  "1": "Solo (1 person)",
  "2": "Couple (2 people)",
  "3-5": "Small group (3–5 people)",
  "6-10": "Medium group (6–10 people)",
  "10+": "Large group (10+ people)",
  // experience
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

function row(icon: string, label: string, value: string) {
  return `
    <tr>
      <td style="padding:11px 0;border-bottom:1px solid #f3f4f6;vertical-align:top;width:28px;font-size:16px;">${icon}</td>
      <td style="padding:11px 14px;border-bottom:1px solid #f3f4f6;vertical-align:top;">
        <span style="display:block;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9ca3af;margin-bottom:3px;">${label}</span>
        <span style="font-size:14px;color:#111827;font-weight:500;font-family:Arial,sans-serif;">${value}</span>
      </td>
    </tr>`;
}

export function buildInquiryEmail(data: InquiryEmailData): string {
  const groupLabel = LABEL[data.groupSize] ?? data.groupSize;
  const expLabel = data.experienceLevel
    ? (LABEL[data.experienceLevel] ?? data.experienceLevel)
    : "Not specified";

  const formattedDate = data.startDate
    ? new Date(data.startDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not specified";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Booking Inquiry — Summit Luxury Treks</title>
</head>
<body style="margin:0;padding:0;background-color:#f9fafb;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">

          <!-- ── Header — orange brand bar ── -->
          <tr>
            <td style="background:#c97d10;padding:36px 40px 30px;text-align:center;">
              <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.75);font-family:Arial,sans-serif;">Summit Luxury Treks</p>
              <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:700;font-family:Arial,sans-serif;letter-spacing:-0.3px;">
                New Booking Inquiry
              </h1>
              <p style="margin:0;color:rgba(255,255,255,0.75);font-size:13px;font-family:Arial,sans-serif;">
                A trekker wants to explore — details below.
              </p>
            </td>
          </tr>

          <!-- ── Name strip ── -->
          <tr>
            <td style="background:#fff8ed;border-top:1px solid #fde68a;border-bottom:1px solid #fde68a;padding:18px 40px;text-align:center;">
              <p style="margin:0;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#9ca3af;font-family:Arial,sans-serif;">Inquiry from</p>
              <p style="margin:5px 0 0;font-size:22px;font-weight:700;color:#111827;font-family:Arial,sans-serif;">${data.fullName}</p>
            </td>
          </tr>

          <!-- ── Body ── -->
          <tr>
            <td style="padding:32px 40px;">

              <!-- Trek details -->
              <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;">Trek Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                ${row("📍", "Destination", data.destination)}
                ${row("📅", "Start Date", formattedDate)}
                ${row("👥", "Group Size", groupLabel)}
                ${row("🧗", "Experience Level", expLabel)}
              </table>

              <!-- Contact -->
              <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;">Contact Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                ${row("✉️", "Email", `<a href="mailto:${data.email}" style="color:#c97d10;text-decoration:none;">${data.email}</a>`)}
                ${row("📞", "Phone", data.phone || "Not provided")}
              </table>

              <!-- Message -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#6b7280;font-family:Arial,sans-serif;">Message</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-left:3px solid #c97d10;border-radius:0 6px 6px 0;padding:16px 20px;margin-bottom:32px;">
                <p style="margin:0;font-size:14px;color:#374151;line-height:1.75;font-family:Arial,sans-serif;">${data.message.replace(/\n/g, "<br/>")}</p>
              </div>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a
                      href="mailto:${data.email}?subject=Re: Your Trek Inquiry — ${data.destination}"
                      style="display:inline-block;background:#c97d10;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:13px 32px;border-radius:6px;font-family:Arial,sans-serif;letter-spacing:0.03em;"
                    >
                      Reply to ${data.email} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="background:#111827;padding:22px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:700;color:#d1d5db;font-family:Arial,sans-serif;letter-spacing:0.08em;text-transform:uppercase;">Summit Luxury Treks</p>
              <p style="margin:0;font-size:11px;color:#6b7280;font-family:Arial,sans-serif;">Pokhara, Nepal &nbsp;·&nbsp; info@summitluxurytreks.com</p>
              <p style="margin:14px 0 0;font-size:10px;color:#374151;font-family:Arial,sans-serif;">Auto-generated from the booking inquiry form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}
