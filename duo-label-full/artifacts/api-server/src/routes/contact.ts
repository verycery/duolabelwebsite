import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const {
    inquiryType,
    companyName,
    contactPerson,
    phone,
    email,
    industry,
    labelType,
    quantity,
    details,
  } = req.body as Record<string, string>;

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const contactTo = process.env.CONTACT_TO_EMAIL ?? "info@duolabel.com";

  if (!smtpUser || !smtpPass) {
    req.log.warn({ companyName, email }, "SMTP not configured — form submission received but email not sent");
    res.json({ ok: true });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
      <div style="background: #0EA5E9; padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 22px;">Yeni Talep — Duo Label</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Web sitesi iletişim formu</p>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 160px; font-size: 13px;">Talep Türü</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #111;">${inquiryType ?? "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Şirket</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #111;">${companyName ?? "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">İlgili Kişi</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${contactPerson ?? "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Telefon</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${phone ?? "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">E-posta</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #0EA5E9;">${email ?? "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Sektör</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${industry ?? "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Etiket Türü</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${labelType ?? "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Miktar</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${quantity ?? "—"}</td></tr>
        </table>
        ${details ? `
        <div style="margin-top: 24px; background: #f0f4f8; border-radius: 8px; padding: 16px;">
          <p style="margin: 0 0 8px; color: #666; font-size: 13px; font-weight: bold;">Detaylar / Notlar</p>
          <p style="margin: 0; color: #111; line-height: 1.6;">${details.replace(/\n/g, '<br>')}</p>
        </div>` : ""}
      </div>
      <div style="padding: 20px 32px; background: #f0f4f8; text-align: center; color: #999; font-size: 12px;">
        Duo Label — duolabel.com.tr
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Duo Label Website" <${smtpUser}>`,
    to: contactTo,
    replyTo: email ?? smtpUser,
    subject: `Yeni Talep: ${inquiryType ?? "—"} — ${companyName ?? "—"}`,
    html,
  });

  req.log.info({ companyName, email }, "Contact form email sent");
  res.json({ ok: true });
});

export default router;
