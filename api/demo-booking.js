import nodemailer from "nodemailer"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const json = (res, status, body) => {
  res.status(status).setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(body))
}

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

const emailShell = (content) => `
  <div style="margin:0;padding:0;background:#f4fbf9;font-family:Inter,Arial,sans-serif;color:#071312">
    <div style="max-width:640px;margin:0 auto;padding:28px 16px">
      <div style="background:#071312;border-radius:22px 22px 0 0;padding:24px 28px;color:#ffffff">
        <div style="font-size:28px;font-weight:800;letter-spacing:-0.04em">Arevei</div>
        <div style="margin-top:8px;color:#a7b7b3;font-size:13px;letter-spacing:0.16em;text-transform:uppercase">AI Native Website Manager</div>
      </div>
      <div style="background:#ffffff;border:1px solid #d8ebe6;border-top:0;border-radius:0 0 22px 22px;padding:28px">
        ${content}
      </div>
      <p style="margin:18px 0 0;text-align:center;color:#6b7b78;font-size:12px">
        Arevei Technologies - Shakyawar Mediatech LLP
      </p>
    </div>
  </div>
`

async function sendEmail({ to, subject, html, replyTo }) {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM || process.env.DEMO_FORM_FROM_EMAIL || user

  if (!host || !user || !pass || !from) {
    throw new Error("SMTP_HOST, SMTP_USER, SMTP_PASS, and SMTP_FROM must be configured.")
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  await transporter.sendMail({
    from,
    to,
    subject,
    html,
    replyTo,
  })
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return json(res, 405, { message: "Method not allowed." })
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {}
    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim().toLowerCase()
    const contactNumber = String(body.contactNumber || "").trim()
    const source = String(body.source || "Landing page").trim()
    const page = String(body.page || "/landing").trim()

    if (!name || !email || !contactNumber) {
      return json(res, 400, { message: "Please provide name, email, and contact number." })
    }

    if (!emailPattern.test(email)) {
      return json(res, 400, { message: "Please provide a valid email address." })
    }

    const adminEmail = process.env.DEMO_FORM_ADMIN_EMAIL || "admin@arevei.com"
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeContact = escapeHtml(contactNumber)
    const safeSource = escapeHtml(source)
    const safePage = escapeHtml(page)

    await sendEmail({
      to: adminEmail,
      replyTo: email,
      subject: `New demo request from ${name}`,
      html: emailShell(`
          <h2 style="margin:0 0 12px;font-size:24px;color:#071312">New demo request</h2>
          <p style="margin:0 0 18px;color:#4c5d59;line-height:1.7">A new landing page demo request was submitted.</p>
          <table cellpadding="10" cellspacing="0" style="width:100%;border-collapse:collapse;background:#f7fbfa;border-radius:14px;overflow:hidden">
            <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${safeEmail}</td></tr>
            <tr><td><strong>Contact Number</strong></td><td>${safeContact}</td></tr>
            <tr><td><strong>Source</strong></td><td>${safeSource}</td></tr>
            <tr><td><strong>Page</strong></td><td>${safePage}</td></tr>
          </table>
      `),
    })

    await sendEmail({
      to: email,
      replyTo: adminEmail,
      subject: "We received your Arevei demo request",
      html: emailShell(`
          <h2 style="margin:0 0 12px;font-size:24px;color:#071312">Thanks, ${safeName}.</h2>
          <p style="margin:0 0 16px;color:#4c5d59;line-height:1.7">
            We received your demo request. The Arevei team will review your query and contact you shortly.
          </p>
          <div style="margin:22px 0;padding:18px;border-radius:16px;background:#e8fffb;border:1px solid #b8f4ea">
            <strong style="display:block;color:#063c32;margin-bottom:6px">What happens next?</strong>
            <span style="color:#31534d;line-height:1.7">A team member will reach out to understand your website goals and suggest the best next step.</span>
          </div>
          <p style="margin:0;color:#4c5d59;line-height:1.7">Team Arevei</p>
      `),
    })

    return json(res, 200, { message: "Demo request sent." })
  } catch (error) {
    return json(res, 500, {
      message:
        error instanceof Error
          ? error.message
          : "Unable to send demo request right now.",
    })
  }
}
